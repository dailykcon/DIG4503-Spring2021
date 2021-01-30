import chalk from 'chalk';

class Fetch {
  
    constructor(pokemon, color) {
      this.pokemon = pokemon;
      this.color = color;
    }
  
    fetch() { import axios from 'axios';

    // Fetch this URL
    axios ('https://pokeapi.co/api/v2/pokemon/' + this.pokemon)
        // And then...
        .then((response) => {
            // Use the 'data'
            const pokemon = response.data;
    
            // The above URL will return an object
            //  with data on the Pokemon requested
            console.log(chalk.hex(this.color)("This is a " + pokemon.name + " and its ID is " + pokemon.id));
        })
        .catch((error) => {
            console.log(chalk.red("Error: " + error));
        });
    }
}

export default Fetch;

  // Create a new type of object based on Fetch
  // const c = new Fetch();