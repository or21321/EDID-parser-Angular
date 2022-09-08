import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Edid, Edids } from 'src/app/models/edid';

@Component({
  selector: 'edid-list',
  templateUrl: './edid-list.component.html',
  styleUrls: ['./edid-list.component.scss']
})
export class EdidListComponent implements OnInit {

  @Input() edids !: Edids | null
  @Input() selectedEdidId: string | undefined

  @Output() onEdidSelect = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

}
