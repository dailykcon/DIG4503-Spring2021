// Import the Fetch.js file and use the Fetch class.
import Fetch from './Fetch.js';

// Create a new object and pass a valid Pokemon/ID and color.
const valid = new Fetch(6, "#eb9d28"); 
valid.fetch();

// Create a second object with an invalid Pokemon/ID.
const invalid = new Fetch(0, "#e7ff33"); 
invalid.fetch();