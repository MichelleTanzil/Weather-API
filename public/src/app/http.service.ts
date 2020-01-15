import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";


@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  getWeather(weather: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${weather}&APPID=0a2bf08d9bf71d992cbb0dc9784b6474`);
  }
}
