import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }


 constructor(private WeatherService: WeatherService) {

 }
 cityname: string ='paris';
 weatherData?: WeatherData;

  ngOnInit(): void {
    this.getweatherdata(this.cityname);
    
    
  } 
  onSubmit() {
    this.getweatherdata(this.cityname);
    this.cityname='';

  }
  private getweatherdata(cityName: string){
    this.WeatherService.getWeatherData('cityName')
    .subscribe({
      next: (Response)=> {
        this.weatherData =Response;
        console.log(Response);
      }
    });
  }

  
  
}
