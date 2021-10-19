import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from 'src/app/services/harrypotter.service';

@Component({
  selector: 'app-hufflepuff',
  templateUrl: './hufflepuff.component.html',
  styleUrls: ['./hufflepuff.component.css']
})
export class HufflepuffComponent implements OnInit {

  arrHufflepuff: any[] | undefined;

  constructor(private hufflepuffService: HarrypotterService) { }

  ngOnInit(): void {
    this.hufflepuffService.getHufflepuffHouse()
    .then(hufflepuff => this.arrHufflepuff = hufflepuff)
    .catch(error => console.log(error));
  }

}
