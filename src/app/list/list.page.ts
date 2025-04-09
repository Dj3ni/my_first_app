import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false,
})
export class ListPage implements OnInit {
  public studentList : string[]
  public countries : any[]

  constructor() {
    this.studentList=["Mélusine", "Kaoula","Charifa" ]
    this.countries=[
      {
        initial:"A",
        countries : [
          "Albania", "Austria","America"
        ]
      },
      {
        initial:"B",
        countries : [
          "Belgium", "Bolivia","Belarus"
        ]
      },
      {
        initial:"C",
        countries : [
          "Canada", "China","Congo"
        ]
      },
  ]
  }

  ngOnInit() {
  }

}
