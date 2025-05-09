import type { IFile } from "../interfaces";
import { v4 as uuid } from "uuid";

export const fileTree: IFile = {
  id: uuid(),
  name: "VSCODE-CLONE",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "react.js",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "index.html",
      isFolder: false,
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "vite.svg",
          isFolder: false,
        },
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `import React from "react";

const Button = () => {
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
      Click Me
    </button>
  );
};

export default Button;
`,
            },
            {
              id: uuid(),
              name: "Alert.tsx",
              isFolder: false,
              content:`import React from 'react';

const Alert = () => {
  return (
    <div style={{
      backgroundColor: '#f8d7da',
      color: '#721c24',
      border: '1px solid #f5c6cb',
      padding: '15px',
      borderRadius: '5px',
      marginBottom: '20px',
    }}>
      <strong>Alert!</strong> This is a static alert message.
    </div>
  );
};

export default Alert;
`
            },
          ],
        },
        {
          id: uuid(),
          name: "data",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "index.ts",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};
