import { Award } from "../models/award";
import { Drink } from "../models/drink";

export const wines: Drink[] = [
  {
    title: 'Chapel Hill Shiraz',
    price: 56,
    tags: ['AU', 'Bottle'],
  },
  {
    title: 'Catena Malbee',
    price: 59,
    tags: ['AU', ' Bottle'],
  },
  {
    title: 'La Vieillw Rose',
    price: 44,
    tags: ['FR', '750 ml'],
  },
  {
    title: 'Rhino Pale Ale',
    price: 31,
    tags: ['CA', '750 ml'],
  },
  {
    title: 'Irish Guinness',
    price: 26,
    tags: ['IE', '750 ml'],
  },
];

export const cocktails: Drink[] = [
  {
    title: 'Aperol Sprtiz',
    price: 20,
    tags: ['Aperol', 'Villa Marchesi prosecco', 'soda', '30 ml'],
  },
  {
    title: "Dark 'N' Stormy",
    price: 16,
    tags: ['Dark rum', ' Ginger beer', 'Slice of lime'],
  },
  {
    title: 'Daiquiri',
    price: 10,
    tags: ['Rum', 'Citrus juice', 'Sugar'],
  },
  {
    title: 'Old Fashioned',
    price: 31,
    tags: ['Bourbon', ' Brown sugar', 'Angostura Bitters'],
  },
  {
    title: 'Negroni',
    price: 26,
    tags: ['Gin', 'Sweet Vermouth', 'Campari', 'Orange garnish'],
  },
];

export const awards: Award[] = [
  {
    imgUrl: 'assets/award02.png',
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: 'assets/award01.png',
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: 'assets/award05.png',
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: 'assets/award03.png',
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export const galleryImages = [
  'assets/gallery01.png',
  'assets/gallery02.png',
  'assets/gallery03.png',
  'assets/gallery04.png',
  'assets/gallery01.png',
  'assets/gallery02.png',
  'assets/gallery03.png',
  'assets/gallery04.png',
];