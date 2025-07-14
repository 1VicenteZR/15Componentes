import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@Component({
  selector: 'app-componente5',
  imports: [ MatButtonToggleModule],
  templateUrl: './componente5.html',
  styleUrl: './componente5.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Componente5 {

}
