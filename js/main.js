// toggle
$(".nav-toggle").click(function () {
    $(this).toggleClass("on");
    $("nav").toggleClass("activated");
    $("nav").slideToggle();
});

// Mobile Click Drop Down
$('.dropdown  > a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
});