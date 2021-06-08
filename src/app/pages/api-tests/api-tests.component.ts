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

  saveAnimes(form : NgForm){
    if(this.anime._id !== undefined){
      this.apiService.updateAnimes(this.anime).subscribe(()=> {
        this.cleanForm(form);
      })
    }
  }

  getAnimes(){
    this.apiService.getAnimes().subscribe((animes:Animes[]) =>{
      this.animes = animes;
    })
  }

  deleteAnimes(anime:Animes){
    this.apiService.deleteAnimes(anime).subscribe(()=>{
      this.getAnimes();
    })
  }

  editAnimes(anime: Animes){
    this.anime = {...anime}
  }

  cleanForm(form: NgForm){
    this.getAnimes();
    form.resetForm();
    this.anime = {} as Animes;
  }

}
