import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {
  @Input() weatherData: any[] = [];
  public chartOptions: any

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['weatherData'] && this.weatherData){
      this.createChart();
    }
  }

  createChart(): void {
    const labels = this.weatherData.map(item => item.day);
    const temperatureData = this.weatherData.map(item =>item.temperature);
    const windSpeedData = this.weatherData.map(item => item.windSpeed);

    this.chartOptions = {
      title:{
        text: "Datos semanales del tiempo"
      },

      axisX:{
        title: "Días de la semana",
        interval: 1
      },

      data:[
        {
          type: "column",
          name: "Temperatura (°C)",
          showInLegend: true,
          dataPoints: labels.map((label, index) => ({label: label, y: temperatureData[index]}))
        },
        {
          type: "column",
          name: "Viento (km/h)",
          showInLegend: true,
          dataPoints: labels.map((label, index) => ({label: label, y: windSpeedData[index]}))
        }

      ]
    }
  }
}
