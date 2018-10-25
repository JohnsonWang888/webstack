import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menus: any;

  constructor() { }

  ngOnInit() {
    this.menus = [
      {name:"公司网址", href:"#公司网址"},
      {name:"研发部网址", href:"#研发部网址"},
      {name:"金湖", href:"#金湖"},
      {name:"江宁", href:"#江宁"},
      {name:"同里", href:"#同里"},
      {name:"沙家浜", href:"#沙家浜"},
      {name:"大白鲸", href:"#大白鲸"},
      {name:"茅山", href:"#茅山"},
      {name:"陌上花渡", href:"#陌上花渡"}
    ];
  }

}
