import { Component, Input } from '@angular/core';
import { Project } from 'src/assets/models';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!:Project;

}
