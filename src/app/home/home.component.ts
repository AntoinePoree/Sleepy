import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { ITimelane } from '../shared/generic-component/timeline/timeline.component';
import { timeLineParams } from './timeline.params';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public quote: string | undefined;
  public isLoading = false;
  public arrayTimeLine: Array<ITimelane> = [];
  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.arrayTimeLine = timeLineParams;
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
