import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { SkillCategory } from 'src/assets/models';

@Component({
  selector: 'app-skill-page',
  templateUrl: './skill-page.component.html',
  styleUrls: ['./skill-page.component.scss']
})
export class SkillPageComponent implements OnInit{
  pageTitle:string="Toolbox";
  skillSet:SkillCategory[] = [];
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('../../assets/data/skills.json').subscribe((data)=>{
      this.skillSet = data as SkillCategory[];
      console.log(this.skillSet);
    });
  }

}
