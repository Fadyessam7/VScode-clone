import { useState } from "react";
import type { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/RightArrow";
import BottomArrowIcon from "./SVG/BottomArrow";
import RenderFileIcon from "./RenderFileIcon";

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
            <RenderFileIcon
              fileName={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="ml-1">{name}</span>
          </div>
        ) : (
          <div className="flex items-center">
            <RenderFileIcon fileName={name} />
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
