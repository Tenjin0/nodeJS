import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class PeopleService {
  constructor(private http: Http) { }

  fetchPeople() {
    return [
      {
          id: 1,
          firstname : 'Jean',
          lastname : "Dupont",
          age: 27
    },
    {
       id: 2,
          firstname : 'Henry',
          lastname : "Dupond",
          age: 36
    }
    ]
  }
}
