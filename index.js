'use strict';
$().ready(function(){
  $('.menu-toggler').on('click', function(){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  })
});

$('#linkedin').on('click',function(event){
  window.location="https://www.linkedin.com/in/hannah-thorpe-b0a8531a3/";
});

$('#github').on('click',function(event){
  window.location="https://github.com/hjthorpe";
});