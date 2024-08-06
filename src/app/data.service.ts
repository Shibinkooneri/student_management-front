import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
    stulist(){
      return fetch('http://127.0.0.1:8000/', {
               method: 'GET',
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
             },
       })
    }
  
    addstu(data:any){
      return fetch('http://127.0.0.1:8000/', {
               method: 'POST',
               body:data,
            headers: {
               'Accept':'*/*'
             },
       })
    }
  
}
