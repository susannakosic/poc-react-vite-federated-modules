import _ from "lodash";
export const Other = () => {
  console.log(`I'm using lodash `, _.VERSION);
  return (
    <div style={{ background: "grey", padding: "0.3rem 0.7rem" }}>
      I depend on Lodash.
    </div>
  );
};
export default Other;
