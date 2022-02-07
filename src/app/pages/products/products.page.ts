import { Component, OnInit } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  constructor(private http: HTTP) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    setTimeout(() => {
      this.http
        .get('https://jsonplaceholder.typicode.com/posts', {}, {})
        .then((data) => {
          console.log(data.data); // data received by server
        })
        .catch((error) => {
          console.log(error.error); // error message as string
        });
    }, 5000);
  }
}
