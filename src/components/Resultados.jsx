function Resultados({ characters }) {
  return (
    <div className="mostrar-resultados">
      {characters.length === 0 ? (
        <p>No hay resultados para mostrar.</p>
      ) : (
        characters.map((character) => (
          <div key={character.id} className="mostrar-resultados-container">
            <strong>{character.name}</strong> - {character.species} - {character.status}
            <br />
            <img
              src={character.image}
              alt={`Imagen de ${character.name}`}
              className="mostrar-resultados-imagen"
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Resultados;
