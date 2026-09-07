import sunIcon from '../assets/cardIcons/sun.svg';
import moonIcon from '../assets/cardIcons/moon.svg';
import starIcon from '../assets/cardIcons/star.svg';
import heartIcon from '../assets/cardIcons/heart.svg';
import treeIcon from '../assets/cardIcons/tree.svg';
import flowerIcon from '../assets/cardIcons/flower.svg';
import butterflyIcon from '../assets/cardIcons/butterfly.svg';
import catIcon from '../assets/cardIcons/cat.svg';
import dogIcon from '../assets/cardIcons/dog.svg';
import fishIcon from '../assets/cardIcons/fish.svg';
import carIcon from '../assets/cardIcons/car.svg';
import planeIcon from '../assets/cardIcons/plane.svg';
import boatIcon from '../assets/cardIcons/boat.svg';
import houseIcon from '../assets/cardIcons/house.svg';
import keyIcon from '../assets/cardIcons/key.svg';
import lockIcon from '../assets/cardIcons/lock.svg';
import musicIcon from '../assets/cardIcons/music.svg';
import globeIcon from '../assets/cardIcons/globe.svg';

export type CardData = {
  id: number;
  name: string;
  icon: string;
};

export const easyDeck: CardData[] = [
  { id: 1, name: "Sun", icon: sunIcon },
  { id: 2, name: "Moon", icon: moonIcon },
  { id: 3, name: "Star", icon: starIcon },
  { id: 4, name: "Heart", icon: heartIcon },
  { id: 5, name: "Tree", icon: treeIcon },
  { id: 6, name: "Flower", icon: flowerIcon },
  { id: 7, name: "Butterfly", icon: butterflyIcon },
  { id: 8, name: "Cat", icon: catIcon },
  { id: 9, name: "Dog", icon: dogIcon }
];

export const mediumDeck: CardData[] = [
  { id: 10, name: "Fish", icon: fishIcon },
  { id: 11, name: "Car", icon: carIcon },
  { id: 12, name: "Plane", icon: planeIcon }
];

export const hardDeck: CardData[] = [
  { id: 13, name: "Boat", icon: boatIcon },
  { id: 14, name: "House", icon: houseIcon },
  { id: 15, name: "Key", icon: keyIcon },
  { id: 16, name: "Lock", icon: lockIcon },
  { id: 17, name: "Music Note", icon: musicIcon },
  { id: 18, name: "Globe", icon: globeIcon }
];
