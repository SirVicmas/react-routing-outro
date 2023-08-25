import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(){

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/quotes')
        .then(response => response.json())
        .then((data) => {
            setQuotes(data)
        })
        .catch(error => console.log(error))
    }, []);

    

    return (<div>
        {
            quotes.map((quote) =>{
                return  <div key={quote.id}>
                    <h2>{quote.name}</h2>
                    <h3>{quote.author}</h3>
                    <p>{quote.description}</p>
                    <button><Link to={`/quotes/${quote.id}`}>View Quote</Link></button>
                    
                    
                

                </div>
            })
        }
        
    </div>)
}

export default Home;