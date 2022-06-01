import { Component, Input, OnChanges, OnInit, SimpleChanges,
          Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  @Input() title = '';
 @Output() textSearched: EventEmitter<string> = new EventEmitter();
 //@Output() text = textEntered;
  constructor() { }

  ngOnInit(): void {
  }
  onSearch(text: string) {
    this.textSearched.emit(text);

  }
}
