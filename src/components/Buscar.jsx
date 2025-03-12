function Buscar({ buscar, setBuscar }) {
  return (
    <input
      className="input-personaje"
      type="text"
      placeholder="Buscar personaje..."
      value={buscar}
      onChange={(e) => setBuscar(e.target.value)}
    />
  );
}

export default Buscar;
