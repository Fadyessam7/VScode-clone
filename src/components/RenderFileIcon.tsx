import FileIcon from "./SVG/File";

interface IProps {
  fileName: string;
}

const RenderFileIcon = ({ fileName }: IProps) => {
  return (
    <div className="flex items-center">
      <span className="mr-3">
        <FileIcon />
      </span>
      <span>{fileName}</span>
    </div>
  );
};

export default RenderFileIcon;
