import White from '@/assets/whitesocket.jpg'
import Grey from '@/assets/greysocket.jpg'
import Black from '@/assets/socketblack.jpg'
import IceBlue from '@/assets/icebluesocket.jpg'
import Yellow from '@/assets/greenyellowsocket.jpg'
import Green from '@/assets/greensocket.jpg'
import Purple from '@/assets/purplesocket2.jpg'
import Orange from '@/assets/orangesocket.jpg'
import { v4 as uuidv4 } from 'uuid';

export const data = [
    {
        socket: [
            {
                id: uuidv4(),
                name: "Chaussettes de Football blanches 39/45",
                price: 6,
                recto: White,      
            },
            {
                id: uuidv4(),
                name: "Chaussettes de Football grises 39/45",
                price: 6,
                recto: Grey,     
            },
            {
                id: uuidv4(),
                name: "Chaussettes de Football noires 39/45",
                price: 6,
                recto: Black,     
            },
            {
                id: uuidv4(),
                name: "Chaussettes de Football bleues claires 39/45",
                price: 6,
                recto: IceBlue,      
            },
            {
                id: uuidv4(),
                name: "Chaussettes de Football vertes claires 39/45",
                price: 6,
                recto: Yellow,     
            },
            {
                id: uuidv4(),
                name: "Chaussettes de Football vertes 39/45",
                price: 6,
                recto: Green,     
            },
            {
                id: uuidv4(),
                name: "Chaussettes de Football violettes 39/45",
                price: 6,
                recto: Purple,     
            },
            {
                id: uuidv4(),
                name: "Chaussettes de Football oranges 39/45",
                price: 6,
                recto: Orange,     
            },
           ]
    }
]