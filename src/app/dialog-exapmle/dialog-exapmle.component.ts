import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-exapmle',
  templateUrl: './dialog-exapmle.component.html',
  styleUrls: ['./dialog-exapmle.component.css']
})
export class DialogExapmleComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
