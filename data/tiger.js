import { v4 as uuidv4 } from 'uuid';

export const data = 
    {
        tiger: [
            {
                id: uuidv4(),
                name: "Baumes du tigre rouge 19g",
                price: 6,
                recto: '/tiger/tiger-red.webp',  
                verso: '/tiger/tiger-red2.webp', 
            },
            {
                id: uuidv4(),
                name: "Baumes du tigre blanc 19g",
                price: 6,
                recto: '/tiger/tiger-white.jpg', 
                verso: '/tiger/tiger-white2.jpg',     
            },
            {
                id: uuidv4(),
                name: "Baumes du tigre rouge 30g",
                price: 9,
                recto: '/tiger/tiger-red.webp',
                verso: '/tiger/tiger-red2.webp',
            },
            {
                id: uuidv4(),
                name: "Baumes du tigre blanc 30g",
                price: 9,
                recto: '/tiger/tiger-white.jpg', 
                verso: '/tiger/tiger-white2.jpg',       
            },
        ],
    }