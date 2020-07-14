import {Component, OnInit} from '@angular/core';
import {StatsHelperService} from '../stats-helper.service';
import {UserResult} from '../user-result';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.css']
})
export class AllResultsComponent implements OnInit {
  dataSource: UserResult [];
  columnsToDisplay: any = ['userName', 'result'];

  constructor(private statsHelperService: StatsHelperService) {
    this.dataSource = this.getResults();
  }

  ngOnInit(): void {
  }

  private getResults(): UserResult[] {
    return this.statsHelperService.getResults();
  }

}
