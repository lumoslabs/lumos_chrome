// hijack web requests made by chrome to remove security headers
chrome.webRequest.onHeadersReceived.addListener(info => {
  const headers = info.responseHeaders; // original headers
  for (let i = headers.length - 1; i >= 0; --i) {
    let header = headers[i].name.toLowerCase();
    if (header === "x-frame-options" || header === "frame-options" || header === "content-security-policy") {
      headers.splice(i, 1); // Remove the header
    }
  }
  // return modified headers
  return { responseHeaders: headers };
}, {
    urls: ["<all_urls>"], // match all pages
    types: ["sub_frame"] // for framing only
  }, ["blocking", "responseHeaders"]);

games = [
  'brain-shift-2',
  'brain-shift-overdrive-2',
  'chalkboard-challenge-2',
  'color-match-2',
  'disillusion-2',
  'ebb-and-flow',
  'follow-that-frog',
  'lost-in-migration-2',
  'memory-match-2',
  'memory-match-overdrive',
  'memory-matrix-2',
  'penguin-pursuit-2',
  'pet-detective',
  'pinball-recall',
  'raindrops-2',
  'river-ranger',
  'robot-factory',
  'spatial-speed-match-2',
  'speed-pack',
  'speed-match-2',
  'speed-match-overdrive',
  'splitting-seeds',
  'star-search',
  'train-of-thought',
  'tidal-treasures',
  'trouble-brewing',
  'word-bubbles-2'
];

games2 = [
  {
    slug: 'brain-shift-2',
    name: 'Brain Shift'
  },
  {
    slug: 'brain-shift-overdrive-2',
    name: 'Brain Shift Overdrive'
  },
  {
    slug: 'chalkboard-challenge-2',
    name: 'Chalkboard Challenge'
  },
  {
    slug: 'color-match-2',
    name: 'Color Match'
  },
  {
    slug: 'disillusion-2',
    name: 'Disillusion'
  },
  {
    slug: 'ebb-and-flow',
    name: 'Ebb and Flow'
  },
  {
    slug: 'follow-that-frog',
    name: 'Follow that Frog'
  },
  {
    slug: 'lost-in-migration-2',
    name: 'Lost in Migration'
  },
  {
    slug: 'memory-match-2',
    name: 'Memory Match'
  },
  {
    slug: 'memory-match-overdrive',
    name: 'Memory Match Overdrive'
  },
  {
    slug: 'memory-matrix-2',
    name: 'Memory Matrix'
  },
  {
    slug: 'penguin-pursuit-2',
    name: 'Penguin Pursuit'
  },
  {
    slug: 'pet-detective',
    name: 'Pet Detective'
  },
  {
    slug: 'pinball-recall',
    name: 'Pinball Recall'
  },
  {
    slug: 'raindrops-2',
    name: 'Raindrops'
  },
  {
    slug: 'river-ranger',
    name: 'River Ranger'
  },
  {
    slug: 'robot-factory',
    name: 'Robot Factory'
  },
  {
    slug: 'spatial-speed-match-2',
    name: 'Spatial Speed Match'
  },
  {
    slug: 'speed-pack',
    name: 'Speed Pack'
  },
  {
    slug: 'speed-match-2',
    name: 'Speed Match'
  },
  {
    slug: 'speed-match-overdrive',
    name: 'Speed Match Overdrive'
  },
  {
    slug: 'splitting-seeds',
    name: 'Splitting Seeds'
  },
  {
    slug: 'star-search',
    name: 'Star Search'
  },
  {
    slug: 'train-of-thought',
    name: 'Train of Thought'
  },
  {
    slug: 'tidal-treasures',
    name: 'Tidal Treasures'
  },
  {
    slug: 'trouble-brewing',
    name: 'Trouble Brewing'
  },
  {
    slug: 'word-bubbles-2',
    name: 'Word Bubbles'
  }

];
