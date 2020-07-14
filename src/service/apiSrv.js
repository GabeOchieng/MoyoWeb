import {handle_api_error} from './errorHandler';
import axios from "axios";
let api_url = 'https://moyo-app-api.herokuapp.com/'


function register (firstName, lastName,email,password) {
    return new Promise( async function(resolve, reject) {
        try {
          let config = {
            headers: {
             "Content-Type": "application/json",
           },
         }
         const endpoint ="register"
        
         const body = {
          
          "first_name": firstName,
          "last_name": lastName,
          "email": email,
          "password": password,
          "town": "Nairobi",
          "role": "admin"
        };
        console.log("the body sent is", body)
              let response = await call_api(endpoint,body,config)
              return resolve(response) ;
           
            }
        catch (err) {
         return reject(err)
        }
  })
  }


function login (email,password) {
    return new Promise( async function(resolve, reject) {
        try {
          let config = {
            headers: {
             "Content-Type": "application/json",
           },
         }
         const endpoint ="login"
         const body = {
            "email": email,
            "password": password
        
        };
              let response = await call_api(endpoint,body,config)
              return resolve(response) ;
           
            }
        catch (err) {
         return reject(err)
        }
  })
  }

async function call_api (endpoint,body,config) {
    return new Promise( async function(resolve, reject) {
  
      axios.post(api_url+endpoint, body, config)
      .then(function (response) {
        return resolve(response.data)
      })
      .catch(function (error) {
     
        if(error.response){
          if(error.response.status===500) {
            return reject(handle_api_error(error.response.data))
          }
        }
       else{
          return reject(error)
        }
        
      })
    })
  
  }

  export {
    call_api,
    register,
    login 
  }