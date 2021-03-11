import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  e: number = Math.E;
  str = 'hello world';
  date: Date = new Date();
  float = 0.42;
  obj = {
    a: { name: 1 },
    b: {
      object: {
        name: 2,
      },
      g: {},
    },
  };

  search = '';

  posts: Post[] = [
    { title: 'Beer', text: 'The best drink in the world!' },
    { title: 'Bread', text: 'Tasty thing!' },
    { title: 'Cheese', text: 'Yummy!' },
    { title: 'Potato', text: 'Food for good guys!' },
  ];
}
