import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponents/todos/todos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, TodosComponent]
})
export class AppComponent {
  title = 'todo_list';
  constructor() {
  setTimeout(() => {
     this.title = 'changed title';
  }, 2000);
}
}
