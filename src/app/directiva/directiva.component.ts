import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {
  listaCurso: string[] = ['Typescript', 'JavaScript', 'Java SE', 'C#', 'PHP'];
  constructor() {}
}
