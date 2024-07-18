import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-main',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'

})
export class MainComponent  implements OnInit{

  hero!:string;
  hrHero!:string;
  herotext!:string;
  button!:string;
  imageurl!:string;
  section!:string;
  card!:string;
  mark!:string;
  proj!:string;
  imageprojurl!:string;
  ima!:string;
  imaC!:string;
  sect!:string;


  ngOnInit(): void {
    this.hero="Marketing Agency is Like";
    this.hrHero = "Maketing Agency Landing Page";
    this.herotext = "We're committed to pushing the boundaries of what's possible. Our latest product line is designed to revolutionize the way you think about technology. Whether you're a professional looking to enhance productivity or an enthusiast eager to experience the future today, we have something for everyone";
    this.button ="Get Started";
    this.imageurl = "https://github.com/codewithsadee/pixology/blob/master/assets/images/hero-banner.png?raw=true";
    this.section = "Experience the next generation of technology with ESGIS. Visit our website to learn more about our offerings and stay updated with the latest news and releases. Don’t miss out on the future—embrace it today."
    this.mark = "Our digital marketing experts are skilled in the latest techniques and trends, ensuring your business stays ahead of the competition.";
    this.sect = "We would love to discuss how we can work together to achieve our objectives. Could we schedule a brief call or meeting at your earliest convenience to explore this further?"
    this.proj = " Engage with your audience and grow your brand’s presence on social media platforms like Facebook, Instagram, and Twitter";
    this.imageprojurl = "https://www.dubaiparksandresorts.com/sites/default/files/Splash%20Party/Water-Splash-Party_WB_430x710.jpg"
    this.imaC = "https://idecution.marketing/images/pictures/contact/Idecution-Website-Contact-Us.jpg"
    this.ima = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYwf_-CuQxDTR7L2_83dW4kbkihVZ-qAjRvQhEp904mEOwCN0tkVGq41TEuA0RHnAUeg&usqp=CAU"
    this.card = "We’re at the forefront of technological advancement. Our latest innovative products are designed to revolutionize your experience,";
  }
}
