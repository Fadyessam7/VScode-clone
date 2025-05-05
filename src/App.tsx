import RenderFileIcon from "./components/RenderFileIcon";
import "./index.css";
const App = () => {
  return (
    <div>
      <RenderFileIcon fileName={"index.tsx"} />
      <RenderFileIcon fileName={"index.html"} />
      <RenderFileIcon fileName={"index.css"} />
    </div>
  );
};

export default App;
