import { Component, OnInit } from '@angular/core';
import { ProfilsService } from 'src/app/intranet/services/profils.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public profil:ProfilsService) { }

  ngOnInit(): void {
  }

}
