import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punyakeshetramdetails',
  templateUrl: './punyakeshetramdetails.component.html',
  styleUrls: ['./punyakeshetramdetails.component.css']
})
export class PunyakeshetramdetailsComponent implements OnInit {
  constructor() { }

  punyakeshtramdata;

  ngOnInit() {
    let item = {
      imagepath: "../assets/images/15.jpg",
      poojaname: "Sita Ramachandraswamy temple, Bhadrachalam",
      history: `The Sri Sita Ramachandraswamy temple is a South Indian Hindu temple dedicated to Rama, the seventh incarnation of the god Vishnu. It is located on the shores of the Godavari River in the town of Bhadrachalam, a part of the Bhadradri Kothagudem district in Telangana state. Often simply referred to as Bhadrachalam or Bhadradri, the temple is considered one of the Divya Kshetrams of Godavari and is also revered as Dakshina Ayodhya. According to the legend, Vishnu appeared to Meru's son Bhadra as Rama to answer the latter's prayers. However, Vishnu forgot that Rama was a mortal human and appeared as Vaikuntha Rama with four hands. Sita and Lakshmana form part of the temple's moolavar.
      Bhadrachalam is notable for its principal deity Vaikuntha Rama, a form of Rama not found anywhere else in the country. According to the Brahma Purana, the temple's deity is capable of imparting knowledge to those who worship him. Gopanna used Bhadrachalam as a centre of the Bhajan tradition to spread awareness of the Vaishnavite tradition. The annual Brahmotsavam is the biggest festival celebrated in Bhadrachalam; the key event is the Sri Sitarama Thirukalyana Mahotsavam, or the marriage of Rama and Sita on the eve of Sri Rama Navami. Other important festivals celebrated in Bhadrachalam are Vaikuntha Ekadashi, Vasanthotsavam, and Vijayadashami.
    `,
      description: ` The Sri Sita Ramachandraswamy temple is a South Indian Hindu temple dedicated to Rama, the seventh incarnation of the god Vishnu. It is located on the shores of the Godavari River in the town of Bhadrachalam, a part of the Bhadradri Kothagudem district in Telangana state. Often simply referred to as Bhadrachalam or Bhadradri, the temple is considered one of the Divya Kshetrams of Godavari and is also revered as Dakshina Ayodhya. According to the legend, Vishnu appeared to Meru's son Bhadra as Rama to answer the latter's prayers. However, Vishnu forgot that Rama was a mortal human and appeared as Vaikuntha Rama with four hands. Sita and Lakshmana form part of the temple's moolavar.
 
     The self-manifested moolavar was discovered in the 17th century by Pokala Dhammakka, a tribal woman living in Bhadrareddypalem. After she built a mandapam for the idols, Bhadrachalam's tehsildar Kancherla Gopanna constructed this temple during the reign of Abul Hasan Qutb Shah. After Gopanna, Tumu Lakshmi Narasimha Dasu and Varada Ramadasu looked after the temple's rituals. Bhadrachalam follows the Vaishnavite Pancharatra Agama tradition, and its system of worship is modelled on that of the Ranganathaswamy temple in Srirangam. The temple has four entrances; the Rajagopuram is located at the northern entrance, which is called the Vaikuntha Dwaram. The temple houses a number of sub-shrines and a few mandapams.
     
     Bhadrachalam is notable for its principal deity Vaikuntha Rama, a form of Rama not found anywhere else in the country. According to the Brahma Purana, the temple's deity is capable of imparting knowledge to those who worship him. Gopanna used Bhadrachalam as a centre of the Bhajan tradition to spread awareness of the Vaishnavite tradition. The annual Brahmotsavam is the biggest festival celebrated in Bhadrachalam; the key event is the Sri Sitarama Thirukalyana Mahotsavam, or the marriage of Rama and Sita on the eve of Sri Rama Navami. Other important festivals celebrated in Bhadrachalam are Vaikuntha Ekadashi, Vasanthotsavam, and Vijayadashami.
    `}
    this.punyakeshtramdata = item;
  }
}
