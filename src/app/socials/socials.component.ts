import { Component, OnInit } from '@angular/core';
import { SOCIALS } from '../mock-socials';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {

  socials = SOCIALS;

  constructor() { }

  ngOnInit() {
  }

}
