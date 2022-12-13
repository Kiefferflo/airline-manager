import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ProfilsService } from 'src/app/intranet/services/profils.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public profil:ProfilsService, public auth:Auth) { }

  ngOnInit(): void {
  }

}
