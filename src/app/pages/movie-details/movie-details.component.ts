import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetailResult:any;
  movieVideoResult:any;
  movieCastResult:any;
  constructor(private service:MovieApiServiceService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
    let movieId= this.router.snapshot.paramMap.get('id')
    console.log(movieId,'movieId#')

    this.getMovie(movieId)
    this.getVideo(movieId)
    this.getMovieCast(movieId)
  }

  getMovie(id:any){
    this.service.getDetailMovie(id)
    .subscribe((result)=>{
      console.log(result,'resultOne#')

      this.movieDetailResult=result
    })

  }

  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result)=>{
        console.log(result,'MovieVideo#')
        result.results.forEach((element:any) => {
           if(element.type==='Trailer'){
            this.movieVideoResult=element.key;
           }
        });
       
    })
  }

  getMovieCast(id:any){
    this.service.getMovieCast(id)
    .subscribe((result)=>{
      console.log(result,'movieCast#')
      this.movieCastResult=result.cast
    })
  }

}
