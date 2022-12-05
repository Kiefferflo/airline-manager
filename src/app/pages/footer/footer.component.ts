import { Component, OnInit } from '@angular/core';
import { ProfilsService } from 'src/app/intranet/services/profils.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public profil:ProfilsService) { }

  ngOnInit(): void {
  }

}
