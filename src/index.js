import 'normalize.css';
import './sass/styles.scss';

$(document).ready(function() {


  $('.hamburger').click(function() {
    const hamburger = $('.hamburger');
    const header = $('.header');
    const body = $('body');

    if (hamburger.hasClass('active')) {
      hamburger.removeClass('active');
      body.removeClass('fix-window');
      return header.removeClass('active');
    } else {
      body.addClass('fix-window');
      hamburger.addClass('active');
      return header.addClass('active');
    }
  });

  $('.slider').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    cssEase: 'linear'
  });
  
});
  
  