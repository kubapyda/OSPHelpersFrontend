import { Component, OnInit } from '@angular/core';

import { LoaderComponent } from '@app/components/loader';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  loaderComponent = LoaderComponent;

  constructor() {}

  ngOnInit() {}
}
