import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from './user-model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(  ) {
  }

  getAll() {
      return null;
  }

  getById(id: number) {
      return null;
  }

  create(user: UserModel) {
      //console.log('Create: ', user);
      return null;
  }

  update(user: UserModel) {
      //console.log('update-service:', user);
      return null;
  }

  delete(id: number) {
      return null;
  }



  private getMockUser() {
    return [
      {
        id: 1,
        name: 'Vacskamati',
        email: 'vacskamati@example.com',
        password: 'Angular',
        iskola: 'Kerek Gimi',
        helyseg: 'Kerekerdő',
        jogosultsag: 0
      },
      {
        id: 2,
        name: 'Ló Szerafin',
        email: 'szerafin@example.com',
        password: 'Angular',
        iskola: 'Kerek Gimi',
        helyseg: 'Kerekerdő',
        jogosultsag: 1
      },
      {
        id: 3,
        name: 'Aromo',
        email: 'aromo@example.com',
        iskola: 'Kerek Gimi',
        helyseg: 'Kerekerdő',
        jogosultsag: 1
      },
    ];
  }
}
