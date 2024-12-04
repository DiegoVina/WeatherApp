import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ChartsComponent } from "../charts/charts.component";

@Component({
  selector: 'app-weather-table',
  standalone: true,
  imports: [CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule, ChartsComponent],
  templateUrl: './weather-table.component.html',
  styleUrl: './weather-table.component.scss'
})
export class WeatherTableComponent {
  displayedColumns: string[] = ['ciudad', 'temperatura', 'viento'];
  dataSource = [
    {city: 'A Coruña', temperature: 22, windSpeed: 15},
    {city: 'Lugo', temperature: 18, windSpeed: 20},
    {city: 'Ourense', temperature: 5, windSpeed: 30},
    {city: 'Pontevedra', temperature: 21, windSpeed: 3}
  ];

  // Initialize weatherData with all the weekly data
  weatherData = this.dataSource;

  onCitySelect(city: string){
    const selectedCity = this.dataSource.find(item => item.city === city);

    if (selectedCity){
      this.weatherData = [selectedCity];
    }
  }
}

