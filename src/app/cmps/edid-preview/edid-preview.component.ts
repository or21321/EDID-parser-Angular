import { Component, OnInit, Input } from '@angular/core';
import { Edid } from 'src/app/models/edid';

@Component({
  selector: 'edid-preview',
  templateUrl: './edid-preview.component.html',
  styleUrls: ['./edid-preview.component.scss']
})
export class EdidPreviewComponent implements OnInit {

  @Input() edid !: Edid

  constructor() { }

  ngOnInit(): void {
  }

}
