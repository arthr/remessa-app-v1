import { Component, OnInit } from '@angular/core';

import { ITEMS } from '../sources/items';

@Component({
  selector: 'app-remessa',
  templateUrl: './remessa.component.html',
  styleUrls: ['./remessa.component.scss']
})
export class RemessaComponent implements OnInit {

  items = ITEMS;

  constructor() { }

  ngOnInit() { }

}
