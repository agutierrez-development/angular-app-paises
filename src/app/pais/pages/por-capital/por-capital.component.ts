import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = 'Hola Mundo';
  isError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) {};

  ngOnInit(): void {
  }

  buscar(termino: string) {

    this.isError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe({
        next: (paises) => {
          this.paises = paises;
        },
        error: (err) => {
          this.isError = true;
          this.paises = [];
        }
      });
  }

}
