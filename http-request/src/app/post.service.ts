import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostService{

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  createAndStorePost(title: string, content: string){
    const postData: Post = { title, content };
    this.http
      .post<{ name: string }>(
      'https://angular-guide-2dca5-default-rtdb.firebaseio.com/posts.json',
      postData
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }
  // tslint:disable-next-line:typedef
  fetchPosts(){
    this.http
      .get<{[key: string]: Post}>('https://angular-guide-2dca5-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData =>  {
        const postsArray: Post[] = [];
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)){
            postsArray.push({...responseData[key], id: key});
          }
        }
        return postsArray;
      }))
      .subscribe(posts => {
      });
  }
}
