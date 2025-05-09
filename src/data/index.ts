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
              content: "Button Component Showed",
            },
            {
              id: uuid(),
              name: "Alert.tsx",
              isFolder: false,
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
