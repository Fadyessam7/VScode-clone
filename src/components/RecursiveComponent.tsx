import { useState } from "react";
import type { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/RightArrow";
import BottomArrowIcon from "./SVG/BottomArrow";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import {
  setClickedFilesAction,
  setOpenedFilesAction,
} from "../app/features/fileTreeSlice";
import { doesFileObjectExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, isFolder, name, children, content } = fileTree;
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  //** Handlers
  const toggle = () => setIsOpen((prev) => !prev);
  const onFileClicked = () => {
    const exist = doesFileObjectExist(openedFiles, id);
    dispatch(
      setClickedFilesAction({
        fileName: name,
        fileContent: content,
        activeTapId: id,
      })
    );
    if (exist) return;

    dispatch(setOpenedFilesAction([...openedFiles, fileTree]));
  };

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
          <div className="flex items-center" onClick={onFileClicked}>
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
