import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {

  @Output() onSubmitted: EventEmitter<any> = new EventEmitter();
  @Output() onCanceled: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(newPerson) {
    this.onSubmitted.emit(newPerson)
  }

  onCancel() {
    this.onCanceled.emit();
  }
}
