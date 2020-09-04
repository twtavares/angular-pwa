import { EmployeeInterface } from './intercafe/employee.interface';
import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pwa';

  employes: EmployeeInterface[];

  constructor(public dataService: DataService) {
    this.getDetails();
  }

  getDetails(): any {
    this.dataService.getDetails().subscribe(res => {
      console.log(res);
      this.employes = res.data;
    });
  }

}
