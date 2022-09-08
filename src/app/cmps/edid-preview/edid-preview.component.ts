import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Edid } from 'src/app/models/edid';

@Component({
  selector: 'edid-preview',
  templateUrl: './edid-preview.component.html',
  styleUrls: ['./edid-preview.component.scss']
})
export class EdidPreviewComponent implements OnInit {

  @Input() edid !: Edid
  @Input() selectedEdidId: string | undefined

  @Output() onSelect = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  selectEdid() {
    console.log('selectEdid', this.edid._id);
    this.onSelect.emit(this.edid._id)
  }

  get isSelectedEdid() {
    console.log(this.selectedEdidId === this.edid._id);
    return this.selectedEdidId === this.edid._id
  }

  get isDisconnected() {
    return !this.edid.status
  }

}
