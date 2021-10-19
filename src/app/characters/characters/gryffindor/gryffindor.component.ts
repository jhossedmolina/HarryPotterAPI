import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from 'src/app/services/harrypotter.service';

@Component({
  selector: 'app-gryffindor',
  templateUrl: './gryffindor.component.html',
  styleUrls: ['./gryffindor.component.css']
})
export class GryffindorComponent implements OnInit {

  arrGryffindor: any[] | undefined;

  constructor(private gryffindorService: HarrypotterService) { }

  ngOnInit(): void {
    this.gryffindorService.getGryffindorHouse()
    .then(gryffindor => this.arrGryffindor = gryffindor)
    .catch(error => console.log(error));
  }

}
