import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { Edids, Edid, EdidFromJson } from '../models/edid';
import { UtilService } from './util.service';
import { FilterBy } from '../models/filter-by';

interface Name {
  common: string
  official: string
  nativeName: object
}

@Injectable({
  providedIn: 'root'
})
export class EdidService {
  //mock the server
  private _edidsDb: Edids = []

  private _edids$ = new BehaviorSubject<Edids>([])
  public edids$ = this._edids$.asObservable()
  //filter
  private _filterBy$ = new BehaviorSubject<FilterBy>({ txt: '' })
  public filterBy$ = this._filterBy$.asObservable()

  constructor(private http: HttpClient, private utilService: UtilService) {
  }


  private _formatEdid(edid: EdidFromJson): Edid {

    // const { Name: name, NativeResolution: nativeResolution, Size: size, status
    // }: {
    //   name: string, nativeResolution: string, size: number, status: number
    // } = edid
    const { Name, NativeResolution, Size, status
    }: {
      Name: string, NativeResolution: string, Size: number, status: number
    } = edid

    return {
      _id: this.utilService.makeId(),
      name: Name,
      nativeResolution: NativeResolution,
      size: Size,
      status
    }
  }

  public loadEdids(): void {
    const edidsFromStorage = this.utilService.loadFromStorage('edidsDb')

    if (edidsFromStorage) {
      this._edidsDb = edidsFromStorage
      this._sendEdids(this._edidsDb)
    } else {
      this._getEdidsFromJson()
    }

    // .pipe(map(res =>  res))   
    // if (filterBy && filterBy.term) {
    //   edids = this._filter(edids, filterBy.term)
    // }
    // this._edids$.next(this._sort(edids))
  }

  private _getEdidsFromJson() {
    this.http.get<EdidFromJson>(`assets/JSONmonitors/BenQ SC3211`).pipe(
      map((edid: EdidFromJson) => {
        return [this._formatEdid(edid)]
      })
    ).subscribe({
      next: (edids: Edids) => {
        this._edidsDb = edids
        this._sendEdids(edids)
        this._saveEdidsToStorage()
      },
      error: err => console.log(err),
    })
  }


  // public getEdidById(id: string): Observable<Edid> {
  //   //mock the server work
  //   const edid = this._edidsDb.find(edid => edid._id === id)

  //   //return an observable
  //   if (!edid) return throwError(`Edid not found with id ${id}`)
  //   return of(edid) //: Promise.resolve(null)//Observable.throw(`Edid id ${id} not found!`)
  // }

  // public removeEdid(id: string) {
  //   //mock the server work
  //   this._edidsDb = this._edidsDb.filter(edid => edid._id !== id)

  //   this._sendEdids(this._edidsDb)
  //   this._saveEdidsToStorage()
  // }

  // public saveEdid(edid: Edid) {
  //   console.log('save edid', edid);

  //   return edid._id ? this._updateEdid(edid) : this._addEdid(edid)
  // }

  // private _updateEdid(edid: Edid) {
  //   this._edidsDb = this._edidsDb.map(c => edid._id === c._id ? edid : c)

  //   this._sendEdids(this._edidsDb)
  //   this._saveEdidsToStorage()
  //   return of(edid)

  // }

  // private _addEdid(edid: Edid) {
  //   //mock the server work

  //   // const newEdid = new Edid(edid.name, edid.email, edid.phone);
  //   // newEdid.setId();

  //   // this._edidsDb.push({ ...newEdid })

  //   // this._edids$.next(this._sort(this._edidsDb))
  //   this._sendEdids(this._edidsDb)
  //   this._saveEdidsToStorage()
  //   return of(edid)
  // }


  // private _sort(edids: Edid[]): Edid[] {
  //   return edids.sort((a, b) => {
  //     if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
  //       return -1;
  //     }
  //     if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
  //       return 1;
  //     }

  //     return 0;
  //   })
  // }

  setFilter(filterBy: FilterBy) {
    this._filterBy$.next(filterBy)
    this._filter()
  }

  private _filter(): void {
    const edids = this.utilService.loadFromStorage('edidsDb')
    const filterBy = this._filterBy$.getValue()

    const { txt } = filterBy
    // *Can use structuredClone (more efficient to deep copy)
    let edidsToShow = JSON.parse(JSON.stringify(edids))

    if (txt) {
      const nameRegex = new RegExp(txt, 'i')
      edidsToShow = edidsToShow.filter((edid: any) => nameRegex.test(edid.name))
    }

    this._sendEdids(edidsToShow)
  }

  private _saveEdidsToStorage() {
    this.utilService.saveToStorage('edidsDb', this._edids$.getValue())
  }

  private _sendEdids(edids: Edids) {
    this._edids$.next(edids)
  }
}
