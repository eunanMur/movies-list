import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    { id: 1, title: 'Drive', year: '2011', director: 'Nicolas Winding Refn' },
    { id: 2, title: 'La La Land', year: '2016', director: 'Damien Chazelle' },
    { id: 3, title: 'The Nice Guys', year: '2016', director: 'Shane Black' },
    { id: 4, title: 'The Big Short', year: '2015', director: 'Adam McKay' },
  ];

  getMovies() {
    return this.movieList;
  }
}
