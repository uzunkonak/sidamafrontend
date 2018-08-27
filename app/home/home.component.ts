import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {Dataset} from "../_models/dataset";
import {DatasetService} from "../_services/dataset.service";

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    datasets: Dataset[] = [];

    constructor(private userService: UserService, private datasetService: DatasetService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser);
    }

    ngOnInit() {
        this.loadAllUsers();
        this.getAllDatasets();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => {
            this.users = users;
        });
    }

    private getAllDatasets() {
        this.datasetService.getAll().subscribe(datasets => {
            this.datasets = datasets
        });
    }
}