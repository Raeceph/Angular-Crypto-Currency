import { Injectable } from '@angular/core';
import { HTTP} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {

result:any;

  constructor(private _http: Http) { }

  getPrices(){

retuen this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
.map(result => this.result = result.json())

  }

}
