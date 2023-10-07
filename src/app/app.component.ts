import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  size = 3;
  pages = this.paginate(this.arr, this.size);

  private paginate(arr: number[], size: number) {
    return arr.reduce((acc: any, cur: number, i: number) => {
      let idx = Math.floor(i / size);
      let page = acc[idx] || (acc[idx] = []);
      page.push(cur);
      return acc;
    }, []);
  }

  ngOnInit() {
    console.log('Hello');

    console.log(this.pages);
    console.log(this.pages[1]);
  }
}
