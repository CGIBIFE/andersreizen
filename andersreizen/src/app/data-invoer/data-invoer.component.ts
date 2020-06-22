import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {consoleTestResultHandler} from "tslint/lib/test";
import {SaveCompanyConsumptionService} from "../save-company-consumption.service";

@Component({
    selector: 'app-data-invoer',
    templateUrl: './data-invoer.component.html',
    styleUrls: ['./data-invoer.component.scss']
})
export class DataInvoerComponent implements OnInit {

    zakelijk_reizen: any [];
    woon_werkverkeer: any [];
    declaraties: any[];
    vliegen_defra: {
        year:number
        fuelType: any [];
    };
    vliegen: {
        year:number
        fuelType: any [];
    };
    wagenparkTypeForm: FormGroup
    woon_werkverkeer_Form: FormGroup
    declaratiesForm: FormGroup
    vliegenTotal: {
        Emissie: number;
        Kilometrage: number;
        Aantal: number;
        title: string;
    };

    constructor(private saveCompanyConsumptionService: SaveCompanyConsumptionService) {
        this.wagenparkTypeForm = new FormGroup({})
        this.woon_werkverkeer_Form = new FormGroup({})
        this.declaratiesForm = new FormGroup({})
    }

    calculateAandeel(fleetObject, aantal) {
        let totalAantal = 0;
        fleetObject.fuelType.map(fleet => {
            totalAantal += parseFloat(fleet.Aantal)
        })
        return (aantal * 100) / totalAantal;
    }


    updateField(event, field, type, tab, fleetType, factor?) {
        switch (tab) {
            case 'zakelijk_reizen': {

                if (this.zakelijk_reizen.find(fleetTypes => fleetTypes.wagenparkType === fleetType)) {
                    this.zakelijk_reizen.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.find(f => f.field === field)[type] = event.target.value;
                }
                switch (type) {
                    case 'Aantal': {
                        let AnatalTotal = 0;
                        this.zakelijk_reizen.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.map(fleet => {
                            AnatalTotal = AnatalTotal + parseInt(fleet.Aantal)
                        })
                        this.zakelijk_reizen.find(fleetTypes => fleetTypes.wagenparkType === fleetType).total.Aantal = AnatalTotal
                        this.zakelijk_reizen.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.map(fleet => {
                            fleet.Aandeel = `${this.calculateAandeel(this.zakelijk_reizen.find(fleetTypes => fleetTypes.wagenparkType === fleetType), fleet.Aantal).toFixed(2)}%`
                        })
                    }
                        break;
                    case 'Kilometrage': {
                        let KilometrageTotal = 0;
                        this.zakelijk_reizen.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.map(fleet => {
                            KilometrageTotal = KilometrageTotal + parseInt(fleet.Kilometrage)
                        })
                        this.zakelijk_reizen.find(fleetTypes => fleetTypes.wagenparkType === fleetType).total.Kilometrage = KilometrageTotal
                    }
                        break;
                    case 'Consumptie': {
                        let totalEmission = 0;
                        const factorvalue = factor.split('kg CO2eq/ltr')[0].replace(',', '.');
                        this.zakelijk_reizen.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.find(f => f.field === field)['Emissie'] = `${((factorvalue * event.target.value) / 1000).toFixed(2)} ton`;
                        this.zakelijk_reizen.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.map(fleet => {
                            totalEmission = parseFloat(fleet.Emissie.toString().replace(' ton', '')) + totalEmission;
                        })

                        this.zakelijk_reizen.find(fleetTypes => fleetTypes.wagenparkType === fleetType).total.Emissie = `${totalEmission}`;
                    }
                        break;
                    case 'year': {
                        this.zakelijk_reizen.map(type => type.year = event.target.value)
                    }
                }

            }
                break;
            case 'woon_werkverkeer': {

                this.woon_werkverkeer.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.find(f => f.field === field)[type] = event.target.value;
                switch (type) {
                    case 'Aantal': {
                        let AnatalTotal = 0;
                        this.woon_werkverkeer.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.map(fleet => {
                            AnatalTotal = AnatalTotal + parseInt(fleet.Aantal)
                        })
                        this.woon_werkverkeer.find(fleetTypes => fleetTypes.wagenparkType === fleetType).total.Aantal = AnatalTotal
                        this.woon_werkverkeer.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.map(fleet => {
                            fleet.Aandeel = `${this.calculateAandeel(this.woon_werkverkeer.find(fleetTypes => fleetTypes.wagenparkType === fleetType), fleet.Aantal).toFixed(2)}%`
                        })
                    }
                        break;

                    case 'Kilometrage': {
                        let KilometrageTotal = 0;
                        this.woon_werkverkeer.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.map(fleet => {
                            KilometrageTotal = KilometrageTotal + parseInt(fleet.Kilometrage)
                        })
                        this.woon_werkverkeer.find(fleetTypes => fleetTypes.wagenparkType === fleetType).total.Kilometrage = KilometrageTotal
                        const factorvalue = factor.split('kg CO2eq/ltr')[0].replace(',', '.');
                        this.woon_werkverkeer.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.find(f => f.field === field)['Emissie'] = `${((factorvalue * event.target.value) / 1000).toFixed(2)} ton`;
                        let totalEmission = 0;
                        this.woon_werkverkeer.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.map(fleet => {
                            totalEmission = parseFloat(fleet.Emissie.toString().replace(' ton', '')) + totalEmission;
                        })

                        this.woon_werkverkeer.find(fleetTypes => fleetTypes.wagenparkType === fleetType).total.Emissie = `${totalEmission.toFixed(2)}`;
                    }
                        break;
                    case 'year': {
                        this.woon_werkverkeer.map(type => type.year = event.target.value)
                    }

                }
            }
                break;
            case 'declaraties': {

                this.declaraties.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.find(f => f.field === field)[type] = event.target.value;
                switch (type) {
                    case 'Aantal': {
                        let AnatalTotal = 0;
                        this.declaraties.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.map(fleet => {
                            AnatalTotal = AnatalTotal + parseInt(fleet.Aantal)
                        })
                        this.declaraties.find(fleetTypes => fleetTypes.wagenparkType === fleetType).total.Aantal = AnatalTotal

                        this.declaraties.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.map(fleet => {
                            fleet.Aandeel = `${this.calculateAandeel(this.declaraties.find(fleetTypes => fleetTypes.wagenparkType === fleetType), fleet.Aantal).toFixed(2)}%`
                        })
                    }
                        break;

                    case 'Kilometrage': {
                        let KilometrageTotal = 0;
                        this.declaraties.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.map(fleet => {
                            KilometrageTotal = KilometrageTotal + parseInt(fleet.Kilometrage)
                        })
                        this.declaraties.find(fleetTypes => fleetTypes.wagenparkType === fleetType).total.Kilometrage = KilometrageTotal
                        const factorvalue = factor.split('kg CO2eq/ltr')[0].replace(',', '.');
                        this.declaraties.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.find(f => f.field === field)['Emissie'] = `${((factorvalue * event.target.value) / 1000).toFixed(2)} ton`;
                        let totalEmission = 0;

                        this.declaraties.find(fleetTypes => fleetTypes.wagenparkType === fleetType).fuelType.map(fleet => {
                            totalEmission = parseFloat(fleet.Emissie.toString().replace(' ton', '')) + totalEmission;
                        })
                        this.declaraties.find(fleetTypes => fleetTypes.wagenparkType === fleetType).total.Emissie = `${totalEmission.toFixed(2)}`;
                    }
                        break;
                    case 'year': {
                        this.declaraties.map(type => type.year = event.target.value)
                        this.vliegen_defra.year = event.target.value;
                        this.vliegen.year = event.target.value;
                    }
                }
                break;
            }
            case 'DEFRA': {
                const factorvalue = factor.split('kg CO2eq/ltr')[0].replace(',', '.');
                this.vliegen_defra.fuelType.find(fleetTypes => fleetTypes.type === fleetType)['Emissie'] = `${((factorvalue * event.target.value) / 1000).toFixed(2)} ton`;
                this.vliegen_defra.fuelType.find(fleetTypes => fleetTypes.type === fleetType)[type] = event.target.value;
                break;
            }
            case 'Vliegen': {
                let KilometrageTotal = 0;
                let totalEmission = 0;
                const factorvalue = factor.split('kg CO2eq/ltr')[0].replace(',', '.');
                this.vliegen.fuelType.find(fleetTypes => fleetTypes.type === fleetType)['Emissie'] = `${((factorvalue * event.target.value) / 1000).toFixed(2)} ton`;
                this.vliegen.fuelType.find(fleetTypes => fleetTypes.type === fleetType)[type] = event.target.value;
                this.vliegen.fuelType.map(fleet => {
                    KilometrageTotal = KilometrageTotal + parseInt(fleet.Kilometrage)
                })
                this.vliegenTotal.Kilometrage = KilometrageTotal
                this.vliegen.fuelType.map(fleet => {
                    totalEmission = parseFloat(fleet.Emissie.toString().replace(' ton', '')) + totalEmission;
                })
                this.vliegenTotal.Emissie = totalEmission
                break;
            }

        }

    }

    ngOnInit() {
        this.zakelijk_reizen = [{
            year: 0,
            submitString: 'Geel kenteken opslaan',
            total: {
                title: 'Totaal geel kenteken',
                Aantal: 0,
                Kilometrage: 0,
                Emissie: 0
            },
            wagenparkType: '1. Wagenpark - geel kenteken',
            fuelType: [{
                type: '1. Geel kenteken - Benzine:',
                field: 'Benzine',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2,74 kg CO2eq/ltr',
                Emissie: 0
            }, {
                type: '2. Geel kenteken - Hybride Benzine:',
                Aantal: 0,
                Aandeel: '0%',
                field: 'hybride_benzine',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2,74 kg CO2eq/ltr',
                Emissie: 0
            }, {
                type: '3. Geel kenteken - Diesel:',
                field: 'Diesel',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '3,23 kg CO2eq/ltr',
                Emissie: 0
            }, {
                type: '4. Geel kenteken - Hybride Diesel:',
                Aantal: 0,
                Aandeel: '0%',
                field: 'hybride_diesel',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '3,23 kg CO2eq/ltr',
                Emissie: 0
            }, {
                type: '5. Geel kenteken - LPG:',
                Aantal: 0,
                Aandeel: '0%',
                field: 'LPG',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '1,81 kg CO2eq/ltr',
                Emissie: 0
            }, {
                type: '6. Geel kenteken - Aardgas/CNG:',
                Aantal: 0,
                Aandeel: '0%',
                field: 'CNG',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.73 kg CO2eq/ltr',
                Emissie: 0
            }, {
                type: '7. Geel kenteken - Bio-CNG:',
                Aantal: 0,
                Aandeel: '0%',
                field: 'bio_CNG',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '1,04 kg CO2eq/ltr',
                Emissie: 0
            }, {
                type: '8. Geel kenteken - 100% elektriciteit:',
                Aantal: 0,
                Aandeel: '0%',
                field: 'elektriciteit',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '0,48 kg CO2eq/ltr',
                Emissie: 0
            }, {
                type: '9. Geel kenteken - elektriciteit (groene stroom):',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '0,00 kg CO2eq/ltr',
                field: 'groene_stroom',
                Emissie: 0
            }, {
                type: '10. Geel kenteken - Waterstof (grijze waterstof):',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '12 kg CO2eq/ltr',
                field: 'Waterstof',
                Emissie: 0
            }, {
                type: '11. Geel kenteken - Waterstof (groene waterstof):',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '0,76 kg CO2eq/ltr',
                field: 'groene_waterstof',
                Emissie: 0
            },]
        }, {
            submitString: 'Grijs kenteken opslaan',
            year: 0,
            total: {
                title: 'Totaal grijs kenteken',
                Aantal: 0,
                Kilometrage: 0,
                Emissie: 0
            },
            wagenparkType: '1. Wagenpark - grijs kenteken', fuelType: [{
                type: '1. Grijs kenteken - Benzine:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2,74 kg CO2eq/ltr',
                field: 'Benzine',
                Emissie: 0
            }, {
                type: '2. Grijs kenteken - Hybride Benzine:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2,74 kg CO2eq/ltr',
                field: 'hybride_benzine',
                Emissie: 0
            }, {
                type: '3. Grijs kenteken - Diesel:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '3,23 kg CO2eq/ltr',
                field: 'Diesel',
                Emissie: 0
            }, {
                type: '4. Grijs kenteken - Hybride Diesel:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '3,23 kg CO2eq/ltr',
                field: 'hybride_diesel',
                Emissie: 0
            }, {
                type: '5. Grijs kenteken - LPG:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '1,81 kg CO2eq/ltr',
                field: 'LPG',
                Emissie: 0
            }, {
                type: '6. Grijs kenteken - Aardgas/CNG:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.73 kg CO2eq/ltr',
                field: 'CNG',
                Emissie: 0
            }, {
                type: '7. Grijs kenteken - Bio-CNG:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '1,04 kg CO2eq/ltr',
                field: 'bio_CNG',
                Emissie: 0
            }, {
                type: '8. Grijs kenteken - 100% elektriciteit:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '0,48 kg CO2eq/ltr',
                field: 'elektriciteit',
                Emissie: 0
            }, {
                type: '9. Grijs kenteken - elektriciteit (groene stroom):',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '12 kg CO2eq/ltr',
                field: 'groene_stroom',
                Emissie: 0
            }, {
                type: '10. Grijs kenteken - Waterstof (grijze waterstof):',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '12 kg CO2eq/ltr',
                field: 'grijze_waterstof',
                Emissie: 0
            }, {
                type: '11. Grijs kenteken - Waterstof (groene waterstof):',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '12.0.878',
                field: 'groene_waterstof',
                Factor: '0,76 kg CO2eq/ltr',
                Emissie: 0
            }, {
                type: '12. (Elektrische) leasefiets):',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '12.0.878',
                field: 'elektrische_leasefiets',
                Factor: '0,01 kg CO2eq/ltr',
                Emissie: 0
            },]
        }]

        this.vliegen_defra = {
            year: 0,
            fuelType:[
            {
                field: 'regionaal_economy',
                Kilometrage: 0,
                Factor: '0,25 kg CO2eq/ltr',
                Emissie: 0,
                type: 'Regionaal Economy < 460 km (DEFRA)'
            },
            {
                field: 'short_haul_economy',
                Kilometrage: 0,
                Factor: '0,16 kg CO2eq/ltr',
                Emissie: 0,
                type: 'Short-haul Economy < 3700 km (DEFRA)'
            },
            {
                field: 'long_haul_economy',
                Kilometrage: 0,
                Factor: '0,15 kg CO2eq/ltr',
                Emissie: 0,
                type: 'Long-haul Economy > 3700 km (DEFRA)'
            }, {
                field: 'short_shaul_businessclass',
                Kilometrage: 0,
                Factor: '0,23 kg CO2eq/ltr',
                Emissie: 0,
                type: 'Short-haul Businessclass < 3700 km (DEFRA)'
            },
            {
                field: 'long_haul_businessclass',
                Kilometrage: 0,
                Factor: '0,43 kg CO2eq/ltr',
                Emissie: 0,
                type: 'Long-haul Businessclass > 3700 km (DEFRA)'
            },
        ]}
        this.vliegenTotal = {
            title: 'Totaal Vliegen',
            Aantal: 0,
            Kilometrage: 0,
            Emissie: 0
        },
            this.vliegen = {
                year: 0,
            fuelType:
            [
                {
                    Kilometrage: 0,
                    Factor: '0,30 kg CO2eq/ltr',
                    Emissie: 0,
                    field: 'regionaal_economy',
                    type: 'Regionaal Economy < 700 km'
                },
                {
                    Kilometrage: 0,
                    Factor: '0,20 kg CO2eq/ltr',
                    Emissie: 0,
                    field: 'europees_economy',
                    type: 'Europees Economy 700 - 2.500 km'
                },
                {
                    Kilometrage: 0,
                    Factor: '0,15 kg CO2eq/ltr',
                    Emissie: 0,
                    field: 'intercontinentaal_economy',
                    type: 'Intercontinentaal Economy > 2.500 km'
                }]}
        this.woon_werkverkeer = [{
            year: 0,
            wagenparkType: '2. Woon-werkverkeer - vaste vergoeding',
            total: {
                title: 'Totaal Woon-werkverkeer',
                Aantal: 0,
                Kilometrage: 0,
                Emissie: 0
            },
            fuelType: [{
                type: '1. Benzine:',
                Aantal: 0,
                Aandeel: '0%',
                field: 'benzine',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                Emissie: 0
            }, {
                type: '2. Hybride Benzine:',
                Aantal: '2.33',
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.7 kg CO2eq/ltr',
                field: 'hybride_benzine',
                Emissie: 0
            }, {
                type: '3. Diesel:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'diesel',
                Emissie: 0
            }, {
                type: '4. Hybride Diesel:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'hybride_diesel',
                Emissie: 0
            }, {
                type: '5. LPG:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'LPG',
                Emissie: 0
            }, {
                type: '6. Aardgas/CNG:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'CNG',
                Emissie: 0
            }, {
                type: '7. Bio-CNG:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'Bio_CNG',
                Emissie: 0
            }, {
                type: '8. Elektriciteit:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'elektriciteit',
                Emissie: 0
            }, {
                type: '9. Carpool:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                Emissie: 0,
                field: 'groene_stroom',
            }, {
                type: '10. Motor/scooter:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                Emissie: 0,
                field: 'grijze_waterstof',
            }, {
                type: '11. Fietsen/lopen:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                Emissie: 0,
                field: 'groene_waterstof',
            }, {
                type: '12. OV:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                Emissie: 0,
                field: 'groene_waterstof',
            }, {
                type: '13. Vermeden door thuiswerken:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                Emissie: 0,
                field: 'groene_waterstof',
            },]
        }]
        this.declaraties = [{
            year: 0,
            total: {
                title: 'Totaal declaraties (auto)kilometers',
                Aantal: 0,
                Kilometrage: 0,
                Emissie: 0
            },
            wagenparkType: '3. Declaraties (auto)kilometers - variabele vergoeding',
            submitstring:'Declaraties OV-reizen opslaan',
            fuelType: [{
                type: '1. Benzine:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                Emissie: 0,
                field: 'Benzine',
            }, {
                type: '2. Hybride Benzine:',
                Aantal: '2.33',
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.7 kg CO2eq/ltr',
                Emissie: 0,
                field: 'hybride_benzine',
            }, {
                type: '3. Diesel:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'diesel',
                Emissie: 0
            }, {
                type: '4. Hybride Diesel:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'hybride_diesel',
                Emissie: 0
            }, {
                type: '5. LPG:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'LPG',
                Emissie: 0
            }, {
                type: '6. Aardgas/CNG:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'CNG',
                Emissie: 0
            }, {
                type: '7. Bio-CNG:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'bio_CNG',
                Emissie: 0
            }, {
                type: '8. Taxi\'s (diesel):',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'Taxi',
                Emissie: 0
            }, {
                type: '9. Elektriciteit:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'Elektriciteit',
                Emissie: 0
            }, {
                type: '10. Fiets / e-bike:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                field: 'e_bike',
                Factor: '2.74 kg CO2eq/ltr',
                Emissie: 0
            }]
        }, {
            wagenparkType: '4. Declaraties OV-reizen',
            submitstring:'Declaraties (auto) kilometers opslaan',
            year: 0,
            fuelType: [{
                type: '1. Zakelijk gedeclareerd OV / NS business card:',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'OV_reizen',
                Emissie: 0
            }, {
                type: '2. Internationale treinreizen:',
                Aantal: '2.33',
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.7 kg CO2eq/ltr',
                field: 'treinreizen',
                Emissie: 0
            }, {
                type: '3. Post paid OV (Mobiliteitskaart):',
                Aantal: 0,
                Aandeel: '0%',
                Kilometrage: 0,
                Consumptie: '',
                Factor: '2.74 kg CO2eq/ltr',
                field: 'Mobiliteitskaart',
                Emissie: 0
            }]
        }]
    }

    submitData(data) {
        let conseptiondata = []
        if(data.fuelType){
             conseptiondata = [...data.fuelType]
        }else {
            conseptiondata = [...data]
        }

        let sterlisedData = conseptiondata.map(item => {
            return {
                category: item.type,
                dataNumber: parseInt(item.Aantal),
                aandeel: item.Aandeel || 0,
                kilometer: item.Kilometrage,
                consumption: parseFloat(item.Consumptie),
                dataFactor: item.Factor,
                emission: item.Emissie,
                dataYear:data.year.toString()
            }
        })

        this.saveCompanyConsumptionService.saveConsumption({
            companyId: parseInt(localStorage.getItem('compId')),
            companyData: [...sterlisedData]
        }).subscribe(data => console.log(data))
    }

}
