import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {

  public token = localStorage.getItem('admin');
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public logout(): void {
    localStorage.removeItem('admin');
    this.router.navigateByUrl('admin/login');
  }

}
