import React from "react";

const Loading = ({ children, loading, error }) => {
  return (
    <div>
      {loading
        ? "loading please wait "
        : error
        ? "Error from server "
        : children}
    </div>
  );
};

export default Loading;
