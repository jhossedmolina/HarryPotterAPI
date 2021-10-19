import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from 'src/app/services/harrypotter.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  arrStudents: any[] | undefined;

  constructor(private studentsService: HarrypotterService) { }

  ngOnInit(): void {
    this.studentsService.getAllStudents()
    .then(students => this.arrStudents = students)
    .catch(error => console.log(error))
  }

}
