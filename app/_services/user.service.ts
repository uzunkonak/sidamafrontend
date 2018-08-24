import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';
import {api} from "../config";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(api.SERVER_URL + '/user/list');
    }

    getById(id: number) {
        return this.http.get(api.SERVER_URL + '/user/' + id);
    }

    create(user: User) {
        return this.http.post(api.SERVER_URL + '/user/create', user);
    }

    update(user: User) {
        return this.http.put(api.SERVER_URL + '/user/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(api.SERVER_URL + '/user/' + id);
    }
}