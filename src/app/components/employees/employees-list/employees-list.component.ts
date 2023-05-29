import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: '1',
      name: 'John',
      email: 'john.doe@gmail.com',
      phone: 9326171088,
      salary: 600000,
      department: 'IT'
    },
    {
      id: '2',
      name: 'Smith',
      email: 'smith.doe@gmail.com',
      phone: 9326171088,
      salary: 600000,
      department: 'IT'
    },
    {
      id: '3',
      name: 'Calvin',
      email: 'calvin.klein@gmail.com',
      phone: 9326171088,
      salary: 600000,
      department: 'IT'
    }
  ];
  constructor() { }
  ngOnInit(): void {

  }
}
