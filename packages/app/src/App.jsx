import './App.css'
import Button from 'shared/Button';

function App() {
  console.log(`Rendering App`);
  return (
    <div className="App">
      This is the Home Page.
      <div className="card">
        <Button />        
      </div>
      
    </div>
  )
}

export default App
