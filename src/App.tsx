import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data";
import "./index.css";
const App = () => {
  return (
    <div className="my-3">
      <RecursiveComponent fileTree={fileTree} />
    </div>
  );
};

export default App;
