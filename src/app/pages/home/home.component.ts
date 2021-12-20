import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'Test';
  organisations: any[] = [];
  constructor(private router: Router, private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          query ALLORG {
            organisations {
              _id
              code
              name
              orgpatiens(limit: 3, skip: 8) {
                firstname
                lastname
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.organisations = result?.data?.organisations;
      });
  }

  openRtCom() {
    this.router.navigate(['rt-common']);
  }
}
