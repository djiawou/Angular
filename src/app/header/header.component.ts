import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  logo!:string;
  home!:string;
  services!:string;
  contact!:string;

  project!:string;
  about!:string;
  blog!:string;
  button!:string;

  ngOnInit(): void {
    this.logo = "MaketingAgency";
    this.home = "Home";
    this.services = "Services";
    this.contact = "Contacts Us";
    this.about = "About";
    this.blog = "Blog";
    this.project = "Project";
    this.button = "Get Started";
  }  
}
