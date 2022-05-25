import "./style.css";

function Developer({ name, age, country }) {
  return (
    <div className="container">
      <div>
        <label>Dev: {name}</label>
      </div>
      <div>
        <label>Idade: {age}</label>
      </div>
      <div>
        <label>País: {country}</label>
      </div>
    </div>
  );
}

export default Developer;
