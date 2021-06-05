import { List } from './models/list';
import { Animes } from './models/animes';
import { ApiTestService } from './services/api-test.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-api-tests',
  templateUrl: './api-tests.component.html',
  styleUrls: ['./api-tests.component.css']
})
export class ApiTestsComponent implements OnInit {
  anime = {} as Animes;
  animes: Animes[];


  constructor(private apiService: ApiTestService) { }

  ngOnInit(): void {
    this.getAnimes()
  }

  getAnimes(){
    this.apiService.getAnimes().subscribe((animes:Animes[]) =>{
      this.animes = animes;
    })
  }

}
