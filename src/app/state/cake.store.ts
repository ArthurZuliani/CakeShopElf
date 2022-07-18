import {Cake} from "../interfaces/ICake";
import {Injectable} from "@angular/core";
import {EntityState, EntityStore, StoreConfig} from "@datorama/akita";

export interface CakeState extends EntityState<Cake> {
  total: number;
}

const initialState = {
  total: 5
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'cake'})
export class CakeStore extends EntityStore<CakeState, Cake> {

  constructor() {
    super(initialState);
  }
}
