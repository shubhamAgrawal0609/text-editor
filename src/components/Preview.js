// src/components/Preview.jsx
import { FiSmartphone, FiTablet, FiMonitor } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

export const Preview = ({ content, previewMode, setPreviewMode, cards }) => {
  // Device dimensions
  const deviceStyles = {
    mobile: "max-w-[375px] mx-auto bg-gray-50 p-4 rounded-xl shadow-inner",
    tablet: "max-w-[768px] mx-auto bg-gray-50 p-6 rounded-xl shadow-inner",
    desktop: "w-full bg-white p-8 rounded-lg shadow",
  };

  return (
    <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200 flex justify-end gap-4">
        <div className="text-black mr-4"> Post Preview </div>
        <div className="text-black "> Devices: </div>
        <FiSmartphone
          onClick={() => setPreviewMode("mobile")}
          className={`cursor-pointer ${
            previewMode === "mobile" ? "text-blue-600" : "text-gray-500"
          }`}
        />
        <FiTablet
          onClick={() => setPreviewMode("tablet")}
          className={`cursor-pointer ${
            previewMode === "tablet" ? "text-blue-600" : "text-gray-500"
          }`}
        />
        <FiMonitor
          onClick={() => setPreviewMode("desktop")}
          className={`cursor-pointer ${
            previewMode === "desktop" ? "text-blue-600" : "text-gray-500"
          }`}
        />
      </div>
      <div className="p-4 flex flex-col gap-2 overflow-auto bg-gray-100 h-screen">
        {content.length > 0 && (
          <div className={deviceStyles[previewMode]}>
            <div className="flex gap-2">
              <RxAvatar className="size-10" />
              <div>
                <p className="font-semibold">Cody Fisher</p>
              </div>
            </div>

            <p className="prose">{content}</p>

            {/* Mock engagement metrics */}
            {previewMode === "desktop" && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>👍 42 Likes</span>
                  <span>💬 15 Comments</span>
                  <span>🔄 8 Shares</span>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex gap-2 flex-col">
          {cards &&
            cards.map((card) => (
              <div className={deviceStyles[previewMode]}>
                <div className="flex gap-2">
                  <RxAvatar className="size-10" />
                  <div>
                    <p className="font-semibold">Cody Fisher</p>
                  </div>
                </div>

                <p className="prose">{card.content}</p>

                {/* Mock engagement metrics */}
                {previewMode === "desktop" && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>👍 42 Likes</span>
                      <span>💬 15 Comments</span>
                      <span>🔄 8 Shares</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};