import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  public optionTabName: string = 'Validation';
  constructor() { }

  ngOnInit(): void {
  }

}
