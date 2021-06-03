import { ListService } from 'src/app/services/list.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


 

  value = '';
  constructor(private searchSvc: ListService) { 

  }

  
  getVelue()  {
    console.log(this.value);
  }


  ngOnInit(): void {

  }

}
