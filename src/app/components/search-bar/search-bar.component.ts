import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() textEntered: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onKeyup(event: KeyboardEvent) {
    this.textEntered.emit((event.target as HTMLInputElement).value);

  }
}
