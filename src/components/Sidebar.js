// src/components/Sidebar.jsx
import { FiFileText, FiCopy, FiZap, FiLayers, FiTrendingUp, FiList, FiSettings, FiAlertCircle } from 'react-icons/fi';

export const Sidebar = () => (
  <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
    <div className="p-4 flex-1">
      <div className="space-y-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-1">
          <FiFileText className="text-blue-600" />
          <span>Write Post</span>
        </button>
        <button className="w-full flex items-center gap-3 p-1 hover:bg-gray-100 rounded-lg text-left">
          <FiCopy className="text-green-600" />
          <span>Post Generator</span>
        </button>
        
      
        <button className="w-full flex items-center gap-3 p-1 hover:bg-gray-100 rounded-lg text-left">
          <FiLayers className="text-orange-600" />
          <span>Ideas Generator</span>
        </button>
        <button className="w-full flex items-center gap-3 p-1 hover:bg-gray-100 rounded-lg text-left">
          <FiTrendingUp className="text-pink-600" />
          <span>Carousel Maker</span>
        </button>
        <button className="w-full flex items-center gap-3 p-1 hover:bg-gray-100 rounded-lg text-left">
          <FiZap className="text-purple-600" />
          <span>Posts</span>
        </button>
        <button className="w-full flex items-center gap-3 p-1 hover:bg-gray-100 rounded-lg text-left">
          <FiList className="text-teal-600" />
          <span>Content Inspiration</span>
        </button>
        <button className="w-full flex items-center gap-3 p-1 hover:bg-gray-100 rounded-lg text-left">
          <FiList className="text-red-600" />
          <span>Posts for You</span>
        </button>
        <button className="w-full flex items-center gap-3 p-1 hover:bg-gray-100 rounded-lg text-left">
          <FiCopy className="text-green-600" />
          <span>Schedule</span>
        </button>
      </div>



    <div className=" mt-20  border-t border-gray-200 space-y-2">
      <button className="w-full flex items-center gap-3 p-1 hover:bg-gray-100 rounded-lg">
        <FiSettings className="text-gray-600" />
        <span>Preferences</span>
      </button>
      <button className="w-full flex items-center gap-3 p-1 hover:bg-gray-100 rounded-lg">
        <FiAlertCircle className="text-gray-600" />
        <span>Feature Request</span>
      </button>
    </div>
    <div className=" pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-500">Word generated</span>
          <span className="text-blue-600">12th/50k</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
           <button className="px-4 mt-1 py-2 border border-gray-300 rounded-full flex items-center gap-1">
                    
                    Upgrade Plan
                  </button>
        </div>
      </div>
    </div>
  </div>
);