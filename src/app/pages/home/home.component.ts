import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieApiServiceService) { }
  
  bannerResult:any=[];
  trendingMovieResult:any=[];
  ngOnInit(): void {
    this.bannerData()
    this.trendingMovies()
  }

  bannerData(){
    this.service.bannerApiData()
    .subscribe((result)=>{
      console.log(result,'bannerresult#')
      this.bannerResult=result.results;
    })
  }

  trendingMovies(){
    this.service.trendingApiData()
    .subscribe((result)=>{
      console.log(result,'trendingresult#')
      
      this.trendingMovieResult=result.results;
    
    })
  }

}
