import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserSignupComponent } from '../user-signup/user-signup.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {

  }

  openCreateUser(): void {
    const dialogRef = this.dialog.open(UserSignupComponent, {
      width: '30%',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openLogin(): void {
    this.router.navigateByUrl('/login');
  }

  logout() {
  }

}
