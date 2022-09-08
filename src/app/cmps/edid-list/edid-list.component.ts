import { Component, Input, OnInit } from '@angular/core';
import { Edid, Edids } from 'src/app/models/edid';

@Component({
  selector: 'edid-list',
  templateUrl: './edid-list.component.html',
  styleUrls: ['./edid-list.component.scss']
})
export class EdidListComponent implements OnInit {

  @Input() edids !: Edids | null

  constructor() { }

  ngOnInit(): void {
  }

}
