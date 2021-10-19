import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from 'src/app/services/harrypotter.service';

@Component({
  selector: 'app-slytherin',
  templateUrl: './slytherin.component.html',
  styleUrls: ['./slytherin.component.css']
})
export class SlytherinComponent implements OnInit {

  arrSlytherin: any[] | undefined;

  constructor(private slytherinService: HarrypotterService) { }

  ngOnInit(): void {
    this.slytherinService.getSlytherinHouse()
    .then(slytherin => this.arrSlytherin = slytherin)
    .catch(error => console.log(error));
  }

}
