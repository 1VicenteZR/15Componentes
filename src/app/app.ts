import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatAutocomplete } from './mat-autocomplete/mat-autocomplete';
import {Componente2} from './componente2/componente2';
import { Componente3 } from './componente3/componente3';
import { Componente4 } from './componente4/componente4';
import {Componente5} from './componente5/componente5';
import { Componente6 } from './componente6/componente6';
import { Componente7 } from './componente7/componente7';
import { Componente8 } from './componente8/componente8';
import { Componente9 } from './componente9/componente9';   
import { Componente10 } from './componente10/componente10';
import { Componente11 } from './componente11/componente11'; 
import { Componente12 } from './componente12/componente12';
import { Componente13 } from './componente13/componente13';
import { Componente14 } from './componente14/componente14';
import { Componente15 } from './componente15/componente15';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatAutocomplete, Componente2, Componente3, Componente4, Componente5, Componente6, Componente7,
     Componente8,Componente9, Componente10, Componente11, Componente12, Componente13, Componente14, Componente15  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'projectmaterial';
}
