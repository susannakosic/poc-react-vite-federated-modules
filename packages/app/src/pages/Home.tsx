// @ts-ignore //ts does not know how to resolve types for remotes
import Button from "shared/Button";
export const Home = () => {
  return (
    <div>
      <p>This is the Home Page.</p>
      <Button
        onClick={() => console.log(`running remote component`)}
        caption={"Click me!"}
      />
    </div>
  );
};
