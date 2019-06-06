import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
}

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 
  public multi = [
    {
      "name": "PHP",
      "series": [
        {
          "name": "2016",
          "value": 85000
        },
        {
          "name": "2017",
          "value": 85000
        },
        {
          "name": "2018",
          "value": 80000
        },
        {
          "name": "2019",
          "value": 55000
        }
      ]
    },
  
    {
      "name": "C#",
      "series": [
        {
          "name": "2016",
          "value": 90000
        },
        {
          "name": "2017",
          "value": 100000
        },
        {
          "name": "2018",
          "value": 70000
        },
        {
          "name": "2019",
          "value": 70000
        }
      ]
    },
  
    {
      "name": "Angular",
      "series": [
        {
          "name": "2016",
          "value": 80000
        },
        {
          "name": "2017",
          "value": 90000
        },
        {
          "name": "2018",
          "value": 100000
        },
        {
          "name": "2019",
          "value": 120000
        }
      ]
    }
  ];
  
  
    view: any[] = [400, 200];
   
    showXAxis = true;
    showYAxis = true;
    gradient = true;
    showLegend = false;
    showXAxisLabel = false;
    xAxisLabel = 'Number';
    showYAxisLabel = true;
    yAxisLabel = 'Salarios en dolares';
    timeline = true;
  
    colorScheme = {
      domain: ['#A10A28','#C7B42C','#5AA454',   '#AAAAAA']
    };
   
    autoScale = true;

  displayedColumns: string[] = ['Id', 'Nombre', 'Nota'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort: MatSort;

  constructor() {

    const users = Array.from({ length: 100 }, (_, k) => this.createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createNewUser(id: number): UserData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' + NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString()
    };
  }
}
