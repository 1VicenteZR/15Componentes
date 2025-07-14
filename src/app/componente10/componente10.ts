import {Component} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
@Component({
  selector: 'app-componente10',
  imports: [MatChipsModule],
  templateUrl: './componente10.html',
  styleUrl: './componente10.css'
})
export class Componente10 {
    readonly bestBoys: string[] = ['Samoyed', 'Akita Inu', 'Alaskan Malamute', 'Siberian Husky'];
}
