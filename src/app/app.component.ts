import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { WeatherTableComponent } from "./components/weather-table/weather-table.component";
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, WeatherTableComponent, CanvasJSAngularChartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather_app';
}
