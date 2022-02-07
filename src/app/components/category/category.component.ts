import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  data = {
    category: [
      {
        id: 1,
        name: 'Kategori 1',
        image: 'https://www.w3schools.com/howto/img_snow.jpg',
      },
      {
        id: 2,
        name: 'Kategori 2',
        image: 'https://www.w3schools.com/howto/img_snow.jpg',
      },
      {
        id: 3,
        name: 'Kategori 3',
        image: 'https://www.w3schools.com/howto/img_snow.jpg',
      },
      {
        id: 4,
        name: 'Kategori 4',
        image: 'https://www.w3schools.com/howto/img_snow.jpg',
      },
      {
        id: 5,
        name: 'Kategori 5',
        image: 'https://www.w3schools.com/howto/img_snow.jpg',
      },
      {
        id: 6,
        name: 'Kategori 6',
        image: 'https://www.w3schools.com/howto/img_snow.jpg',
      },
      {
        id: 7,
        name: 'Kategori 7',
        image: 'https://www.w3schools.com/howto/img_snow.jpg',
      },
      {
        id: 8,
        name: 'Kategori 8',
        image: 'https://www.w3schools.com/howto/img_snow.jpg',
      },
      {
        id: 9,
        name: 'Kategori 9',
        image: 'https://www.w3schools.com/howto/img_snow.jpg',
      },
      {
        id: 10,
        name: 'Kategori 10',
        image: 'https://www.w3schools.com/howto/img_snow.jpg',
      },
      {
        id: 11,
        name: 'Kategori 11',
        image: 'https://www.w3schools.com/howto/img_snow.jpg',
      },
      {
        id: 12,
        name: 'Kategori 12',
        image: 'https://www.w3schools.com/howto/img_snow.jpg',
      },
    ],
  };

  constructor() {}

  ngOnInit() {}

  getata() {
    console.log(this.data.category);
  }
}
