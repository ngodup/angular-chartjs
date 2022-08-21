import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-double-line-chart',
  templateUrl: './double-line-chart.component.html',
  styleUrls: ['./double-line-chart.component.scss'],
})
export class DoubleLineChartComponent implements AfterViewInit {
  @ViewChild('doubleLineCanvas') doubleLineCanvas: ElementRef | undefined;
  doubleLineChart: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.doubleLineChartMethod();
  }

  doubleLineChartMethod(): void {
    this.doubleLineChart = new Chart(this.doubleLineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: ['Facebook', 'Instagram', 'Mixed Technologies'],
        datasets: [
          {
            label: 'Facebook',
            data: [150, 250, 145, 100],
            backgroundColor: 'rgba(40,125,200,.5)',
            borderColor: 'rgb(40,100,200)',
            fill: true
          },
          {
            label: 'Instagram',
            data: [30, 90, 151, 220],
            backgroundColor: 'rgba(240,78,71,.5)',
            borderColor: 'rgb(240,78,71)',
            fill: true
          },
        ],
      },

      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            position: 'top',
            text: 'Facebook to Instagram - Social Networking',
            color: '#666',
            font: {
              size: 12,
            },
          },

          legend: {
            display: true,
            position: 'bottom',
            labels: {
              color: '#999',
              font: {
                size: 14
              }
            },
          },
        },
      },
    });
  }
}
