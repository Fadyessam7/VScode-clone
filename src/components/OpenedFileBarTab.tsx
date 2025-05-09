import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFilesAction } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFileBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const { clickedFile } = useSelector((state: RootState) => state.tree);

  //** HANDLERS
  const onClick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFilesAction({
        fileName: name,
        fileContent: content,
        activeTapId: id,
      })
    );
  };
  return (
    <div
      className={`flex items-center p-1 border-t-2 ${
        file.id === clickedFile.activeTapId
          ? "border-[#cf6ccf]"
          : "border-transparent"
      }`}
      onClick={onClick}
    >
      <RenderFileIcon fileName={file.name}></RenderFileIcon>
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit p-1 rounded-md">
        <CloseIcon></CloseIcon>
      </span>
    </div>
  );
};

export default OpenedFileBarTab;
