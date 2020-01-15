import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-chicago",
  templateUrl: "./chicago.component.html",
  styleUrls: ["./chicago.component.css"]
})
export class ChicagoComponent implements OnInit {
  weather = {};
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getWeather();
  }
  getWeather() {
    let observable = this._httpService.getWeather("san jose");
    observable.subscribe((data: object) => {
      console.log("Got our data from component!", data);
      this.weather = data;
    });
  }
}
