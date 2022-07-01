export default class Exchange {
  static async getTargetCode() {
    try {
    const response =await fetch(`https://v6.exchangerate-api.com/v6/YOUR-API-KEYpair/EUR/GBP/AMOUNT}`)
      if (! response.ok) {
        throw Error (response.statusText); 
      }
       return response.json();
    } catch (error) {
      return error.message;
    }
  }
}

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