import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) {

   }

   baseurl="https://api.themoviedb.org/3";
   apiKey="08cc33bd5ae3a747598ce2ad84376e66"

   //bannerrapidata

   bannerApiData():Observable<any>{
     return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apiKey}`)
   }


   trendingApiData():Observable<any>{
      return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apiKey}`)
   }

   getSearchMovie(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apiKey}&query=${data}`)
   }

   getDetailMovie(data:any):Observable<any>{
       return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apiKey}&query=${data}`) 
   }
   //for playing video
   getMovieVideo(data:any):Observable<any>{
     return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apiKey}`)
   }

   //movie cast

    getMovieCast(data:any):Observable<any>{
      return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apiKey}`)     
    }

}
