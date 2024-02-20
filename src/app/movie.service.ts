import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    { title: 'Drive', year: '2011', director: 'Nicolas Winding Refn' },
    { title: 'La La Land', year: '2016', director: 'Damien Chazelle' },
    { title: 'The Nice Guys', year: '2016', director: 'Shane Black' },
    { title: 'The Big Short', year: '2015', director: 'Adam McKay' },
  ];

  getMovies() {
    return this.movieList;
  }

  addMovie(movietitle:string, moviedirector:string, movieyear:string) {
    this.movieList.push({title:movietitle, director:moviedirector, year:movieyear});
  }

}
