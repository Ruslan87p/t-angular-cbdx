import { Animal } from './../../interfaces/animal.interface';
import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})

export class ListItemsComponent implements OnInit {

  listItems: Animal[] = [];
  constructor(private listSvc: ListService) { }

  ngOnInit() {
    this.listSvc.getAll()
      .subscribe( (items: any) => {
        this.listItems = items['entries'];
      })
  }

  
  getProtocol(protocol: boolean): string {
    let prt = null;
    if(protocol) {
      prt = 'HTTPS'
    } else {
      prt = 'HTTP'
    }
    return prt;
 }

}
