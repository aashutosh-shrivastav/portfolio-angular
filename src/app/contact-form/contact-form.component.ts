import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit{

  contactForm:FormGroup = new FormGroup({
    name:new FormControl("",Validators.required),
    emailId:new FormControl("",[Validators.required,Validators.email]),
    subject:new FormControl(""),
    message:new FormControl("",Validators.required)
  });
  constructor(){}
  ngOnInit(): void {  }
  onSubmit()
  {
    console.log(this.contactForm.value);
  }
  getErrorMessage(formFieldName:string) {
    if (this.contactForm.controls[formFieldName].hasError('required')) {
      return 'You must enter a value';
    }

    return this.contactForm.controls[formFieldName].hasError('email') ? 'Not a valid email' : '';
  }

  getValidHref():string
  {
    let sub:string = "Hi saw you portfolio.";
    let msg:string = "Lets connect to talk some business";
    if(this.contactForm.controls['subject'].value)
    {
      sub = this.contactForm.controls['subject'].value;
    }
    if(this.contactForm.controls['message'].value)
    {
      msg = this.contactForm.controls['message'].value;
    }
    if(this.contactForm.controls['name'].value)
    {
      msg = "Hi this is "+this.contactForm.controls['name'].value+". " +msg;
    }
    var mailHref:string = "mailto:ashuism7@gmail.com?subject="+sub+"&body="+msg;

    return mailHref;
  }

}
