import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginFrom: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
}
