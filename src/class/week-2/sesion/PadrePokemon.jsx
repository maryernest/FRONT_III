import HijoPokemon from './HijoPokemon';
import dataPokemon from '../../../assets/static/pokemons.json'

const PadrePokemon = ({type}) => {
  const data = dataPokemon["water"];
    
    return (
      <div className='padre'>
        <h2>TIPO DE POKEMON: {type}</h2>
        
        <div>
          {
          data.map(pokemon =>(
            <HijoPokemon key={pokemon.id} {...pokemon} />
            
          ))
        }
        </div>
      </div>
      );
}

export default PadrePokemon;