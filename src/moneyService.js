export default class Exchange {
  static  getTargetCode(target_code) {
    return fetch(`https://v6.exchangerate-api.com/v6/99600fd1313a0cd0dad2cd3bpair/USD/?target_code=${target_code}&amount=AMOUNT`)
      .then (function (response) {
        if (! response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch (function(error) {
        return Error(error);
      });
    }
  }

//         throw Error (response.statusText); 
//       }
//        return response.json();
//     } catch (error) {
//       return error.message;
//     }
//   }
// }

// export default class Exchange { 
//   static getExchange(target_code, conversion_result) {
//     return new Promise(function(resolve,reject) {
//     let request = new XMLHttpRequest();
//     const url = `https://v6.exchangerate-api.com/v6/99600fd1313a0cd0dad2cd3bpair/USD/?target_code=${target_code}/?conversion_result=${conversion_result}`
//     request.onload = function() {
//       if (this.status === 200) {
//         resolve(request.response);
//       } else {
//         reject(request.response);
//       }
//     }
//     request.open("GET",url, true);
//     request.send();
//     });
//   }
// }

// let response = fetch(url);
// fetch(url)
// .then(response => {
//   //response handle//
//   })
//   .catch(error => {
//     //handle the error..
//   });

//   fetch('readme.txt')
//   .then(response => response.json())



//money code USA 

// CAD CANADIAN DOLLAR CANADA
//EUR EURO EUROPEAN UNION
//HKD HONK KONG DOLLAR HONG KONG
//JPY JAPANESE YEN  JAPAN
//MXN MEXICAN PESO MEXICO

//  inputted codes that are paired in url and entered amount will return conversion//
//if error- entered an amount less than or equal to zero- alert please enter valid amount//