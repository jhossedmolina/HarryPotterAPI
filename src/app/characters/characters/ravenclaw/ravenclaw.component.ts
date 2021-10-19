import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from 'src/app/services/harrypotter.service';

@Component({
  selector: 'app-ravenclaw',
  templateUrl: './ravenclaw.component.html',
  styleUrls: ['./ravenclaw.component.css']
})
export class RavenclawComponent implements OnInit {

  arrRavenclaw: any[] | undefined;

  constructor(private ravenclaseService: HarrypotterService) { }

  ngOnInit(): void {
    this.ravenclaseService.getRavenclawHouse()
    .then(ravenclaw => this.arrRavenclaw = ravenclaw)
    .catch(error => console.log(error));
  }

}
