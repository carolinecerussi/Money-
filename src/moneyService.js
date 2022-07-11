export default class Exchange {
  static  getExchange(baseCode, target1, amount) {
  let url = `https://v6.exchangerate-api.com/v6/${process.env.YOUR_API_KEY}/pair/USD/${baseCode}/${target1}/${amount}`;
    return fetch(url)
    .then (function (response) {
        if (! response.ok) {
          throw Error(response.statusText);
        } 
       return response.json();
      })
       .catch (function (error) {
       return error;
      });
  }
}



// export default class Exchange { 
//   static getExchange() {
//     return new Promise(function(resolve,reject) {
//       let request = new XMLHttpRequest(url)
//             request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } if  (this.status === 404) {
//           resolve(request.response);
//         } else {
//           reject(request.response);
//           }
//         }
//         request.open("GET",url, true);
//         request.send();
//       })
//   }
// };

// The Mexican peso (symbol: $; code: MXN) is 


// static exchangeRate (baseCode,target1,amount) {
//   const apiKey = localStorage.getItem('apiKey');

// return fetch ('https://')
// }

MXN = response.rates.MXN;
CAD = response.rates.CAD;
HKD = response.rates.HKD;




// export default class Exchange {
//   static getExchange(baseCode,target1, amount) {
//   let amount = ("#inputAmount");
//   const apiKey = process.env.YOUR_API_KEY;
//   let baseCode= USD;
//   if (target1 = MXN) {
//   }
//   if (target1 = CAD) {

//   }

//   }
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCode}/${target1}/${amount}`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(request.response);
//         }
//       };
//       request.open('GET', url, true);
//       request.send();
//     });
//   }
// }


// CAD CANADIAN DOLLAR CANADA
// EUR EURO EUROPEAN UNION
// HKD HONK KONG DOLLAR HONG KONG
// JPY JAPANESE YEN  JAPAN
// MXN MEXICAN PESO MEXICO




//  inputted codes that are paired in url and entered amount will return conversion//
//if error- entered an amount less than or equal to zero- alert please enter valid amount//