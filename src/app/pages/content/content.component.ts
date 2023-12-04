import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @Input()
  photoCover:string="https://blog.geekhunter.com.br/wp-content/uploads/2020/07/pngwing.com_.png"
  @Input()
  contentTitle:string="NOVO JAVA 22"
  @Input()
  contentDescription:string="Esse é o java do futuro atual !"
}
