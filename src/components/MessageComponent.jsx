import React from "react";

function MessageComponent({ messageFuncCall }) {
  return (
    <p className="p-3 sm:p-4 bg-white/70 rounded-xl border-l-4 border-sky-400 shadow-md text-base sm:text-lg text-gray-800 transition-all duration-200 hover:shadow-lg break-words">
      {messageFuncCall}
    </p>
  );
}

export default MessageComponent;
