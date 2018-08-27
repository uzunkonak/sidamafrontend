import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api} from "../config";
import {Dataset} from "../_models/dataset";

@Injectable()
export class DatasetService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Dataset[]>(api.SERVER_URL + '/dataset/list');
    }
}