import './App.css'
import Button from 'shared/Button';
import App from 'contentfully/App';

function Host() {
  console.log(`Rendering App`);
  return (
    <div className="App">
      This is the Home Page.
      
      <Button onClick={() => console.log(`running remote component`)} caption={"Click me!" } />        
      
      <App/>      
    </div>
  )
}

export default Host
