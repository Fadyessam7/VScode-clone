import type { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[] | undefined;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  showLeftPanel: boolean;
}
const onLayout = (sizes: number[]) => {
  document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
};

const ResizablePanel = ({
  defaultLayout = [33, 67],
  leftPanel,
  rightPanel,
  showLeftPanel,
}: IProps) => {
  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
      autoSaveId="conditional"
    >
      {showLeftPanel && (
        <>
          <Panel defaultSize={defaultLayout[0]} collapsible={true}>
            {leftPanel}
          </Panel>
          <PanelResizeHandle className="border-r-2 border-[#ffffff1f]" />
        </>
      )}
      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
      <PanelResizeHandle />
    </PanelGroup>
  );
};

export default ResizablePanel;
