import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../data/Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  @Input() hero?: Hero;

  ngOnInit(): void {
  }

}