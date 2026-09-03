export type CardData = {
  id: number;
  name: string;
  icon: string;
};

export const easyDeck: CardData[] = [
  { id: 1, name: "Sun", icon: "1" },
  { id: 2, name: "Moon", icon: "2" },
  { id: 3, name: "Star", icon: "3" },
  { id: 4, name: "Heart", icon: "4" },
  { id: 5, name: "Tree", icon: "5" },
  { id: 6, name: "Flower", icon: "6" },
  { id: 7, name: "Butterfly", icon: "7" },
  { id: 8, name: "Cat", icon: "8" },
  { id: 9, name: "Dog", icon: "9" }
];

export const mediumDeck: CardData[] = [
  { id: 10, name: "Fish", icon: "10" },
  { id: 11, name: "Car", icon: "11" },
  { id: 12, name: "Plane", icon: "12" }
];

export const hardDeck: CardData[] = [
  { id: 13, name: "Boat", icon: "13" },
  { id: 14, name: "House", icon: "14" },
  { id: 15, name: "Key", icon: "15" },
  { id: 16, name: "Lock", icon: "16" },
  { id: 17, name: "Music Note", icon: "17" },
  { id: 18, name: "Globe", icon: "18" }
];
