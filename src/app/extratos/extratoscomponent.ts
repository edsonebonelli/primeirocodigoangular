import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: '../extratos/extratoscomponent.html',
  styleUrls: ['../extratos/extratoscomponent.scss'],
})
export class ExtratoComponent implements OnInit {
  @Input() transferencias: any[];

  constructor() {}

  ngOnInit(): void {}
}
