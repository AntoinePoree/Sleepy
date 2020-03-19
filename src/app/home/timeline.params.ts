import { ITimelane } from '../shared/generic-component/timeline/timeline.component';

// year: number;
// month?: string;
// duration?: number;
// durationFormat?: string;
// event1: IEvent;

export const timeLineParams: Array<ITimelane> = [
  {
    year: 2020,
    month: '3',
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
      message: 'intégraton',
      link: 'http://www.web-atrio.com/'
    }
  },
  {
    year: 2018,
    month: '8',
    event1: {
      title: 'stage',
      message: 'flutilliant'
    }
  },
  {
    year: 2018,
    month: '2',
    duration: 6,
    durationFormat: 'month',
    event1: {
      title: 'Wild Code School',
      message: 'WCS',
      link: 'https://www.wildcodeschool.com/fr-FR/formations/developpeur-web?campus=la-loupe'
    }
  },
  {
    year: 2016,
    event1: {
      title: 'laveur',
      message: 'lavdes'
    },
    event2: {
      title: 'interim',
      message: 'intérimdes'
    }
  },
  {
    year: 2015,
    event1: {
      title: 'bac',
      message: 'bacdes'
    }
  }
];
