import { Component, OnInit, Input } from '@angular/core';
import {childRoutes} from "../../child-routes";

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() bgClass: string;
  @Input() icon: string;
  @Input() count: number;
  @Input() label: string;
  @Input() route:string;

  constructor() {
  }

  ngOnInit() {

  }
}
