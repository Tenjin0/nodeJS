import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() person;
  @Output() onDeleted: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.onDeleted.emit(this.person)
  }

  onEdit() {
    console.log(this);
  }
}
