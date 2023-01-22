import './App.css'
import Button from 'shared/Button';

function App() {
  console.log(`Rendering App`);
  return (
    <div className="App">
      This is the Home Page.
      
      <Button onClick={() => console.log(`running remote component`)} />        
      
      
    </div>
  )
}

export default App
