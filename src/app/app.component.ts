import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ITodo, TodoService } from './todos.service';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive'

@Component({
  providers: [TodoService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  @ViewChild(ScrollToBottomDirective)
  scroll!: ScrollToBottomDirective;

  todos: ITodo[] = [];

  constructor(private _todoService: TodoService, private cdref: ChangeDetectorRef) { }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
    
  }

  ngOnInit() {
    this._todoService.getTodos()
      .then((tds) => this.todos = tds);
  }
  title = 'angular-scroll-bottom';
}
