import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss']
})
export class AProposComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
    this._document.body.style.background="#f5f5f5";
  }

}
