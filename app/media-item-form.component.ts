//Validation Built in chapter 04-04 is added
// Chapter 05 building a year Validators 
// using FormBuilder private keyword and no longer need ControlGroup

import {Component} from 'angular2/core';
import {Control,Validators,FormBuilder} from 'angular2/common';


@Component({
    selector: 'media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
   form;

   constructor(private formBuilder:FormBuilder){

   }

   ngOnInit(){
       this.form = this.formBuilder.group({
           'medium' : new Control('Movies'),
           'name' : new Control('', Validators.compose([
               Validators.required,
               Validators.pattern('[\\w\\-\\s\\/]+')
           ])),
           'category' : new Control(''),
           'year' : new Control('', this.yearValidator)
       });
   }

   yearValidator(control) {
       if(control.value.trim().length === 0) return null;
       var year = parseInt(control.value);
       var minYear = 1800;
       var maxYear = 2500;
       if (year >= minYear && year <= maxYear ) return null;
       return { 'year' : {
           'min':minYear,'max':maxYear 
        }};
   }


    onSubmit(mediaItem){
        console.log(mediaItem);
    }
}