import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    public http : HttpClient
  ) { }

  addMenu(menu):Observable<any>{
    return this.http.post('http://localhost:3000/api/menu', menu);
  }

  getMenus():Observable<any>{
    return this.http.get('http://localhost:3000/api/menu');
  }

  getMEnuByCategory(param: string):Observable<any>{
    return this.http.get('http://localhost:3000/api/menu?param='+param);
  }

  updateMenu(menu):Observable<any>{
    return this.http.put('http://localhost:3000/api/menu',menu);
  }

  deleteMenu(uuid: string):Observable<any>{
    return this.http.delete('http://localhost:3000/api/menu?uuid='+uuid);
  }

}
