import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/javascript.json', name: 'JavaScript' },
      { id: 'data/html.json', name: 'HTML' },
      { id: 'data/Java.json', name: 'Java' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }

}
