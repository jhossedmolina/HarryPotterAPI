import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newstudents',
  templateUrl: './newstudents.component.html',
  styleUrls: ['./newstudents.component.css']
})
export class NewstudentsComponent implements OnInit {


  hola: string | undefined;

  formStudent = new FormGroup({
    nameStudent: new FormControl('', Validators.required),
    lastNameStudent: new FormControl('', Validators.required),
    ageStudent: new FormControl('', Validators.required)
  })

  constructor() {
   }

  ngOnInit(): void {
  }

  onSubmit(){
      localStorage.setItem('newStudents',JSON.stringify(this.formStudent.value))
  }

  

  
  
  


}
