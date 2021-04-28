import { Component, OnInit } from '@angular/core';
import {Usuario,ListaUsuarios} from "../../interfaces/usuario"
@Component({
  selector: 'app-vistacard',
  templateUrl: './vistacard.component.html',
  styleUrls: ['./vistacard.component.scss']
})
export class VistacardComponent implements OnInit {
  Lista:Array<Usuario>=ListaUsuarios;
  constructor() { }

  ngOnInit(): void {
  }

}
