import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  pdfSrc: string = '/pdf-test.pdf';
  constructor() { }

  ngOnInit() {
  }

}
