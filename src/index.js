import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './moneyService.js';


const YOUR-API-KEY = process.env.YOUR_API_KEY;
const redirect_uri = `https://localhost:8080/`;
function clearFields() {
  $('#amount').text('');  //going to be amount in usd input//
  $('#otherPlace').val(" "); //going to be conversion place code//
}

function getElements(response) {
  const exchange = JSON.parse(response);
    console.log(exchange);
    $('.showExchange').text(`The conversion in: ${exchange.target_code} is: ${exchange.conversion_result} .`);
    $('.showError').text(`error: please enter valid USD amount`);
  }

async function makeAPICall (targets, amount) {
  const response = await Exchange.getExchange(targets,amount);
  getElements(response);
}

$(document).ready(function() {
  $('#getExchange').click(function(event) {
    let targets = $('#targetInput').val();
    let amount = $('#amountToExchange').val();
    // clearFields();
    let promise = moneyService.getText(targets,amount);
    promise.then(function(response) {
      const output = JSON.parse(response);
      clearFields();
      output.forEach(function(targets) {
        const newT = document.createElement('MXN');
        let amount = "";
        targets.forEach(function(amount) {
          amount += amount;
        })
      newT.innerText = amount;
      $('#exchangeText').append(newT);
    })
  })
})
});