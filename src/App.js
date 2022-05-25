import "./App.css";
import Developer from "./components/developer";


function App() {
  const users = [
    { name: "Alex", age: 20, country: "Brasil" },
    { name: "Gabriela", age: 23, country: "EUA" },
    { name: "Cíntia", age: 25, country: "Argentina" },
  ];
  return (
    <div className="App">
      {users.map((pessoa, index) => (
        <Developer
          key={index}
          name={pessoa.name}
          age={pessoa.age}
          country={pessoa.country}
        />
      ))}
    </div>
  );
}

export default App;
