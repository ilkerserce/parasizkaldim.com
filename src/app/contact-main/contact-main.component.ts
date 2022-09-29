import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.css']
})
export class ContactMainComponent implements OnInit {

  name = new FormControl('');
  mail = new FormControl('');
  message = new FormControl('');
  
  constructor() { }

  ngOnInit(): void {
  }

}
