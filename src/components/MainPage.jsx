import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      <h1>
        Task 1 --&gt; 
        <a
          href="https://philippemarcmeyer.github.io/FieldsLinker/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Field Linker
        </a>{" "}
      </h1>

      <h1>
        Task 2 --&gt; <Link to="/task2">Text Editor</Link>
      </h1>

      <h1>
        Task 3 --&gt; <Link to="/task3">Print Preview</Link>
      </h1>
    </div>
  );
};
export default MainPage;
