import { createClient } from "contentful";
export const App = () => {
  console.log(`I'm using contentful `, createClient);
  return (
    <div style={{ background: "cyan", padding: "0.3rem 0.7rem" }}>
      I am a contentful app
    </div>
  );
};
export default App;
