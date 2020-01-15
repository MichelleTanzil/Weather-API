import { Component, OnInit } from '@angular/core';

import { HttpService } from "../http.service";

@Component({
  selector: "app-oc",
  templateUrl: "./oc.component.html",
  styleUrls: ["./oc.component.css"]
})
export class OcComponent implements OnInit {
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
