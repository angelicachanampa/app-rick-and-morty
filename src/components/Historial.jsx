function Historial({ historial }) {
  return (
    <div className="historial-busqueda">
      <h3>Historial de Búsqueda</h3>
      {historial.length === 0 ? (
        <p>No hay búsquedas recientes.</p>
      ) : (
        <ul>
          {historial.map((item) => (
            <li key={item.id} className="historial-busqueda-container">
              <strong>{item.name}</strong> - {item.species} - {item.status}
              <br />
              <img
                src={item.image}
                alt={`Imagen de ${item.name}`}
                className="historial-busqueda-imagen"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Historial;
