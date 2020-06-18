import * as React from "react";
import { api } from "./utils/api";

const App: React.FC<IAppProps> = (props) => {
  const [title, setTitle] = React.useState<string>("");

  React.useEffect(() => {
    (async () => {
      let title = await api("/api");
      setTitle(title);
    })();
  });

  return (
    <main className="container my-5">
      <h1 className="text-center text-dark">Welcome to {title}</h1>
    </main>
  );
};

interface IAppProps {}

export default App;
