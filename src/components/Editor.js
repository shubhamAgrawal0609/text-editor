import { useEffect, useRef, useState } from "react";
import { FiUpload, FiCalendar, FiSave } from "react-icons/fi";

export const Editor = ({ content, setContent, setTooltip, handlePublish }) => {
  const editorRef = useRef(null);
  const [localContent, setLocalContent] = useState(content);
  const [lines, setLines] = useState([""]); // Store lines as an array
  const [activeLine, setActiveLine] = useState(null); // Track the active empty line
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    const newContent = e.target.innerHTML;
    setLocalContent(newContent);
    setContent(newContent);
  };

  const handleChange = (e) => {
    const newLines = e.target.value.split("\n"); // Split text by lines
    setLines(newLines);

    // Check if any line is empty
    const emptyIndex = newLines.findIndex(line => line.trim() === "");
    setActiveLine(emptyIndex !== -1 ? emptyIndex : null);
  };

  const handleAddContent = () => {
    if (activeLine !== null) {
      const updatedLines = [...lines];
      updatedLines[activeLine] = "New Content"; // Insert new content
      setLines(updatedLines);
    }
  };

  const handleSelect = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    setTooltip({
      visible: selection.toString().length > 0,
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY - 40,
    });
  };

  // Handle content deletion and updates
  useEffect(() => {
    const editor = editorRef.current;
    const handleChange = () => {
      setLocalContent(editor.innerHTML);
      setContent(editor.innerHTML);
    };

    if (editor) {
      editor.addEventListener("input", handleChange);
      editor.addEventListener("keydown", handleChange);
      return () => {
        editor.removeEventListener("input", handleChange);
        editor.removeEventListener("keydown", handleChange);
      };
    }
  }, [setContent]);

  return (
    <div className="border-l-4 border-blue-200 pl-4 relative">
      {/* Top Section */}

      {/* Editor Area */}
      {/* <div
        ref={editorRef}
        className="min-h-[300px] border border-gray-300 rounded-lg p-4 mb-6 focus:outline-none prose"
        contentEditable
        onInput={handleInput}
        onSelect={handleSelect}
        placeholder="Start writing here..."
      /> */}
      <textarea
        onSelect={handleSelect}
        ref={textareaRef}
        className="min-h-[300px] w-full border border-gray-300 rounded-lg p-4 mb-6 focus:outline-none prose"
        onChange={(e) => {
          // handleInput(e);
          setContent(e.target.value);
          handleChange(e);
        }}
      />
      {activeLine !== null && (
        <button
        className="bg-white border text-xl px-1 py-0.5 text-blue-400 border-gray-300 rounded-full"
          style={{
            position: "absolute ",
            left: "2px",
            top: `${activeLine * 24 + 5}px`, // Adjust button position based on line height
          }}
          onClick={handlePublish}
        >
          +
        </button>
      )}
      {/* Bottom Action Buttons */}
      <div className="flex gap-4  border-t pt-2">
        <button className="px-4 py-2 mr-20 border border-gray-300 rounded-lg flex items-center gap-2">
          <FiSave />
          Save Draft
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2"
          onClick={handlePublish}
        >
          <FiUpload />
          Publish
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2">
          <FiCalendar />
          Schedule
        </button>
      </div>
    </div>
  );
};