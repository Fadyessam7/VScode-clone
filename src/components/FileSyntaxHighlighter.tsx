import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface IProps {
  content: string | undefined;
}
const FileSyntaxHighlighter = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={dracula}
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        maxHeight: "100vh",
        overflowX: "auto",
      }}
    >
      {String(content)}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
