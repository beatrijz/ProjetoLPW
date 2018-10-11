import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  testar(){
    alert("oi");
    alert("tudo bem?")
    alert("Deus abençoe")
  }
  constructor() { }

  ngOnInit() {
  }

}
