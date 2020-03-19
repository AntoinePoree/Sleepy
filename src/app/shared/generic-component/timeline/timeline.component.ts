import { Component, OnInit, Input } from '@angular/core';

interface IEvent {
  title: string;
  message: string;
  link?: string;
}

export interface ITimelane {
  year: number;
  month?: string;
  duration?: number;
  durationFormat?: string;
  event1: IEvent;
  event2?: IEvent;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() data: Array<ITimelane> = [];

  constructor() {}

  ngOnInit() {}
}
