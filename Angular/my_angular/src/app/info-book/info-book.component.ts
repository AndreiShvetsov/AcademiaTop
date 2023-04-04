import { Component } from '@angular/core';

@Component({
  selector: 'app-info-book',
  template: `
  <div>
    <section>
      <h2>Книга</h2>
      <h3>Ника Перумова</h3>
      <p>{{name | uppercase}}</p>
      <p>Издана в {{createDate | date}}</p>
      <p>{{numPage| number}} страниц</p>
      <p>Издатель {{publishing | uppercase}}</p>
      <img src="./assets/book.jpeg" alt="Изображение книги">
    </section>
  </div>
  `,
  styleUrls: ['./info-book.component.css'],
})
export class InfoBookComponent {
  name = '"Алмазный меч, деревянный меч"';
  createDate = `1998`;
  numPage = `480`;
  publishing = `"Эксмо-Пресс"`;
}
