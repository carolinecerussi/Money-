import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css';
import Exchange from './moneyService'

function clearFields() {
  $('#amount').val(" "); //going to be amount in usd input//
  $('#otherPlace').val(" "); //going to be conversion place code//
  $(".showError").text(" "); //if 200 !ok//
  $('.showExchange').text(" "); ////going to be show conversion
}

function getElements(result) {
  if (result) {
    $('.showExchange').text(`The conversion in  ${target_code} .`);
  } else {
    $('.showError').text(`error:${error-type}`);
  }
}


$(document).ready(function() {
  $('#getExchange').submit(function(event) {
    event.preventDefault();
    let amount = Number($(amount).val());
    let target_code = $(target_code).val();
    clearFields();
    Exchange.getExchange(amount, target_code);
      then(function(result) {
      getElements(result);
    });
  });
});