import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from "@angular/forms";
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private titleFilter:FormControl = new FormControl();

  keyword:any;

  @Output() 
  changeTitle: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
    this.titleFilter.valueChanges
      .pipe(debounceTime(500))
      .subscribe(
        value => this.changeTitle.emit(value)
      );
  }

  goAddProject() {
    this.router.navigateByUrl('/addProject')
  }

}
