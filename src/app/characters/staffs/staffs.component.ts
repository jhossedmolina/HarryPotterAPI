import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from 'src/app/services/harrypotter.service';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {

  arrStaffs: any[] | undefined;

  constructor(private staffsService: HarrypotterService) { }

  ngOnInit(): void {
    this.staffsService.getAllStaffs()
    .then(staffs => this.arrStaffs = staffs)
    .catch(error => console.log(error));
  }

}
