import {Injectable} from "@angular/core";

import {createStore} from "@ngneat/elf";
import {
  getEntity,
  selectActiveEntities,
  selectActiveEntity, selectActiveId,
  selectAllEntities,
  selectEntity, setActiveId,
  setEntities,
  withActiveId,
  withEntities
} from "@ngneat/elf-entities";
import {ICake} from "./interfaces/ICake";
import {updateRequestStatus, withRequestsStatus} from "@ngneat/elf-requests";
import {map, Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class GlobalService {

  private CakeStore = createStore(
    {name: 'cake'},
    withEntities<ICake>(),
    withActiveId(),
    withRequestsStatus<'cake'>()
  );

  public SelectCakeTotal$: Observable<number | undefined> = this.CakeStore.pipe(selectActiveEntity())
    .pipe(map(res => res?.total));

  private total: number = 0;

  constructor() {
    this.CakeStore.update(setActiveId(0));
  }

  ngOnInit() {
  }

  updateCake(totalP: number) {

    this.total = (this.total + totalP < 0) ? 0 : this.total + totalP;

    this.CakeStore.update(
      setEntities([{
        id: 0,
        total: this.total
      }]),
      updateRequestStatus('cake', 'success')
    );
  }
}
