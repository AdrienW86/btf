import Tiger from '@/assets/tiger-red.webp'
import Tiger2 from '@/assets/tiger-red2.webp'
import Tiger3 from '@/assets/tiger-white.jpg'
import Tiger4 from '@/assets/tiger-white2.jpg'
import Socket from '@/assets/whitesocket.jpg'
import Socket2 from '@/assets/greysocket.jpg'
import Socket3 from '@/assets/socketblack.jpg'
import Socket4 from '@/assets/icebluesocket.jpg'
import Socket5 from '@/assets/greenyellowsocket.jpg'
import Socket6 from '@/assets/greensocket.jpg'
import Socket7 from '@/assets/purplesocket2.jpg'
import Socket8 from '@/assets/orangesocket.jpg'

import Paris from '@/assets/maillots_hommes/psg.png'
import ParisVerso from '@/assets/maillots_hommes/psg-verso.png'

import Marseille from '@/assets/maillots_hommes/marseille.png'
import MarseilleVerso from '@/assets/maillots_hommes/marseille-verso.png'

import Madrid from '@/assets/maillots_hommes/madrid.png'
import MadridVerso from '@/assets/maillots_hommes/madrid-verso.png'

import Barcelone from '@/assets/maillots_hommes/barcelone.png'
import BarceloneVerso from '@/assets/maillots_hommes/barcelone-verso.png'

import ManchesterUnited from '@/assets/maillots_hommes/manchester-united.png'
import ManchesterUnitedVerso from '@/assets/maillots_hommes/manchester-united-verso.png'

import ManchesterCity from '@/assets/maillots_hommes/manchester-city.png'
import ManchesterCityVerso from '@/assets/maillots_hommes/manchester-city-verso.png'

import Ajax from '@/assets/maillots_hommes/ajax.png'
import AjaxVerso from '@/assets/maillots_hommes/ajax-verso.png'

import Algerie from '@/assets/maillots_hommes/algerie.png'
import AlgerieVerso from '@/assets/maillots_hommes/algerie-verso.png'

import Arsenal from '@/assets/maillots_hommes/arsenal.png'
import ArsenalVerso from '@/assets/maillots_hommes/arsenal-verso.png'

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

import Senegal from '@/assets/maillots_hommes/senegal.png'
import SenegalVerso from '@/assets/maillots_hommes/senegal-verso.png'

import Maroc from '@/assets/maillots_hommes/maroc.png'
import MarocVerso from '@/assets/maillots_hommes/maroc-verso.png'

import Tunisie from '@/assets/maillots_hommes/tunisie.png'
import TunisieVerso from '@/assets/maillots_hommes/tunisie-verso.png'

//import Mahiedine from '@/assets/packReal.png'
import Coffret from '@/assets/box.png'
//import Pack from '@/assets/pack-baumes.png'
//import Pack1 from '@/assets/11.png'
//import Pack2 from '@/assets/packChaussettes.png'
//import Pack3 from '@/assets/packMarseille.png'
//import Pack4 from '@/assets/packBarcelone.png'
//import Pack5 from '@/assets/packPsg.png'
//import Pack6 from '@/assets/packManchester.png'
//import Pack7 from '@/assets/9.png'
//import Pack8 from '@/assets/10.png'
import { v4 as uuidv4 } from 'uuid';

export const data = {
    // vip: [
    //     {
    //         id: uuidv4(),
    //         name: "Coffret Real Madrid",
    //         price: 130,
    //         recto: Coffret,
    //         verso: Pack1,
    //         sizes: ["S","M","L","XL"],
    //         description: "Le pack Real contient un maillot officiel du Real Madrid, 5 paires de chaussettes de couleurs différentes et aléatoires ainsi qu'un baume du tigre blanc et rouge."
    //     },
    //     {
    //         id: uuidv4(),
    //         name: "Coffret Ajax Amsterdam",
    //         price: 130,
    //         recto: Coffret,
    //         verso: Pack8,
    //         sizes: ["S","M","L","XL"],
    //         description: "Le pack Ajax Amsterdam contient un maillot officiel de l'Ajax Amsterdam, 5 paires de chaussettes de couleurs différentes et aléatoires ainsi qu'un baume du tigre blanc et rouge."
    //     },
    //     {
    //         id: uuidv4(),
    //         name: "Coffret Manchester City",
    //         price: 130,
    //         recto: Coffret,
    //         verso: Pack7,
    //         sizes: ["S","M","L","XL"],
    //         description: "Le pack Manchester City contient un maillot officiel de Manchester City, 5 paires de chaussettes de couleurs différentes et aléatoires ainsi qu'un baume du tigre blanc et rouge."
    //     },
    // ],
    // coffrets: [
    //     {
    //         id: uuidv4(),
    //         name: "Coffret FC Barcelone",
    //         price: 130,
    //         recto: Coffret,
    //         verso: Pack4,
    //         sizes: ["S","M","L","XL"],
    //         description: "Le pack Barcelone contient un maillot officiel du FC Barcelone, 5 paires de chaussettes de couleurs différentes et aléatoires ainsi qu'un baume du tigre blanc et rouge."
    //     },
    //     {
    //         id: uuidv4(),
    //         name: "Coffret PSG",
    //         price: 130,
    //         recto: Coffret,
    //         verso: Pack5,
    //         sizes: ["S","M","L","XL"],
    //         description: "Le pack PSG contient un maillot officiel du PSG, 5 paires de chaussettes de couleurs différentes et aléatoires ainsi qu'un baume du tigre blanc et rouge."
    //     },
    //     {
    //         id: uuidv4(),
    //         name: "Coffret Marseille",
    //         price: 130,
    //         recto: Coffret,
    //         verso: Pack3,
    //         sizes: ["S","M","L","XL"],
    //         description: "Le pack Marseille contient un maillot officiel de l'Olympique de Marseille, 5 paires de chaussettes de couleurs différentes et aléatoires ainsi qu'un baume du tigre blanc et rouge."
    //     },
    //     {
    //         id: uuidv4(),
    //         name: "Coffret Manchester United",
    //         price: 130,
    //         recto: Coffret,
    //         verso: Pack6,
    //         sizes: ["S","M","L","XL"],
    //         description: "Le pack Manchester United contient un maillot officiel de Manchester United, 5 paires de chaussettes de couleurs différentes et aléatoires ainsi qu'un baume du tigre blanc et rouge."
    //     },
    // ],
    // packs: [
    //     {
    //         id: uuidv4(),
    //         name: "Pack Baumes (lot de 6)",
    //         price: 30,
    //         recto: Pack,   
    //         description: "Le pack comprend 6 baumes du tigre, 3 baumes rouge et 3 baumes blanc de chacun 19,4g."
    //     },
    //     {
    //         id: uuidv4(),
    //         name: "Pack Chaussettes (lot de 5)",
    //         price: 25,
    //         recto: Pack2,
    //         description: "Le pack comprend 5 paires de chaussettes de couleurs différentes et aléatoires."       
    //     },
    // ],
    maillots: [
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
            name: "Sénégal",
            price: 90,
            recto: Senegal,
            verso: SenegalVerso,
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
        {
            id: uuidv4(),
            name: "Ajax Amsterdam",
            price: 90,
            recto: Ajax,
            verso: AjaxVerso,
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
   juniors: [
    {
        id: uuidv4(),
        name: "Paris Saint-Germain (Junior)",
        price: 70,
        recto: Paris,
        verso: ParisVerso,
        sizes: ["7/8","9/10","11/12","13/14"]
    },
    {
        id: uuidv4(),
        name: "Marseille (Junior)",
        price: 70,
        recto: Marseille,
        verso: MarseilleVerso,
        sizes: ["7/8","9/10","11/12","13/14"]
    },
    {
        id: uuidv4(),
        name: "Madrid (Junior)",
        price: 70,
        recto: Madrid,
        verso: MadridVerso,
        sizes: ["7/8","9/10","11/12","13/14"]
    },
    {
        id: uuidv4(),
        name: "Barcelone (Junior) ",
        price: 70,
        recto: Barcelone,
        verso: BarceloneVerso,
        sizes: ["7/8","9/10","11/12","13/14"]
    },   
    {
        id: uuidv4(),
        name: "Manchester City (Junior)",
        price: 70,
        recto: ManchesterCity,
        verso: ManchesterCityVerso,
        sizes: ["7/8","9/10","11/12","13/14"]
    }, 
    {
        id: uuidv4(),
        name: "Manchester United (Junior)",
        price: 70,
        recto: ManchesterUnited,
        verso: ManchesterUnitedVerso,
        sizes: ["7/8","9/10","11/12","13/14"]
    }, 
    {
        id: uuidv4(),
        name: "Ajax Amsterdam (Junior)",
        price: 70,
        recto: Ajax,
        verso: AjaxVerso,
        sizes: ["7/8","9/10","11/12","13/14"]
    },
    {
        id: uuidv4(),
        name: "Algérie (Junior)",
        price: 70,
        recto: Algerie,
        verso: AlgerieVerso,
        sizes: ["7/8","9/10","11/12","13/14"]
    }, 
    {
        id: uuidv4(),
        name: "Maroc (Junior)",
        price: 70,
        recto: Maroc,
        verso: MarocVerso,
        sizes: ["7/8","9/10","11/12","13/14"]
    },
    {
        id: uuidv4(),
        name: "Tunisie (Junior)",
        price: 70,
        recto: Tunisie,
        verso: TunisieVerso,
        sizes: ["7/8","9/10","11/12","13/14"]
    },
],
   baumes: [
    {
        id: uuidv4(),
        name: "Baume du Tigre rouge (19g)",
        price: 6,
        recto: Tiger,
        verso: Tiger2,
        description: "Le Baume du Tigre rouge ou blanc est un remède traditionnel de la médecine chinoise, composé à partir de différentes plantes et utilisé pour soulager les muscles et les articulations, les piqûres et démangeaisons, ou autre."
    },
    {
        id: uuidv4(),
        name: "Baume du Tigre blanc (19g)",
        price: 6,
        recto: Tiger3,
        verso: Tiger4,
        description: "Le Baume du Tigre rouge ou blanc est un remède traditionnel de la médecine chinoise, composé à partir de différentes plantes et utilisé pour soulager les muscles et les articulations, les piqûres et démangeaisons, ou autre."
    },
   ],
   socket: [
    {
        id: uuidv4(),
        name: "Chaussettes de Football blanches 39/45",
        price: 6,
        recto: Socket,      
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football grises 39/45",
        price: 6,
        recto: Socket2,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football noires 39/45",
        price: 6,
        recto: Socket3,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football bleues claires 39/45",
        price: 6,
        recto: Socket4,      
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football vertes claires 39/45",
        price: 6,
        recto: Socket5,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football vertes 39/45",
        price: 6,
        recto: Socket6,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football violettes 39/45",
        price: 6,
        recto: Socket7,     
    },
    {
        id: uuidv4(),
        name: "Chaussettes de Football oranges 39/45",
        price: 6,
        recto: Socket8,     
    },
   ]
}