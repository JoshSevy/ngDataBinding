import { 
  Component, 
  Input, 
  OnChanges, 
  OnInit, 
  SimpleChanges, 
  ViewEncapsulation,
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
  {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
  }

  ngAfterContentInit() {
  }

  ngAfterContentChecked() {}

  ngAfterViewChecked() {}

  ngAfterViewInit() {}

  ngOnDestroy() {}



}
