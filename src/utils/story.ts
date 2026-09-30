import { STORY_NODES } from '../data/stories';
import { StoryNode } from '../types/story';

export const getStoryNodeById = (id: number): StoryNode => {
  const node = STORY_NODES.find((item) => item.id === id);
  if (!node) {
    return STORY_NODES[0];
  }
  return node;
};

export const getEndingColor = (type?: string): string => {
  switch (type) {
    case 'victory':
      return '#F59E0B'; // Amber / Gold
    case 'mystery':
      return '#8B5CF6'; // Violet / Purple
    case 'haven':
      return '#10B981'; // Emerald Green
    case 'escape':
      return '#06B6D4'; // Cyan
    default:
      return '#38BDF8'; // Sky Blue
  }
};

export const getEndingLabel = (type?: string): string => {
  switch (type) {
    case 'victory':
      return '★ VICTORY ENDING ★';
    case 'mystery':
      return '✦ MYSTERY ENDING ✦';
    case 'haven':
      return '♥ HAVEN ENDING ♥';
    case 'escape':
      return '⚓ ESCAPE ENDING ⚓';
    default:
      return 'THE END';
  }
};
