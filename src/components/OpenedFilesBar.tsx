import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFileBarTab from "./OpenedFileBarTab";

const OpenedFilesBar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );
  return (
    <div>
      <div className="flex items-center border-b-[1px] border-[#ffffff1f]">
        {openedFiles.map((file) => (
          <OpenedFileBarTab file={file} key={file.id}></OpenedFileBarTab>
        ))}
      </div>
      {clickedFile.fileContent}
    </div>
  );
};

export default OpenedFilesBar;
