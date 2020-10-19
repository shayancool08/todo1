import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todoDetails = [
    { id : 1, date : '19/10/2020', title : 'Playing', description : 'To play favourite games' },
    { id : 2, date : '19/10/2020', title : 'Walk', description : 'To take a walk in the park'},
    { id : 3, date : '19/10/2020', title : 'Studying', description : 'To study for upcoming exams'},
    { id : 4, date : '19/10/2020', title : 'Watching', description : 'To watch favourite movies/series'}
  ]

  createComponent(id, date,title, description) {
    this.todoDetails.push({id, date,title, description})
  }

}