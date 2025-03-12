import { useState, useEffect } from "react";
import Buscar from "./components/Buscar";
import Resultados from "./components/Resultados";
import Historial from "./components/Historial";
import './App.css';

function App() {
  const [buscar, setBuscar] = useState("");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    if (buscar.length < 3) {
      setCharacters([]);
      return;
    }
    setLoading(true);

    fetch(`https://rickandmortyapi.com/api/character/?name=${buscar}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) { // Verificar si hay resultados
          setCharacters(data.results);
          
          setHistorial((prev) => {
            const newHistory = [...prev];
            data.results.forEach((character) => {
              if (!newHistory.some((item) => item.id === character.id)) {
                newHistory.unshift({
                  id: character.id,
                  name: character.name,
                  status: character.status,
                  species: character.species,
                  image: character.image,
                });
              }
            });
            return newHistory.slice(0, 5);
          });
        } else {
          setCharacters([]);
        }
      })
      .catch(() => setCharacters([]))
      .finally(() => setLoading(false));
  }, [buscar]);

  return (
    <>
      <h1>Buscador de Personajes de Rick y Morty</h1>
      <div className="container">
        <Buscar buscar={buscar} setBuscar={setBuscar} />
        {loading && <p>Cargando...</p>}
        <Resultados characters={characters} />
        <Historial historial={historial} />
      </div>
      
    </>
  );
}

export default App;
