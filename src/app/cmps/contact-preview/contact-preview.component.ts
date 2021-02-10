import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  constructor() { }
  @Input() contact

  ngOnInit(): void {
  }

}
