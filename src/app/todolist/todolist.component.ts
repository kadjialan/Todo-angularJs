import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  trash = faTrashCan
 taskArray = [{taskName: 'pray to God', isCompleted:false}]
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }
}
