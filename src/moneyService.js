export default class Exchange {
  static getPlace(target_code) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}pair/USD/${target_code}/${amount}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error (response.showError); //possibly different location to throw?//
      }
      console.log("ready!");
       return response.json();
    })
    .catch(function(error) {
      return error;
    })
   }
  }


//money code USA 

// CAD CANADIAN DOLLAR CANADA
//EUR EURO EUROPEAN UNION
//HKD HONK KONG DOLLAR HONG KONG
//JPY JAPANESE YEN  JAPAN
//MXN MEXICAN PESO MEXICO

//  inputted codes that are paired in url and entered amount will return conversion//
//if error- entered an amount less than or equal to zero- alert please enter valid amount//