import { useEffect, useState } from "react";
import "./App.css";
import { Robot } from "./components/Robot";
import axios from "axios";

// https://swapi.dev/api/people

function App() {
  const [name, setName] = useState("Connor");
  const [showRobot, setShowRobot] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [somethingNew, setSomthNew] = useState("WoW!");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  //npm install axios
  //hello

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setCharacters(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("There is an error!");
        console.log(err);
        setLoading(false);
      })
      .finally(() => {
        console.log("Final Dance");
      });
  }, []);

  if (isLoading) return <>Loading...</>;

  return (
    <div className="App">
      <div className="controllers">
        <div>
          Имя робота: {characters.length > 0 && characters[6].name}
          <input
            style={{ marginLeft: 12 }}
            value={name}
            onChange={onNameChange}
          />
        </div>
        <button onClick={() => setShowRobot(!showRobot)} className="toggler">
          {showRobot ? "Выключить" : "Включить"}
        </button>
      </div>
      <div className="poligon">{showRobot && <Robot name={name} />}</div>
    </div>
  );
}

export default App;
