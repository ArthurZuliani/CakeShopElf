import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../global-service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public CakeTotal$: Observable<number | undefined> = this.globalService.SelectCakeTotal$;

  constructor(private globalService: GlobalService) {
  }

  ngOnInit(): void {
  }

  addCake() {
    this.globalService.updateCake(1);
  }

  removeCake() {
    this.globalService.updateCake(-1);
  }

}
