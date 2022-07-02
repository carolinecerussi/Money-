export default class Exchange { 
  static getExchange(exchangeTo, currencyAmount) {
    return new Promise(function(resolve,reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${exchangeTo}/${currencyAmount}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } if  (this.status === 404) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
    request.open("GET",url, true);
    request.send();
    });
  }
}

//money code USA 

// CAD CANADIAN DOLLAR CANADA
//EUR EURO EUROPEAN UNION
//HKD HONK KONG DOLLAR HONG KONG
//JPY JAPANESE YEN  JAPAN
//MXN MEXICAN PESO MEXICO
// import { resolvePlugin } from "@babel/core";

// export default class Exchange {
//   static  getTargetCode(exchangeTo {
//     return fetch `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${exchangeTo}/${currencyAmount}`
//       .then (function (response) {
//         if (! response.ok) {
//           throw Error(response.statusText);
//         } else  {
//            return response.json()
//            .catch (Error) {
//        error.message;
//       }
//   }
// }




//  inputted codes that are paired in url and entered amount will return conversion//
//if error- entered an amount less than or equal to zero- alert please enter valid amount//