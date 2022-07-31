import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUSer } from 'src/app/shard-class/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string='https://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) { }

    getAllUsers():Observable<IUSer[]>
    {
      return this.http.get<IUSer[]>(this.url);
    }
}
