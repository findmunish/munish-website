import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  mobileNum = '00917889368892';
  ngOnInit() {
  }
  isMobile() {
    return false;
  }
  onClickWhatsapp() {
    let apilink = 'https://'
    apilink += this.isMobile()? 'api' : 'web'
    apilink += '.whatsapp.com/send?phone=' + this.mobileNum + '&text=' + encodeURI("")
    window.open(apilink, '_blank');
  }
}