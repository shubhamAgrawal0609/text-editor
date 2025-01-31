// src/components/Toolbar.jsx
import { FiBold, FiItalic, FiUnderline, FiZap } from 'react-icons/fi';

export const Toolbar = ({ showAISuggestions }) => (
    <div className='mt-1'>
    <div className="flex items-center gap-4">
    <h className="font-bold text-2xl mr-60" > Write Post</h>
    <button className="px-4 mt-1  mr-4 py-2 border border-gray-300 rounded-full flex items-center gap-2">Check Score</button>
    <FiZap/>
    <div className="w-8 h-8 rounded-full bg-blue-600">
    </div>
    </div>
  <div className="flex items-center justify-between p-4 border-b border-gray-200">
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <FiBold className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <FiItalic className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <FiUnderline className="w-5 h-5" />
        </button>
      </div>
      
      <button 
        onClick={showAISuggestions}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2"
      >
        <FiZap className="w-5 h-5" />
        <span>AI</span>
      </button>
    </div>

  </div>
  </div>
);