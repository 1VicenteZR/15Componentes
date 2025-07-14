import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-componente9',
  imports: [MatChipsModule, CdkDropList, CdkDrag],
  templateUrl: './componente9.html',
  styleUrl: './componente9.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Componente9 {
readonly vegetables = signal<Vegetable[]>([
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ]);

  drop(event: CdkDragDrop<Vegetable[]>) {
    this.vegetables.update(vegetables => {
      moveItemInArray(vegetables, event.previousIndex, event.currentIndex);
      return [...vegetables];
    });
  }
}
