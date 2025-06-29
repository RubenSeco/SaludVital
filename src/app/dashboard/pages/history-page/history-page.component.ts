import { Location } from '@angular/common';
import { Component } from '@angular/core';
Location;
@Component({
  selector: 'app-history-page',
  imports: [],
  templateUrl: './history-page.component.html',
})
export class HistoryPageComponent {

  constructor(
    private location: Location
  ) {
  }
  goBack(): void {
    this.location.back();
  }
}
