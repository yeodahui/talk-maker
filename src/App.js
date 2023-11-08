import { useState } from "react";
import FileInputDropBox from "./components/FileInputDropBox";
import "./App.css";

function App() {
  const [file, setFile] = useState();

  return (
    <>
      <FileInputDropBox file={file} setFile={setFile} />
    </>
  );
}

export default App;
