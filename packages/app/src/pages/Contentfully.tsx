// @ts-ignore //ts does not know how to resolve types for remotes
import App from "contentfully/App";
export const Contentfully = () => {
  return (
    <div style={{ background: "cyan", padding: "0.3rem 0.7rem" }}>
      <App />
    </div>
  );
};
export default Contentfully;
