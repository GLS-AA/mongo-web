import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'Test';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openRtCom() {
    this.router.navigate(['rt-common']);
  }
}
