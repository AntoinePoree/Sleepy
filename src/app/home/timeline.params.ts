import { ITimelane } from '../shared/generic-component/timeline/timeline.component';

// year: number;
// month?: string;
// duration?: number;
// durationFormat?: string;
// event1: IEvent;

export const timeLineParams: Array<ITimelane> = [
  {
    year: 2020,
    event1: {
      title: 'webTitle',
      message: 'webMessage'
    }
  },
  {
    year: 2019,
    month: '4',
    event1: {
      title: 'Web-Atrio',
      message: 'intégraton'
    }
  },
  {
    year: 2019,
    month: '4',
    event1: {
      title: 'Web-Atrio',
      message: 'intégraton'
    }
  }
];
