import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import LifeExpectancy from './js/LifeExpectancy.js';
// import Calculator from './js/Calculator.js';


$(document).ready(function() {
  $('#triangle-checker-form').submit(function(event) {
    event.preventDefault();
    const length1 = $('#length1').val();
    const length2 = $('#length2').val();
    const length3 = $('#length3').val();
    // const triangle = new Triangle(length1, length2, length3);
    const response = length1 + ":" + length2 + ":" + length3;
    $('#response').append("<p>" + response + "</p>");
  });

  $('#rectangle-area-form').submit(function(event) {
    event.preventDefault();
    const length1 = parseInt($('#rect-length1').val());
    const length2 = parseInt($('#rect-length2').val());
    // const rectangle = new Rectangle();
    // console.log(rectangle);
    const response = length1 + ":" + length2;
    $('#response2').append(`<p> The area of the rectangle is ${response}.</p>`);
  });

});