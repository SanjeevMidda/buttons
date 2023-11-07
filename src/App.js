import './index.css';
import Button from './components/Button';

function App() {

  const colors = ["blue", "green", "red", "purple", "pink"];

  return (
    <div className="App">

      <h3>BUTTONS</h3>
      
      <div className="buttonContainer">
        {
          colors.map((color) => {
            return <Button key ={color} letter={color} color={color}/>
          })
        }
      </div>
      
    </div>
  );
}

export default App;
