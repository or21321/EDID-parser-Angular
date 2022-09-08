import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterBy } from 'src/app/models/filter-by';
import { EdidService } from 'src/app/services/edid.service';

@Component({
  selector: 'edid-filter',
  templateUrl: './edid-filter.component.html',
  styleUrls: ['./edid-filter.component.scss']
})
export class EdidFilterComponent implements OnInit {

  @Output() onFilter = new EventEmitter<FilterBy>()
  // *Could be better if I got it from service? as a param from parent.
  filterBy: FilterBy = { txt: '' }

  constructor(private edidService: EdidService) { }

  ngOnInit(): void {
  }

}
