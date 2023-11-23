import { Component, OnInit } from '@angular/core';

import { DataTransferService } from '../../services/data.transfer.service';
import { Pizza } from '../../models/Pizza';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  pizzas: Pizza[] = [];

  constructor(private dataService: DataTransferService) {  }

  cards: any[] = [];
  
  ngOnInit() {
    this.dataService.getPizzas().subscribe((pizzas: Pizza[]) => {
      this.pizzas = pizzas;

      this.cards = this.pizzas.map((pizza, index) => {
        return {
          title: pizza.name,
          content: `${pizza.toppings} Price: ${pizza.cost}`,
          color: '#BB9457'
        };
      });
    });
  }
}