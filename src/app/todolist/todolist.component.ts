import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  trash = faTrashCan
 taskArray = [{taskName: 'pray to God', isCompleted:false}]

  onSubmit(form: NgForm) {
    console.log(form)
    this.taskArray.push({taskName: form.controls['task'].value, isCompleted:false})
    form.reset()
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1)
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted
  }
}
