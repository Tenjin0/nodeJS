import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people = []
  id = 3;
  isAddingNewPerson = false;
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this.peopleService.fetchPeople();
  }

  onSubmit(newPerson) {
    if (newPerson.firstname.trim().length !== 0 && newPerson.lastname.trim().length !== 0)  {
      newPerson.id = this.id++;
      this.people.push(newPerson);
    }
    this.isAddingNewPerson = false;
  }
  onCancel() {
    this.isAddingNewPerson =false;
  }
  onDelete(person) {
    this.people.forEach((p, index)=>{
      if(person.id === p.id) {
        this.people.splice(index, 1);
      }
    })
  }
}
