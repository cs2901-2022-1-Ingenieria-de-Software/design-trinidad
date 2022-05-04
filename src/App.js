import './App.css';
import data from "./json/data.json"
import Light from './components/Light';

function App() {
  return (
    <div className="App">
      <ul>
        {data.map((item) =>(
          <Light key = {item.id} nombre = {item.nombre} classCss={item.classCss}/>
        ))}
      </ul>
    </div>
  );
}


export default App;
