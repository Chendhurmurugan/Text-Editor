import { useState, React } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../components/TextEditor.css";

const TextEditor = () => {
  const [editContent, setEditContent] = useState(EditorState.createEmpty());

  const handleEdit = (newEditorState) => {
    setEditContent(newEditorState);
  };

  return (
    <div>
      <header className="App-header">
        <div>
          <h2>TASK 2 Text Editor</h2>
          <div className="etr_cntr">
            <Editor
              editContent={editContent}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              toolbarClassName="toolbar-class"
              onEditorStateChange={handleEdit}
            />
          </div>
        </div>
      </header>
    </div>
  );
};
export default TextEditor;
