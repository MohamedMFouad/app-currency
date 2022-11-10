import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly FAVORITE_IDS_ITEM_NAME = 'favorite-ids'

  // TODO: implement

  getFavoriteIds(): Observable<string[]> {
    // const listJSON: string = localStorage.getItem(this.FAVORITE_IDS_ITEM_NAME)
    // const list: string[] = (listJSON && JSON.parse(listJSON)) || []
    // console.log('getFavoriteIds', listJSON, list)
    return of([])
  }

  saveFavoriteIds(list: string[]): Observable<boolean> {
    const listJSON: string = JSON.stringify(list)
    localStorage.setItem(this.FAVORITE_IDS_ITEM_NAME, listJSON)
    // console.log('getFavoriteIds', list, listJSON)
    return of(true)
  }
}
