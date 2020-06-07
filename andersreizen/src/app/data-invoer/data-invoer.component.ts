import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-data-invoer',
    templateUrl: './data-invoer.component.html',
    styleUrls: ['./data-invoer.component.scss']
})
export class DataInvoerComponent implements OnInit {

    data_invoer: any [];

    constructor() {
    }

    ngOnInit() {
        this.data_invoer = [{
            wagenparkType: '1. Wagenpark - geel kenteken',
            fuelType: [{
                type: '1. Geel kenteken - Benzine:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '2. Geel kenteken - Hybride Benzine:',
                Aantal: '2.33',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.7 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '3. Geel kenteken - Diesel:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '4. Geel kenteken - Hybride Diesel:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '5. Geel kenteken - LPG:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '6. Geel kenteken - Aardgas/CNG:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '7. Geel kenteken - Bio-CNG:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '8. Geel kenteken - 100% elektriciteit:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '9. Geel kenteken - elektriciteit (groene stroom):',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '10. Geel kenteken - Waterstof (grijze waterstof):',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '11. Geel kenteken - Waterstof (groene waterstof):',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },]
        }, {wagenparkType: '2. Wagenpark - grijs kenteken',fuelType: [{
                type: '1. Geel kenteken - Benzine:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '2. Geel kenteken - Hybride Benzine:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '3. Geel kenteken - Diesel:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '4. Geel kenteken - Hybride Diesel:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '5. Geel kenteken - LPG:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '6. Geel kenteken - Aardgas/CNG:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '7. Geel kenteken - Bio-CNG:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '8. Geel kenteken - 100% elektriciteit:',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '9. Geel kenteken - elektriciteit (groene stroom):',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '10. Geel kenteken - Waterstof (grijze waterstof):',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '5.185.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },{
                type: '11. Geel kenteken - Waterstof (groene waterstof):',
                Aantal: '2.343',
                Kilometrage: '78.449.251',
                Consumptie: '12.0.878',
                Factor: '2.74 kg CO2eq/ltr',
                'Emissie (CO2eq)': '14209,31 ton'
            },]}]
    }

}
