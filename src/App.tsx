import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
import { fileTree } from "./data";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import WelcomeTab from "./components/WelcomeTab";
import "./index.css";

const App = () => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  return (
    <div>
      <div className="flex h-screen">
        <ResizablePanel
          showLeftPanel
          leftPanel={
            <div className="w-64 p-2">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={openedFiles.length ? <Preview /> : <WelcomeTab />}
        />
      </div>
    </div>
  );
};

export default App;
