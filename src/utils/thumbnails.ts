// Thumbnail interface
export interface Thumbnail {
  url: string;
  title: string;
}

// Define working thumbnails with verified paths
const VERIFIED_THUMBNAILS: Thumbnail[] = [
  {
    url: '/images/uploads 2/genesis.jpg',
    title: 'Genesis'
  },
  {
    url: '/images/uploads 2/genesis 2.jpg',
    title: 'Genesis 2'
  },
  {
    url: '/images/uploads 2/notluc 1.jpg',
    title: 'NotLuc 1'
  },
  {
    url: '/images/uploads 2/notluc 2.jpg',
    title: 'NotLuc 2'
  },
  {
    url: '/images/uploads 2/sketch 1.jpg',
    title: 'Sketch 1'
  },
  {
    url: '/images/uploads 2/sketch 2.jpg',
    title: 'Sketch 2'
  },
  {
    url: '/images/uploads 2/sketch 4.jpg',
    title: 'Sketch 4'
  },
  {
    url: '/images/uploads 2/sketch 5.jpg',
    title: 'Sketch 5'
  },
  {
    url: '/images/uploads 2/sktech 3.jpg',
    title: 'Sketch 3'
  },
  {
    url: '/images/uploads 2/sktech 6.jpg',
    title: 'Sketch 6'
  },
  {
    url: '/images/uploads 2/rakai 1.jpg',
    title: 'Rakai 1'
  },
  {
    url: '/images/uploads 2/rakai 2.jpg',
    title: 'Rakai 2'
  },
  {
    url: '/images/uploads 2/rakai.jpg',
    title: 'Rakai'
  },
  {
    url: '/images/uploads 2/lls 1.jpg',
    title: 'LLS 1'
  },
  {
    url: '/images/uploads 2/lls2.jpg',
    title: 'LLS 2'
  },
  {
    url: '/images/uploads 2/ForthavenRP.jpg',
    title: 'Forthaven RP'
  },
  {
    url: '/images/uploads 2/Only Up (1).jpg',
    title: 'Only Up'
  },
  {
    url: '/images/uploads 2/maxresdefault.jpg',
    title: 'Max Resolution'
  },
  {
    url: '/images/uploads 2/laws_of_power.png',
    title: 'Laws of Power'
  },
  {
    url: '/images/uploads 2/Halloween-Deathrun.jpg',
    title: 'Halloween Deathrun'
  },
  {
    url: '/images/uploads 2/supermarket-prop-hunt.jpg',
    title: 'Supermarket Prop Hunt'
  },
  {
    url: '/images/uploads 2/arm-wrestle-tycoon-2.png',
    title: 'Arm Wrestle Tycoon 2'
  },
  {
    url: '/images/uploads 2/zombie-survival (1).jpg',
    title: 'Zombie Survival'
  },
  {
    url: '/images/uploads 2/OG-Mini-2 (1).jpg',
    title: 'OG Mini 2'
  },
  {
    url: '/images/uploads 2/heros.jpg',
    title: 'Heroes'
  }
];

// Enhanced shuffle with duplicate prevention
function shuffleWithSpacing<T>(array: T[]): T[] {
  const result: T[] = [];
  const available = [...array];
  let lastItem: T | null = null;

  while (available.length > 0) {
    // Filter out the last used item to prevent duplicates
    const validChoices = available.filter(item => item !== lastItem);
    
    // If no valid choices (only duplicate left), use any remaining item
    const choices = validChoices.length > 0 ? validChoices : available;
    
    // Get random index from valid choices
    const randomIndex = Math.floor(Math.random() * choices.length);
    const selectedItem = choices[randomIndex];
    
    // Add selected item to result
    result.push(selectedItem);
    lastItem = selectedItem;
    
    // Remove selected item from available pool
    const availableIndex = available.indexOf(selectedItem);
    available.splice(availableIndex, 1);
  }

  return result;
}

// Get thumbnails for a row with improved distribution
export function getThumbnailsForRow(count: number): Thumbnail[] {
  // Create a larger pool of shuffled thumbnails
  const shuffled = shuffleWithSpacing(VERIFIED_THUMBNAILS);
  
  // Take required number of thumbnails
  const selectedThumbnails = shuffled.slice(0, count);
  
  // If we need more thumbnails than available, add more with spacing
  if (count > selectedThumbnails.length) {
    const additionalNeeded = count - selectedThumbnails.length;
    const additionalThumbnails = shuffleWithSpacing(VERIFIED_THUMBNAILS)
      .slice(0, additionalNeeded);
    
    return [...selectedThumbnails, ...additionalThumbnails];
  }
  
  return selectedThumbnails;
}