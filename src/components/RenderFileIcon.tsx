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
  if (extension === "tsx")
    return <IconImg src={"/public/icons/react_ts.svg"} />;
  if (extension === "html") return <IconImg src={"/public/icons/html.svg"} />;
  if (extension === "svg") return <IconImg src={"/public/icons/svg.svg"} />;
  if (extension === "js")
    return <IconImg src={"/public/icons/javascript.svg"} />;
  if (extension === "ts")
    return <IconImg src={"/public/icons/typescript.svg"} />;

  //** FOLDERS
  if (extension === "node_modules" && isFolder)
    return isOpen ? (
      <IconImg src="/public/icons/folder-node-open.svg" />
    ) : (
      <IconImg src="/public/icons/folder-node.svg" />
    );
  if (extension === "public" && isFolder)
    return isOpen ? (
      <IconImg src="/public/icons/folder-public-open.svg" />
    ) : (
      <IconImg src="/public/icons/folder-public.svg" />
    );
  if (extension === "src" && isFolder)
    return isOpen ? (
      <IconImg src="/public/icons/folder-src-open.svg" />
    ) : (
      <IconImg src="/public/icons/folder-src.svg" />
    );
  if (extension === "components" && isFolder)
    return isOpen ? (
      <IconImg src="/public/icons/folder-components-open.svg" />
    ) : (
      <IconImg src="/public/icons/folder-components.svg" />
    );
  if (extension === "data" && isFolder)
    return isOpen ? (
      <IconImg src="/public/icons/folder-database.svg" />
    ) : (
      <IconImg src="/public/icons/folder-database-open.svg" />
    );
  if (isFolder && isOpen)
    return <IconImg src="/public/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen)
    return <IconImg src="/public/icons/folder-default.svg" />;

  return <FileIcon />;
};

export default RenderFileIcon;
