import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ITimelane } from '../shared/generic-component/timeline/timeline.component';
import { timeLineParams } from './timeline.params';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public quote: string | undefined;
  public arrayTimeLine: Array<ITimelane> = [];
  public showGameList = false;
  constructor() {}

  ngOnInit() {
    this.arrayTimeLine = timeLineParams;
  }

  public toggleGameList() {
    this.showGameList = !this.showGameList;
  }
}
