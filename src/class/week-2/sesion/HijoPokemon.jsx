const colorPicket = (type) => {
    switch (type) {
      case "fire":
        return "red"
      case "water":
        return "#13A896"
      case "electric":
        return "#4A4E4C"
      case "air":
      default:
        return "#137EA8";
    }
  }
  

function HijoPokemon({id, name, avatar, powerLevel, agressive, tipo}) {
    
    console.log(tipo);
    return ( 
    
        <div  
            style={{
                width: "200px",
                backgroundColor: `${colorPicket(tipo)}`,
                color: "white",
                borderRadius: '20px',

            }}>
            <h5
                style={{
                    backgroundColor:"#4F50D3",
                    width:"10px",
                    height:"20px",
                    border: " solid white 3px",
                    borderRadius:"50%",
                    paddingLeft:"5px",
                    fontSize:"18px",

                   


                }}>{id}</h5>   

            <h3
                style={{
                    textAlign:"center",
                    fontSize:"20px",
                    backgroundColor:"#4F50D3",
                    border: " solid white 3px",
                    borderRadius:"10px",
                    width:"60%",
                    top:"35%",
                    marginLeft:"30px"
                }}
            
            >{name}</h3>
            <img  
                style={{ 
                    height:"50%",
                    width: "100%", 
                    borderRadius:"50%",
                    
                    }} 
                    src={avatar} alt="Pokemon"></img>


            <h3>Power: {powerLevel}</h3>
            {
                agressive? (<p 
                        style={{
                            backgroundColor:"#FF323E",
                            textAlign:"center", 
                            borderRadius:"10px",
                            width:"35%",
                            marginLeft:"60px"
                            
                        }}
                    >Violento</p>):
                    (<p
                        style={{
                            backgroundColor:"green", 
                            textAlign:"center", 
                            borderRadius:"10px",
                            width:"45%",
                            left:"30px",
                            marginLeft:"50px"

                            
                        }}
                    >No Violento</p>)
                
            }
           
           
        </div>
     );
}

export default HijoPokemon;