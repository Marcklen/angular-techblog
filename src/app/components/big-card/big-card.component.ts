import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string ="https://th.bing.com/th/id/OIP.mRU-AbP-POroJu32ohVJOwAAAA?w=289&h=148&c=7&r=0&o=5&pid=1.7"
  cardTitle: string ="NOVA VERSÃO DO ANGULAR JÁ DISPONÍVEL"
  cardDescription: string ="Acesse o novo site do Angular para saber mais sobre as novidades e como atualizar seus projetos"
  constructor() {}

  ngOnInit(): void {
  }
}
