// toggle
$(".nav-toggle").click(function() {
    $(this).toggleClass("on");
    $("nav").toggleClass("activated");
    $("nav").slideToggle();
});

// Mobile Click Drop Down
$('.dropdown  > a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
});


// Slider section
$(document).ready(function() {
    const $slider = $('.slidersection');
    const $steps = $('#processSteps li');

    $slider.owlCarousel({
        items: 1,
        loop: true, // Enable loop
        nav: true,
        margin: 0,
        dots: true,
        autoplay: true, // Enable autoplay
        autoplayTimeout: 10000, // 10 seconds
        autoplayHoverPause: true,
        onChanged: function(event) {
            let currentIndex = event.item.index - event.relatedTarget._clones.length / 2;
            let realIndex = (currentIndex + $steps.length) % $steps.length;
            $steps.removeClass('active');
            $steps.eq(realIndex).addClass('active');
        }
    });

    $steps.eq(0).addClass('active');

    $steps.each(function(index) {
        $(this).on("click", function() {
            $slider.trigger("to.owl.carousel", [index, 300]);
            $steps.removeClass('active');
            $(this).addClass('active');
        });
    });

    const listItems = document.querySelectorAll(".layersproces li");
    let total = listItems.length;

    listItems.forEach((li, index) => {
        const svg = li.querySelector("svg");
        if (svg) {
            svg.style.zIndex = total - index;
        }
    });
});