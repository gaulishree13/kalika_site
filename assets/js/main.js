
$("#testimonial-carousel").owlCarousel({
  loop: true,
  autoHeight: true,
  stagePadding:0,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$("#banner-carousel").owlCarousel({
  loop: true,
  autoHeight: true,
  stagePadding:0,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});


$("#news-carousel").owlCarousel({
  loop: false,
  autoHeight: true,
  margin: 20,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    450: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
      stagePadding: 50,
    },
  },
});

const owl = $('#news-carousel');

$(".event-prev").click(function(){
  owl.trigger('prev.owl.carousel', [300])
})

$(".event-next").click(function(){
  owl.trigger('next.owl.carousel', [300])
})

