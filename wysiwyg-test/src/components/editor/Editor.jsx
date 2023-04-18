import React, { useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import  "react-quill/dist/quill.snow.css";


const Editor = () => {

    const quillRef = useRef();
    const [text, setText] = useState("");
    console.log(text)

    const handleInsertAudio = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "audio/*");
        input.click();
        input.addEventListener("change", () => {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const range = quillRef.current.getEditor().getSelection();
            let position = range ? range.index : 0
            quillRef.current
            .getEditor()
            .insertEmbed(position, "audio", e.target.result);
        };
        reader.readAsDataURL(file);
        });
    };

    const modules = {
        toolbar: [
            [{ header: [false, 1, 2, 3, 4, 5, 6] }],
            ["bold", "italic", "underline", "strike"],
           // [{ color: [] }, { background: [] }],
           // [{ script:  "sub" }, { script:  "super" }],
            ["blockquote", "code-block"],
            [{ list:  "ordered" }, { list:  "bullet" }],
            [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
            ["link", "image", "video"],
            [{ 'audio': 'Add Audio' }],
            ["clean"],
        ],
    }

  return (
    <div>
        <ReactQuill 
        modules={modules} 
        theme="snow" 
        onChange={setText}
        value={text}
        ref={quillRef}
        />
    <button onClick={handleInsertAudio}>Inserir audio</button>
    <button>Enviar</button>
    </div>
  )
}

export default Editor