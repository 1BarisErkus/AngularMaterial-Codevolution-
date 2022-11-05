 import { Component } from '@angular/core';
 import { MatDialog } from '@angular/material/dialog';
 import { MatSnackBar } from '@angular/material/snack-bar';
 import { DialogExapmleComponent } from './dialog-exapmle/dialog-exapmle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  title = 'Material-Design-Tutorial';
  notifications = 0;
  showSpinner = false;

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false
    }, 5000)
  }

  opened = false;

  log(state: any) {
    console.log(state);
  }

  logChange(index: any) {
    console.log(index);
  }

  selectedValue: string = "";

  options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vue' },
  ];

  displayFn(subject: any) {
    return subject ? subject.name : undefined
  }

  minDate = new Date();
  maxDate = new Date(2022, 9, 23);

  dateFilter = (date: any) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  openSnackBar(message: any, action: any) {
    let snackBarRef = this.snackBar.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered!')
    })
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogExapmleComponent, {data: {name: 'Vishwas'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

}
