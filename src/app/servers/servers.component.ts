import { Component, OnInit } from '@angular/core';

@Component({
//  selector: '[app-servers]',    // select the attribute like a string
//  selector: '.app-servers ',    // select by class
  selector: 'app-servers',      // like an element, normally used this


//  template: `<app-server></app-server>                    // in-line template
//              <app-server></app-server>`,




  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
