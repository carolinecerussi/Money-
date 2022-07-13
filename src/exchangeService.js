// <!-- baseCode = "USD"
// targetCode = 
// conversionRate = CR 
// amount = ''


// jsonExchange.target_code =
// jsonExchange.conversion_result = 
// jsonExhange.base_code = USD

// jsonExchange.conversion_result[0]
// currencyArray=["MXN","CAD"];
// console.log jsonExchange.conversion_result[1]; -->

export default class ExchangeService {
  static getExchange(targetCode, amount) {
    return new Promise (function(resolve,reject) {
      let request = new XMLHttpRequest();
      console.log(request);
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${targetCode}/${amount}`;
      request.onload = function() {
        console.log(request);
        if (this.status === 200) {
          resolve(request.response);
        }else {
        reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}









//ui//

// $('#getAmount').click(function() {
//   const targetCode = $('#targetCodes').val();
//   $('#targetCodes').val("");

//   let request = new XMLHttpRequest();
//   const url = `https://v6/exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${targetCode}/${amount}`

//   request.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElements(response);
//     }
//   };

// request.open("GET", url ,true);
// request.send();

// function getElements(response) {
//   $('.showExchangeOutput').text(`The exchange in ${targetCode} is ${response.conversion_result}`);
// }