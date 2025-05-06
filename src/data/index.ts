import type { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "VSCODE-CLONE",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".vite",
          isFolder: true,
          children: [
            {
              name: "react.js",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "index.html",
      isFolder: false,
    },
    {
      name: "public",
      isFolder: true,
      children: [
        {
          name: "vite.svg",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "components",
          isFolder: true,
          children: [
            {
              name: "Button.tsx",
              isFolder: false,
            },
            {
              name: "Alert.tsx",
              isFolder: false,
            },
          ],
        },
        {
          name: "data",
          isFolder: true,
          children: [
            {
              name: "index.ts",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};
