import React from "react";

function MessageComponent({ messageFuncCall }) {
  return (
    <>
      {" "}
      <p className="p-3 bg-sky-100 rounded-lg border-l-4 border-sky-500">
        {messageFuncCall}
      </p>
    </>
  );
}

export default MessageComponent;
