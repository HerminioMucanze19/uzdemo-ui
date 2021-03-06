import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/seguranca/auth.service';
import { ErrorHandlerService } from './../error-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu = false;

  constructor(
    public authService: AuthService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
    .then(() => {
      this.router.navigate(['/login']);
    })
    .catch(erro => {
      this.errorHandlerService.handle(erro);
    });
  }

}
