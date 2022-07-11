export default class Exchange {
  static async getExchange(baseCode,targetCode, amount) {
    try {
      const response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${baseCode}/${targetCode}/${amount}`);
      if (!response.ok) {
        throw Error(response.statusText);
        }
        const jsonResponse = await response.json(); 
       return jsonResponse;
      } catch(error) {
       return error.message;
      }
    }

    static async getRates(baseCode) {
      try {
        const response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCode}`);
        if (!response.ok) {
          throw Error(response.status);
        }
        const jsonResponse = await response.json();
        return jsonResponse;
      } catch(error) {
        return error.message;
      }
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

// MXN = response.rates.MXN;
// CAD = response.rates.CAD;
// HKD = response.rates.HKD;




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