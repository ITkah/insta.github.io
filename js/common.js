$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
});


$(".unch").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top - 80;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$(".header_serach input").on("click", function() {
    $(".hide_search").show();
});

$(".close").on("click", function() {
    $(".hide_search").hide();
});