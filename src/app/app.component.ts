import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-angular';
  name = 'Angular 5'; 
  sidebarFlag=true;
  text = "Loratadine is an antihistamine medicine that helps  with the symptoms of allergies. It's used to treat:  hay fever. conjunctivitis (red, itchy eyes) eczema."
  headline = "Payment-rtgs v-no989889"
  hideshow() {
    this.sidebarFlag=!this.sidebarFlag
    
  }
  showDiv = {
    next: false,
  };

}
 

