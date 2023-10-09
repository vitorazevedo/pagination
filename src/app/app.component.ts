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

  ngOnInit() {
    console.log(this.pages);
    console.log(this.pages[1]);
  }

  private paginate(arr: number[], size: number): number[][] {
    return arr.reduce<number[][]>((acc, cur, i) => {
      const idx = Math.floor(i / size);
      const page = acc[idx] || (acc[idx] = []);
      page.push(cur);
      return acc;
    }, []);
  }
}
