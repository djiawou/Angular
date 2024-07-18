import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})


export class FooterComponent implements OnInit {
  copy!:string;
  ccp!:string;

  ngOnInit(): void {
    this.copy = "2024 All Rights Reserved by";
    this.ccp = "MarketingAgency"; }
}
