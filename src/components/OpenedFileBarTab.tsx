import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setClickedFilesAction,
  setOpenedFilesAction,
} from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFileBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const { clickedFile, openedFiles } = useSelector(
    (state: RootState) => state.tree
  );

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

  const onRemove = (selectedId: string) => {
    const filtered = openedFiles.filter((file) => file.id !== selectedId);
    const lastTab = filtered[filtered.length - 1];
    if (!lastTab) {
      dispatch(setOpenedFilesAction([]));
      dispatch(
        setClickedFilesAction({
          activeTapId: null,
          fileContent: "",
          fileName: "",
        })
      );
      return;
    }
    const { id, name, content } = lastTab;
    dispatch(setOpenedFilesAction(filtered));
    dispatch(
      setClickedFilesAction({
        activeTapId: id,
        fileContent: content,
        fileName: name,
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
      <span
        className="cursor-pointer duration-300 flex justify-center items-center w-fit p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <CloseIcon></CloseIcon>
      </span>
    </div>
  );
};

export default OpenedFileBarTab;
