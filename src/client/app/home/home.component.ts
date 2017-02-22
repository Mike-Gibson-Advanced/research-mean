import {
  Component,
  OnInit,
} from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Title } from './title';
import { XLargeDirective } from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public items: IItem[] = [];
  public newItem: {name: string} = { name: ''};

  constructor(
    public title: Title,
    private http: Http
  ) {}

  public ngOnInit() {
    this.getData()
      .subscribe(
        (items) => this.items = items,
        (e) => alert('error - ' + e));
  }

  public delete(item: IItem) {
    this.deleteData(item)
      .subscribe(
        () => {
          const index = this.items.indexOf(item);
          if (index > -1) {
            this.items.splice(index, 1);
          }
        },
        (e) => alert('error - ' + e));
  }

  public saveItem() {
    this.postData(this.newItem)
      .subscribe(
        (item) => this.items.push(item),
        (e) => alert('error - ' + e));
  }

  public getData(): Observable<any[]> {
    return this.http
      .get('api/data')
      .map((res: Response) => res.json());
  }

  public postData(item: { name: string }): Observable<IItem> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post('/api/data', item, options)
      .map((res: Response) => res.json());
  }

  public deleteData(item: IItem): Observable<any> {
    return this.http.delete('/api/data/' + item.id);
  }
}

interface IItem {
  id: number;
  name: string;
}
