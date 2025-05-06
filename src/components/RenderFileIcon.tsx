import { extensionIconPaths } from "../constants";
import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ fileName, isFolder, isOpen }: IProps) => {
  const extension = fileName.split(".").pop();
  //** FILES
  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPaths[extension]}-open.svg`
        : `${extensionIconPaths[extension]}.svg`
      : `${extensionIconPaths[extension]}.svg`;

    return <IconImg src={iconPath} />;
  }
  //** Default Folder Icon
  if (isFolder && isOpen)
    return <IconImg src="/public/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen)
    return <IconImg src="/public/icons/folder-default.svg" />;

  //** Default File Icon
  return <FileIcon />;
};

export default RenderFileIcon;
