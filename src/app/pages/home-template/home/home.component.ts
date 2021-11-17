import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courseCard: any = {};
  subListCourseCard = new Subscription();

  constructor(private data: DataService) {
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getListCourseCard();
  }

  getListCourseCard() {
    this.data.getListCourseCard().subscribe((result: any) => {
      this.courseCard = { ...result };
      console.log(this.courseCard);
    });
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.subListCourseCard.unsubscribe();
  }
}
