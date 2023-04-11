import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import {CKEditor} from "@ckeditor/ckeditor5-react"
import parse from "html-react-parser"
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("")
  console.log(text)

  return (
    <div className="App">
      <div className="editor">
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData()
            setText(data)
          }}
        />
      </div>
      <div>
        <h2>Content</h2>
        <p>{parse(text)}</p>
      </div>
    </div>
  );
}

export default App;
