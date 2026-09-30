import { StoryNode } from '../types/story';

export const STORY_NODES: readonly StoryNode[] = [
  {
    id: 1,
    title: 'The Foggy Crossroads',
    text: 'You wake up on a misty mountain ridge as twilight deepens. To your left, an ancient stone staircase ascends toward crumbling ruins high above. To your right, a narrow lantern-lit path descends into a quiet valley where a wooden cabin glows.',
    choice1: {
      text: 'Climb the stone staircase toward the ruins',
      nextId: 2,
    },
    choice2: {
      text: 'Descend the lantern trail toward the cabin',
      nextId: 3,
    },
    isEnding: false,
  },
  {
    id: 2,
    title: 'The Ancient Temple',
    text: 'You arrive at a grand temple courtyard overgrown with silver ivy. Inside, two mysterious doorways stand open: one bathed in warm golden daylight, and another vibrating with an ethereal blue crystalline hum.',
    choice1: {
      text: 'Step through the golden sunlit archway',
      nextId: 4,
    },
    choice2: {
      text: 'Touch the glowing blue crystal archway',
      nextId: 5,
    },
    isEnding: false,
  },
  {
    id: 3,
    title: 'The Whispering Pines',
    text: 'You reach the clearing near the wooden cabin. Through the frosted window, you see a crackling fireplace and hot tea on the table. Behind the cabin, a wooden dock holds a sturdy canoe ready to drift down a calm moonlit river.',
    choice1: {
      text: 'Knock gently on the cabin door',
      nextId: 6,
    },
    choice2: {
      text: 'Untie the canoe and row down the river',
      nextId: 7,
    },
    isEnding: false,
  },
  {
    id: 4,
    title: 'The Golden Sanctuary',
    text: 'The sunlit archway opens to a lush mountain garden overlooking a vibrant city below. An ancient guardian smiles and presents you with the Sunstone Amulet. You have unlocked peace and legendary wisdom.',
    isEnding: true,
    endingType: 'victory',
  },
  {
    id: 5,
    title: 'The Cosmic Gateway',
    text: 'As your fingers touch the crystal, gravity floats away. A swirl of aurora light envelopes you, transporting you to an astral observatory overlooking infinite galaxies. A new cosmic voyage begins.',
    isEnding: true,
    endingType: 'mystery',
  },
  {
    id: 6,
    title: 'The Ranger’s Haven',
    text: 'A friendly mountain warden opens the door, welcoming you warmly inside by the hearth. Over warm broth and safety, they hand you a map and radio your family. You are completely safe and warm.',
    isEnding: true,
    endingType: 'haven',
  },
  {
    id: 7,
    title: 'River to Freedom',
    text: 'The gentle river current carries your canoe smoothly through peaceful canyons beneath starlit skies. By dawn, you glide into a tranquil coastal village. You navigated the wilderness all on your own!',
    isEnding: true,
    endingType: 'escape',
  },
] as const;

export const INITIAL_STORY_ID = 1;
