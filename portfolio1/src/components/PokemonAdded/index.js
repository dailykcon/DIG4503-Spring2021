import React from 'react';

function PokemonAdded (props) {
    return(
        <div>
            <p>Favorite Pokemon Logged! <br></br>Additional Favorites: {props.count}</p>
        </div>
    )
}

export default PokemonAdded;