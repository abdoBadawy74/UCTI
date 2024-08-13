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
  downloadImage(imageUrl: string): void {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = imageUrl.substring(imageUrl.lastIndexOf('/') + 1); // Extract filename from URL
        link.click();
        window.URL.revokeObjectURL(url); // Clean up the URL object
      })
      .catch((error) => console.error('Download error:', error));
  }
}
