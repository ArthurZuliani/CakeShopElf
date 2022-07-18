import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../global-service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  public CakeTotal$: Observable<number | undefined> = this.globalService.SelectCakeTotal$;

  constructor(private globalService: GlobalService) {
  }

  ngOnInit(): void {
  }
}
