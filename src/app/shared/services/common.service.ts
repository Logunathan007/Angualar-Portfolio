import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
 public handleScroll: boolean = true;
  constructor() {}


  $updateCursor: Subject<boolean> = new Subject();
  $updateSelectedSection: Subject<number> = new Subject();
}
