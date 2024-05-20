import { Injectable } from '@angular/core';
import { awards, cocktails, galleryImages, wines } from './static';
import { Observable, of } from 'rxjs';


export type CName = 'wines' | 'cocktails' | 'awards' | 'galleryImages'
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  getAll(collection: CName): Observable<any[]> {
    switch (collection) {
      case 'wines':
        return of(wines);
      case 'cocktails':
        return of(cocktails);
      case 'awards':
        return of(awards);
      case 'galleryImages':
        return of(galleryImages)
      default:
        return of([]);
    }
  }
}
