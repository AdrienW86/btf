import Ajax from '@/assets/maillots_hommes/ajax.png'
import AjaxVerso from '@/assets/maillots_hommes/ajax-verso.png'
import Algerie from '@/assets/maillots_hommes/algerie.png'
import AlgerieVerso from '@/assets/maillots_hommes/algerie-verso.png'
import Arsenal from '@/assets/maillots_hommes/arsenal.png'
import ArsenalVerso from '@/assets/maillots_hommes/arsenal-verso.png'
import Barcelone from '@/assets/maillots_hommes/barcelone.png'
import BarceloneVerso from '@/assets/maillots_hommes/barcelone-verso.png'
import Bayern from '@/assets/maillots_hommes/bayern.png'
import BayernVerso from '@/assets/maillots_hommes/bayern-verso.png'
import Cameroun from '@/assets/maillots_hommes/cameroun.png'
import CamerounVerso from '@/assets/maillots_hommes/cameroun-verso.png'
import CoteIvoire from '@/assets/maillots_hommes/cote-ivoire.png'
import CoteIvoireVerso from '@/assets/maillots_hommes/cote-ivoire-verso.png'
import Espagne from '@/assets/maillots_hommes/espagne.png'
import EspagneVerso from '@/assets/maillots_hommes/espagne-verso.png'
import France from '@/assets/maillots_hommes/france.png'
import FranceVerso from '@/assets/maillots_hommes/france-verso.png'
import FranceExterieur from '@/assets/maillots_hommes/france-exterieur.png'
import FranceExterieurVerso from '@/assets/maillots_hommes/france-exterieur-verso.png'
import InterMilan from '@/assets/maillots_hommes/inter-milan.png'
import InterMilanVerso from '@/assets/maillots_hommes/inter-milan-verso.png'
import Juventus from '@/assets/maillots_hommes/juventus.png'
import JuventusVerso from '@/assets/maillots_hommes/juventus-verso.png'
import Lyon from '@/assets/maillots_hommes/lyon.png'
import LyonVerso from '@/assets/maillots_hommes/lyon-verso.png'
import Madrid from '@/assets/maillots_hommes/madrid.png'
import MadridVerso from '@/assets/maillots_hommes/madrid-verso.png'
import ManchesterCity from '@/assets/maillots_hommes/manchester-city.png'
import ManchesterCityVerso from '@/assets/maillots_hommes/manchester-city-verso.png'
import ManchesterUnited from '@/assets/maillots_hommes/manchester-united.png'
import ManchesterUnitedVerso from '@/assets/maillots_hommes/manchester-united-verso.png'
import Maroc from '@/assets/maillots_hommes/maroc.png'
import MarocVerso from '@/assets/maillots_hommes/maroc-verso.png'
import Marseille from '@/assets/maillots_hommes/marseille.png'
import MarseilleVerso from '@/assets/maillots_hommes/marseille-verso.png'
import Paris from '@/assets/maillots_hommes/psg.png'
import ParisVerso from '@/assets/maillots_hommes/psg-verso.png'
import Senegal from '@/assets/maillots_hommes/senegal.png'
import SenegalVerso from '@/assets/maillots_hommes/senegal-verso.png'
import Tunisie from '@/assets/maillots_hommes/tunisie.png'
import TunisieVerso from '@/assets/maillots_hommes/tunisie-verso.png'
import { v4 as uuidv4 } from 'uuid';

export const data = {
    ligue1: 
    [
        {
            id: uuidv4(),
            name: "Olympique de Lyon",
            price: 90,
            recto: Lyon,
            verso: LyonVerso,
            sizes: ["S","M","L","XL"]
        },  
        {
            id: uuidv4(),
            name: "Paris Saint-Germain",
            price: 90,
            recto: Paris,
            verso: ParisVerso,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Olympique de Marseille",
            price: 90,
            recto: Marseille,
            verso: MarseilleVerso,
            sizes: ["S","M","L","XL"]
        },          
    ],
    premierLeague: [
        {
            id: uuidv4(),
            name: "Arsenal",
            price: 90,
            recto: Arsenal,
            verso: ArsenalVerso,
            sizes: ["S","M","L","XL"]
        },   
        {
            id: uuidv4(),
            name: "Manchester City",
            price: 90,
            recto: ManchesterCity,
            verso: ManchesterCityVerso,
            sizes: ["S","M","L","XL"]
        }, 
        {
            id: uuidv4(),
            name: "Manchester United",
            price: 90,
            recto: ManchesterUnited,
            verso: ManchesterUnitedVerso,
            sizes: ["S","M","L","XL"]
        },  
    ],
    serieA: [
        {
            id: uuidv4(),
            name: "Inter de Milan",
            price: 90,
            recto: InterMilan,
            verso: InterMilanVerso,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Juventus",
            price: 90,
            recto: Juventus,
            verso: JuventusVerso,
            sizes: ["S","M","L","XL"]
        },   
    ],
    liga: [
        {
            id: uuidv4(),
            name: "Real Madrid",
            price: 90,
            recto: Madrid,
            verso: MadridVerso,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "FC Barcelone",
            price: 90,
            recto: Barcelone,
            verso: BarceloneVerso,
            sizes: ["S","M","L","XL"]
        },   
    ],
    bundesliga: [
        {
            id: uuidv4(),
            name: "Bayern de Munich",
            price: 90,
            recto: Bayern,
            verso: BayernVerso,
            sizes: ["S","M","L","XL"]
        },
    ],
    
    others: [
        {
            id: uuidv4(),
            name: "Ajax Amsterdam",
            price: 90,
            recto: Ajax,
            verso: AjaxVerso,
            sizes: ["S","M","L","XL"]
        },
    ],
    europe: [
        {
            id: uuidv4(),
            name: "Cameroun",
            price: 90,
            recto: Cameroun,
            verso: CamerounVerso,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Côte d'Ivoire",
            price: 90,
            recto: CoteIvoire,
            verso: CoteIvoireVerso,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Espagne",
            price: 90,
            recto: Espagne,
            verso: EspagneVerso,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "France (Domicile)",
            price: 90,
            recto: France,
            verso: FranceVerso,
            sizes: ["S","M","L","XL"]
            },
        {
            id: uuidv4(),
            name: "France (Extérieur)",
            price: 90,
            recto: FranceExterieur,
            verso: FranceExterieurVerso,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Sénégal",
            price: 90,
            recto: Senegal,
            verso: SenegalVerso,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Algérie",
            price: 90,
            recto: Algerie,
            verso: AlgerieVerso,
            sizes: ["S","M","L","XL"]
        }, 
        {
            id: uuidv4(),
            name: "Maroc",
            price: 90,
            recto: Maroc,
            verso: MarocVerso,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Tunisie",
            price: 90,
            recto: Tunisie,
            verso: TunisieVerso,
            sizes: ["S","M","L","XL"]
        },
    ],
    europe: [
        {
            id: uuidv4(),
            name: "Espagne",
            price: 90,
            recto: Espagne,
            verso: EspagneVerso,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "France (Domicile)",
            price: 90,
            recto: France,
            verso: FranceVerso,
            sizes: ["S","M","L","XL"]
            },
        {
            id: uuidv4(),
            name: "France (Extérieur)",
            price: 90,
            recto: FranceExterieur,
            verso: FranceExterieurVerso,
            sizes: ["S","M","L","XL"]
        },
    ],
    afrique: [
        {
            id: uuidv4(),
            name: "Algérie",
            price: 90,
            recto: Algerie,
            verso: AlgerieVerso,
            sizes: ["S","M","L","XL"]
        }, 
        {
            id: uuidv4(),
            name: "Cameroun",
            price: 90,
            recto: Cameroun,
            verso: CamerounVerso,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Côte d'Ivoire",
            price: 90,
            recto: CoteIvoire,
            verso: CoteIvoireVerso,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Maroc",
            price: 90,
            recto: Maroc,
            verso: MarocVerso,
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            name: "Sénégal",
            price: 90,
            recto: Senegal,
            verso: SenegalVerso,
            sizes: ["S","M","L","XL"]
        },       
        {
            id: uuidv4(),
            name: "Tunisie",
            price: 90,
            recto: Tunisie,
            verso: TunisieVerso,
            sizes: ["S","M","L","XL"]
        },
    ],
}
