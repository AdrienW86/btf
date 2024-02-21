import Pink from '@/assets/survet_hommes/survet-bf-rose.png'
import Black from '@/assets/survet_hommes/survet-bf-noir2.png'
import Kaki from '@/assets/survet_hommes/survet-bf-kaki2.png'
import Beige from '@/assets/survet_hommes/survet-beige.png'
import Blue from '@/assets/survet_hommes/survet-blue.png'
import BlueVerso from '@/assets/survet_hommes/survet-blue-verso.png'
import Purple from '@/assets/survet_hommes/survet-violet.png'
import Red from '@/assets/survet_hommes/survet-red2.png'
import Velours from '@/assets/survet_hommes/velours.png'

import Blue2 from '@/assets/survet_femmes/blue2.png'
import Sexy from '@/assets/survet_femmes/survet-sexy.png'
import Polaire from '@/assets/survet_femmes/survet-polaire.png'
import Brown from '@/assets/survet_femmes/survet-brown.png'
import Ensemble from '@/assets/survet_femmes/ensemble1.png'
import Orange from '@/assets/survet_femmes/survet-bf-orange.png'

import { v4 as uuidv4 } from 'uuid';

export const data = {
    men: 
    [
        {
            id: uuidv4(),
            name: "Survêtement IceBlue",
            price: 89,
            recto: Blue,
            verso: BlueVerso,
            description: "Ensemble jogging et sweat à capuche respirant à séchage rapide en polyester (90%) et élasthanne (10%).",
            sizes: ["S","M","L","XL"]
        },  
        // {
        //     id: uuidv4(),
        //     name: "Survêtement Violet",
        //     price: 82,
        //     recto: Purple,
        //     verso: Purple,
        //     description: "Ensemble jogging et sweat à capuche respirant anti-transpiration en coton (100%).",
        //     sizes: ["S","M","L","XL"]
        // },  
        {
            id: uuidv4(),
            name: "Survêtement RedStar",
            price: 96,
            recto: Red,
            verso: Red,
            description: "Ensemble jogging et sweat à capuche en coton (100%) à coutures brutes avec poches kangourou de la collection Boutique Du Foot.",
            sizes: ["S","M","L","XL"]
        },   
        {
            id: uuidv4(),
            name: "Survêtement Coutures Brutes BF",
            price: 85,
            recto: Kaki,
            verso: Kaki,
            description: "Ensemble jogging et sweat à capuche en coton (100%) à coutures brutes avec poches kangourou de la collection Boutique Du Foot.",
            sizes: ["S","M","L","XL"]
        },   
        {
            id: uuidv4(),
            name: "Survêtement Décontracté BF",
            price: 69,
            recto: Black,
            verso: Black,
            description: "Ensemble jogging et sweat à capuche en coton (35%) et polyester (65%) de la collection Boutique Du Foot.",
            sizes: ["S","M","L","XL"]
        }, 
        {
            id: uuidv4(),
            name: "Survêtement Cream",
            price: 79,
            recto: Beige,
            verso: Beige,
            description: "Ensemble jogging et sweat à capuche respirant à séchage rapide en  polyester coton (100%).",
            sizes: ["S","M","L","XL"]
        },  
        {
            id: uuidv4(),
            name: "Survêtement Velours",
            price: 129,
            recto: Velours,
            verso: Velours,
            description: "Ensemble jogging et sweat à capuche anti-bouloche et respirant en velours de coton uni (100%).",
            sizes: ["S","M","L","XL"]
        },
         
    ],
    women: [
        {
            id: uuidv4(),
            name: "Survêtement Rose BF",
            price: 62,
            recto: Pink,
            verso: Pink,
            description: "Ensemble jogging et sweat à capuche en coton (50%) et polyester (50%) de la collection Boutique du Foot.",
            sizes: ["S","M","L","XL"]
        },  
        {
            id: uuidv4(),
            name: "Survêtement",
            price: 42,
            recto: Orange,
            verso: Orange,
            description: "Ensemble jogging et sweat à capuche en coton (50%) et polyester (50%) de la collection Boutique du Foot.",
            sizes: ["S","M","L","XL"]
        },  
        {
            id: uuidv4(),
            name: "Survêtement",
            price: 69,
            recto: Brown,
            verso: Brown,
            description: "Ensemble jogging et sweat à capuche respirant à séchage rapide, léger, anti-transpirant et extensible dans les quatre sens en spandex / coton.",
            sizes: ["S","M","L","XL"]
        },  
        {
            id: uuidv4(),
            name: "Ensemble rose",
            price: 62,
            recto: Sexy,
            verso: Ensemble,
            description: "Ensemble jogging et sweat à capuche en spandex / polyester de la collection Boutique du Foot.",
            sizes: ["S","M","L","XL"]
        },  
        {
            id: uuidv4(),
            name: "Ensemble",
            price: 62,
            recto: Ensemble,
            verso: Ensemble,
            description: "Ensemble jogging et sweat à capuche en coton (50%) et polyester (50%) de la collection Boutique du Foot.",
            sizes: ["S","M","L","XL"]
        },  
        // {
        //     id: uuidv4(),
        //     name: "Ensemble",
        //     price: 62,
        //     recto: Blue2,
        //     verso: Blue2,
        //     description: "Ensemble jogging et sweat à capuche en coton (50%) et polyester (50%) de la collection Boutique du Foot.",
        //     sizes: ["S","M","L","XL"]
        // }, 
        {
            id: uuidv4(),
            name: "Ensemble",
            price: 62,
            recto: Polaire,
            verso: Polaire,
            description: "Ensemble jogging et sweat à capuche en coton (50%) et polyester (50%) de la collection Boutique du Foot.",
            sizes: ["S","M","L","XL"]
        },  
    ],
    juniors: [

    ]
}