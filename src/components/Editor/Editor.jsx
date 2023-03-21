import { createReactEditorJS } from "react-editor-js";

import { useRef, useCallback, useEffect } from "react";
import { EDITOR_JS_TOOLS } from "../constants";
import { asynccreateblog, asyncloadblogs } from "../../store/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Editor.css";
const ReactEditorJS = createReactEditorJS();

function Editor() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editorJS = useRef(null);
  const handleInitialize = (instance) => {
    editorJS.current = instance;
  };

  const handleSave = async () => {
    const savedData = await editorJS.current.save();

    let blog = "";
    savedData.blocks.forEach((element) => {
      // console.log(element);
      if (element.type === "paragraph") {
        blog += "<p>" + element.data.text + "</p>";
      }
      if (element.type === "header") {
        blog +=
          "<h" +
          element.data.level +
          ">" +
          element.data.text +
          "</h" +
          element.data.level +
          ">";
      }
      if (element.type === "list") {
        blog +=
          "<" +
          element.data.style[0] +
          element.type[0] +
          "/>" +
          element.data.items.map((i) => "<li>" + i + "</li>").join("") +
          "<" +
          element.data.style[0] +
          element.type[0] +
          "/>";
      }
      if (element.type === "code") {
        blog +=
          "<" +
          element.type +
          ">" +
          element.data.code +
          "</" +
          element.type +
          ">";
      }
      if (element.type === "quote") {
        blog +=
          "<" +
          element.type[0] +
          ">" +
          element.data.text +
          "</" +
          element.type[0] +
          ">";
      }
      if (element.type === "simpleImage") {
        blog +=
          "<img src=" +
          element.data.url +
          " /><figcaption>" +
          element.data.caption +
          "</figcaption>";
      }
    });

    dispatch(asynccreateblog({ data: blog }));
    navigate(`/user/${user.username}`);
  };
  const handleClear = useCallback(async () => {
    await editorJS.current.clear();
  }, []);
  return (
    <div className="editor-cnt">
      <ReactEditorJS
        tools={EDITOR_JS_TOOLS}
        onInitialize={handleInitialize}
        placeholder="Type Here..."
      />
      <div className="btn-cnt2">
        <button className="submit-btn" onClick={handleSave}>
          Publish
        </button>
        <button className="submit-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Editor;
