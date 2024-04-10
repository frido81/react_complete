import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import {
  UncontrolledTreeEnvironment,
  Tree,
  StaticTreeDataProvider,
} from "react-complex-tree";

import "react-complex-tree/lib/style-modern.css";

function App() {
  const items = {
    root: {
      index: "root",
      canMove: true,
      isFolder: true,
      children: ["child1", "child2"],
      data: "Root item",
      canRename: true,
    },
    child1: {
      index: "child1",
      canMove: true,
      isFolder: false,
      children: [],
      data: "Child item 1",
      canRename: true,
    },
    child2: {
      index: "child2",
      canMove: true,
      isFolder: true,
      children: ["child3", "child4", "child5"],
      data: "Child item 2",
      canRename: true,
    },
    child3: {
      index: "child3",
      canMove: true,
      isFolder: false,
      children: [],
      data: "Child item 3",
      canRename: true,
    },

    child4: {
      index: "child4",
      canMove: true,
      isFolder: false,
      children: [],
      data: "Child item 4",
      canRename: true,
    },

    child5: {
      index: "child5",
      canMove: true,
      isFolder: false,
      children: [],
      data: "Child item 5",
      canRename: true,
    },
  };

  const dataProvider = new StaticTreeDataProvider(items, (item, newName) => ({
    ...item,
    data: newName,
  }));

  return (
    <div
      className="rct-dark"
      style={{ backgroundColor: "#222", color: "#e3e3e3" }}
    >
      <UncontrolledTreeEnvironment
        dataProvider={dataProvider}
        getItemTitle={(item) => item.data}
        viewState={{}}
        canDragAndDrop={true}
        canDropOnFolder={true}
        canReorderItems={true}
        keyboardBindings={{ renameItem: ["f4"] }}
      >
        <Tree treeId="tree-2" rootItem="root" treeLabel="Tree Example" />
      </UncontrolledTreeEnvironment>
    </div>
  );
}
export default App;
