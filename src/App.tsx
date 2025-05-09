import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data";
import "./index.css";

const App = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="border-r p-2 border-b-[1px] border-[#ffffff1f] w-64">
          <RecursiveComponent fileTree={fileTree} />
        </div>
        <OpenedFilesBar></OpenedFilesBar>
      </div>
    </div>
  );
};

export default App;
