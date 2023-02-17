import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult:any;
  hidden:boolean=false;
  constructor(private service:MovieApiServiceService) { }

  ngOnInit(): void {
  }

  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submit(){
     console.log(this.searchForm.value,'searchForm#')
     this.service.getSearchMovie(this.searchForm.value.movieName)
     .subscribe((result)=>{
         console.log(result,'searchmovie#')
         this.searchResult=result.results
         if(this.searchResult.length===0){
          this.hidden=true
         }else{
          this.hidden=false;
         }
     })
  }

}
