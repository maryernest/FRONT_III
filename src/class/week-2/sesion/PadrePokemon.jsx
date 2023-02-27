import HijoPokemon from './HijoPokemon';
import dataPokemon from '../../../assets/static/pokemons.json'

const PadrePokemon = ({type}) => {
  const data = dataPokemon[type];
    
    return (
      <div className='padre'>
        <h2
        style={{
          backgroundColor:"#e5ec4c",
          color:"#7b75f1",
          textAlign:"center",
          width:"30%",
          

          }}
        >POKEMON: {type}</h2>
        
        <div

        style={{
          display: 'flex',
          justifyContent:"center",
          
          gap: '20px',
        }}>
          {
          data.map(pokemon =>(
            <HijoPokemon key={pokemon.id} {...pokemon} tipo = {type} />
             
          ))
        }
        </div>
      </div>
      );
}

export default PadrePokemon;