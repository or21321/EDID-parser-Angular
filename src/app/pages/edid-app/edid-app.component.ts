import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Edids } from 'src/app/models/edid';
import { Router } from '@angular/router';
import { EdidService } from 'src/app/services/edid.service';
import { FilterBy } from 'src/app/models/filter-by';

@Component({
  selector: 'edid-app',
  templateUrl: './edid-app.component.html',
  styleUrls: ['./edid-app.component.scss']
})
export class EdidAppComponent implements OnInit {

  filterBy !: FilterBy
  subscription !: Subscription

  edids$ !: Observable<Edids>
  selectedEdidId: string | undefined

  constructor(private edidService: EdidService, private router: Router) {
    this.subscription = this.edidService.filterBy$.subscribe((filterBy: FilterBy) => {
      this.filterBy = filterBy
    })
  }

  ngOnInit(): void {
    this.edidService.loadEdids()
    this.edids$ = this.edidService.edids$
  }

  filter(filterBy: FilterBy) {
    console.log('filter', filterBy);
    this.edidService.setFilter({...filterBy})
  }

}
