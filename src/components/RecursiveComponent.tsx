import { useState } from "react";
import type { IFile } from "../interfaces";
import FileIcon from "./SVG/File";
import FolderIcon from "./SVG/Folder";
import RightArrowIcon from "./SVG/RightArrow";
import BottomArrowIcon from "./SVG/BottomArrow";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({
  fileTree: { isFolder, name, children },
}: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //** Handlers
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="ml-2 mb-2 cursor-pointer">
      <div className="flex items-center mb-2">
        {isFolder ? (
          <div className="flex items-center mr-1" onClick={toggle}>
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <FolderIcon />
            <span className="ml-1">{name}</span>
          </div>
        ) : (
          <div className="flex items-center">
            <FileIcon />
            <span className="ml-1">{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children?.map((file, index) => (
          <RecursiveComponent fileTree={file} key={index} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
