import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hufflepuff',
  templateUrl: './hufflepuff.component.html',
  styleUrls: ['./hufflepuff.component.css']
})
export class HufflepuffComponent implements OnInit {

  arrHufflepuff: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
