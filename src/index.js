import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './moneyService'

function clearFields() {
  $('#amount').val(" "); //going to be amount in usd input//
  $('#otherPlace').val(" "); //going to be conversion place code//
  $(".showError").text(" "); //if 200 !ok//
  $('.showAmount').text(" "); ////going to be show conversion
}

function getElements(response) {
  if (response.main) {
    $('.showAmount').text(`The conversion is ${response.amount} ${response.target_code} .`);
  } else {
    $('.showError').text(`error:${response.error-type}`);
  }
}


$(document).ready(function() {
$('#getExchange').click(function() {
  let amount= $('#amount').val();
  clearFields();
  Exchange.getPlace(target_code)
    .then(function(response) {
      getElements(response);
    });
  });
});

