import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MapaPage } from '../mapa/mapa';
import { CardapioPage } from '../cardapio/cardapio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CardapioPage;
  tab3Root = ContactPage;
  tab4Root = MapaPage;
  tab5Root = AboutPage;

  constructor() {

  }
}
