import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.css'],
})
export class LicensesComponent {
  VerData: any[] = []; // Initialize as an empty array

  constructor(private _dataService: DataService) {
    this._dataService.getValidation().subscribe({
      next: (res) => {
        console.log(res);
        // Ensure that res.data is an array
        this.VerData = Array.isArray(res.data) ? res.data : [];
      },
      error: (err) => {
        console.error('Error fetching data', err);
        // Handle the error as needed
      },
    });
  }
}
