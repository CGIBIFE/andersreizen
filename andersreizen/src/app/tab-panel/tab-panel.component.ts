import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements OnInit {
  private tab: number
  constructor() { }

  ngOnInit() {
    this.tab = 0;
  }

  selectTab(tab, event){
    const previousTab = document.querySelectorAll('.tab.selected')[0].textContent;
    switch (previousTab) {
      case '1. Wagenpark': {
        if(localStorage.getItem('wagenparkTypeForm') === 'true'){
          alert(`Sla eerst je gegevens op van ${previousTab} voordat je naar de volgende pagina gaat.`)
        } else {
          this.tab = tab;
        }
      }
      break;
      case '2. Woon-werkverkeer - vaste vergoeding': {
        if(localStorage.getItem('woon_werkverkeer_Form') === 'true'){
          alert(`Sla eerst je gegevens op van ${previousTab} voordat je naar de volgende pagina gaat.`)
        } else {
          this.tab = tab;
        }
      }
      case '3. Zakelijk verkeer': {
        if(localStorage.getItem('declaratiesForm') === 'true' || localStorage.getItem('vliegenForm') === 'true'){
          alert(`Sla eerst je gegevens op van ${previousTab} voordat je naar de volgende pagina gaat.`)
        } else {
          this.tab = tab;
        }
      }
    }



  }

}
