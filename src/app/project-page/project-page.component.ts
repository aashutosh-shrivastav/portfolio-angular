import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/assets/models';
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit{

  itemList:Project[] = [];

  constructor(public http: HttpClient) {}


  ngOnInit(): void {

    this.http.get('../../assets/data/projects.json').subscribe((data:any)=>{
      this.itemList = data;
    })
  }
}
