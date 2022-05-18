$(document).ready(function() {
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand',
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
