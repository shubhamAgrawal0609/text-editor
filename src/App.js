// src/App.jsx
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Toolbar } from './components/Toolbar';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { FiUnderline, FiX } from 'react-icons/fi';

export default function App() {
  const [content, setContent] = useState('');
  const [publishedContent, setPublishedContent] = useState('');
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });
  const [previewMode, setPreviewMode] = useState('desktop');
  const [charCount, setCharCount] = useState(0);
  const [cards,setCards] = useState([]);
  const [reactions, setReactions] = useState();

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      content: content,
      reactions: reactions,
    };
    setCards([...cards, newCard]);
  };

  const handlePublish = () => {
    // setPublishedContent(content);
    setContent('');
    addCard();
  };

  const underlineText = () => {
    document.execCommand('underline');
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Toolbar 
          onPublish={handlePublish}
          charCount={content.replace(/<[^>]+>/g, '').length}
        />
        
        <div className="p-6 flex-1 overflow-auto">
          <div className="max-w-3xl mx-auto">
            <Editor 
              content={content}
              setContent={setContent}
              setTooltip={setTooltip}
              handlePublish={handlePublish}
            />
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 text-sm text-gray-500">
          <div className="flex justify-between">
            <span>Last saved: Oct 4, 2023, 10:34 AM</span>
            <span>Words generated: 12th/50k</span>
          </div>
        </div>
      </div>

      <Preview 
        content={content}
        previewMode={previewMode}
        setPreviewMode={setPreviewMode}
        cards={cards}
      />

      {tooltip.visible && (
        <div
          className="absolute flex gap-2 bg-white p-2 rounded-lg shadow-lg border border-gray-200"
          style={{ top: tooltip.y, left: tooltip.x }}
        >
          <button 
            onClick={underlineText}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <FiUnderline className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setTooltip({ ...tooltip, visible: false })}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}