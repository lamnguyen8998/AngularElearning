import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  info: string = 'CuberSoft';
  people: any = {
    username: 'Lâm',
    age: 32,
  };

  arry: any = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  number: number = 0.259;

  inputValue: string = '';

  constructor() {
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
