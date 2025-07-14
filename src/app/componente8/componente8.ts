import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
@Component({
  selector: 'app-componente8',
  imports: [MatChipsModule],
  templateUrl: './componente8.html',
  styleUrl: './componente8.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Componente8 {

}
