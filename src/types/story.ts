export interface StoryChoice {
  text: string;
  nextId: number;
}

export interface StoryNode {
  id: number;
  title: string;
  text: string;
  choice1?: StoryChoice;
  choice2?: StoryChoice;
  isEnding?: boolean;
  endingType?: 'victory' | 'mystery' | 'haven' | 'escape';
}
