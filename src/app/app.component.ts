import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CoreConstants } from 'src/assets/constants/CoreConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  readonly title = 'Portfolio app';
  readonly brightTheme:string = CoreConstants.THEME_BRIGHT;
  readonly darkTheme:string = CoreConstants.THEME_DARK;
  theme: string = this.brightTheme;
  isMenuOpen:boolean = false;
  constructor(){}
  ngOnInit(): void {
  }
  ngOnDestroy(): void {

  }
  toggleTheme()
  {
    if(this.theme === CoreConstants.THEME_BRIGHT)
    {
      this.theme = CoreConstants.THEME_DARK;
    }
    else
    {
      this.theme = CoreConstants.THEME_BRIGHT;
    }
  }
  menuToggle():void{
    if(this.isMenuOpen)
    {
      this.isMenuOpen = false;
    }
    else
    {
      this.isMenuOpen = true;
    }
  }

}
