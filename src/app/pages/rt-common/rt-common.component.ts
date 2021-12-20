import { Component, OnInit } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';

@Component({
  selector: 'app-rt-common',
  templateUrl: './rt-common.component.html',
  styleUrls: ['./rt-common.component.scss'],
})
export class RtCommonComponent implements OnInit {
  rtcommon89: any[] = [];
  visitid: string = 'I48-21-000034';
  saleQuery: QueryRef<any>;

  constructor(private apollo: Apollo) {
    this.saleQuery = this.apollo.watchQuery<any>({
      variables: {
        filter: {
          orguid: '5b20f438d1202e29ce16f710',
          visitid: this.visitid,
        },
      },
      query: gql`
        query SALE($filter: ReportFilter!) {
          rtcommon89(filter: $filter) {
            visitid
            countbill
            sumbill
            bed1 {
              _id
              bed {
                code
              }
            }
            bedlast {
              _id
              bed {
                code
              }
            }
            bedoccupancy {
              _id
              beduid
              bed {
                _id
                code
                name
                description
              }
            }
          }
        }
      `,
    });
  }

  ngOnInit(): void {
    this.saleQuery.valueChanges.subscribe((resp: any) => {
      this.rtcommon89 = resp?.data?.rtcommon89;
    });
  }

  filterClick() {
    this.saleQuery.refetch({
      filter: {
        orguid: '5b20f438d1202e29ce16f710',
        visitid: this.visitid,
      },
    });
  }
}
