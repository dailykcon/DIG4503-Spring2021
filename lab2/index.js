// Import the Fetch.js file and use the Fetch class.
import Fetch from './Fetch.js';

// Create a new object and pass a valid Pokemon/ID and color.
const work = new Fetch(6, "#eb9d28"); 
work.fetch();

// Create a second object with an invalid Pokemon/ID.
const not = new Fetch(0, "#e7ff33"); 
not.fetch();