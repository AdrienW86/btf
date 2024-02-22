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
            anchor: "lyon",
            name: "Olympique de Lyon",
            price: 90,
            recto: Lyon,
            verso: LyonVerso,
            description: "Maillot officiel pour homme de l'équipe de l'Olympique de Lyon.",
            sizes: ["S","M","L","XL"]
        },  
        {
            id: uuidv4(),
            anchor: "paris",
            name: "Paris Saint-Germain",
            price: 90,
            recto: Paris,
            verso: ParisVerso,
            description: "Maillot officiel pour homme de l'équipe du Paris-Saint-Germain.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "marseille",
            name: "Olympique de Marseille",
            price: 90,
            recto: Marseille,
            verso: MarseilleVerso,
            description: "Maillot officiel pour homme de l'équipe de l'Olympique de Marseille.",
            sizes: ["S","M","L","XL"]
        },          
    ],
    premierLeague: [
        {
            id: uuidv4(),
            anchor: "arsenal",
            name: "Arsenal",
            price: 90,
            recto: Arsenal,
            verso: ArsenalVerso,
            description: "Maillot officiel pour homme de l'équipe d'Arsenal.",
            sizes: ["S","M","L","XL"]
        },   
        {
            id: uuidv4(),
            anchor: "manchester-city",
            name: "Manchester City",
            price: 90,
            recto: ManchesterCity,
            verso: ManchesterCityVerso,
            description: "Maillot officiel pour homme de l'équipe de Manchester City.",
            sizes: ["S","M","L","XL"]
        }, 
        {
            id: uuidv4(),
            anchor: "manchester-united",
            name: "Manchester United",
            price: 90,
            recto: ManchesterUnited,
            verso: ManchesterUnitedVerso,
            description: "Maillot officiel pour homme de l'équipe de Manchester United.",
            sizes: ["S","M","L","XL"]
        },  
    ],
    serieA: [
        {
            id: uuidv4(),
            anchor: "inter",
            name: "Inter de Milan",
            price: 90,
            recto: InterMilan,
            verso: InterMilanVerso,
            description: "Maillot officiel pour homme de l'équipe de l'Inter de Milan.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "juventus",
            name: "Juventus",
            price: 90,
            recto: Juventus,
            verso: JuventusVerso,
            description: "Maillot officiel pour homme de l'équipe de la Juventus de Turin.",
            sizes: ["S","M","L","XL"]
        },   
    ],
    liga: [
        {
            id: uuidv4(),
            anchor: "real",
            name: "Real Madrid",
            price: 90,
            recto: Madrid,
            verso: MadridVerso,
            description: "Maillot officiel pour homme de l'équipe du Real de Madrid.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "barcelone",
            name: "FC Barcelone",
            price: 90,
            recto: Barcelone,
            verso: BarceloneVerso,
            description: "Maillot officiel pour homme de l'équipe du FC de Barcelone.",
            sizes: ["S","M","L","XL"]
        },   
    ],
    bundesliga: [
        {
            id: uuidv4(),
            anchor: "bayern",
            name: "Bayern de Munich",
            price: 90,
            recto: Bayern,
            verso: BayernVerso,
            description: "Maillot officiel pour homme de l'équipe du Bayern de Munich.",
            sizes: ["S","M","L","XL"]
        },
    ],   
    others: [
        {
            id: uuidv4(),
            anchor: "amsterdam",
            name: "Ajax Amsterdam",
            price: 90,
            recto: Ajax,
            verso: AjaxVerso,
            description: "Maillot officiel pour homme de l'équipe de l'Ajax d'Amsterdam.",
            sizes: ["S","M","L","XL"]
        },
    ],
    europe: [
        {
            id: uuidv4(),
            anchor: "espagne",
            name: "Espagne",
            price: 90,
            recto: Espagne,
            verso: EspagneVerso,
            description: "Maillot officiel pour homme de l'équipe national d'Espagne.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "france",
            name: "France (Domicile)",
            price: 90,
            recto: France,
            verso: FranceVerso,
            description: "Maillot officiel pour homme de l'équipe national de France.",
            sizes: ["S","M","L","XL"]
            },
        {
            id: uuidv4(),
            anchor: "france-exterieur",
            name: "France (Extérieur)",
            price: 90,
            recto: FranceExterieur,
            verso: FranceExterieurVerso,
            description: "Maillot officiel pour homme de l'équipe national de France.",
            sizes: ["S","M","L","XL"]
        },
    ],
    afrique: [
        {
            id: uuidv4(),
            anchor: "cameroun",
            name: "Cameroun",
            price: 90,
            recto: Cameroun,
            verso: CamerounVerso,
            description: "Maillot officiel pour homme de l'équipe national du Cameroun.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "ivoire",
            name: "Côte d'Ivoire",
            price: 90,
            recto: CoteIvoire,
            verso: CoteIvoireVerso,
            description: "Maillot officiel pour homme de l'équipe national de la Côte d'Ivoire.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "senegal",
            name: "Sénégal",
            price: 90,
            recto: Senegal,
            verso: SenegalVerso,
            description: "Maillot officiel pour homme de l'équipe national du Sénégal.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "algerie",
            name: "Algérie",
            price: 90,
            recto: Algerie,
            verso: AlgerieVerso,
            description: "Maillot officiel pour homme de l'équipe national de l'Algérie.",
            sizes: ["S","M","L","XL"]
        }, 
        {
            id: uuidv4(),
            anchor: "maroc",
            name: "Maroc",
            price: 90,
            recto: Maroc,
            verso: MarocVerso,
            description: "Maillot officiel pour homme de l'équipe national du Maroc.",
            sizes: ["S","M","L","XL"]
        },
        {
            id: uuidv4(),
            anchor: "tunisie",
            name: "Tunisie",
            price: 90,
            recto: Tunisie,
            verso: TunisieVerso,
            description: "Maillot officiel pour homme de l'équipe national de la Tunisie.",
            sizes: ["S","M","L","XL"]
        },
    ],
}
