import { useState } from "react";
import "./dropArea.css";
const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <div>
      <section
        onDragEnter={() => setShowDrop(true)}
        onDragLeave={() => setShowDrop(true)}
        onDrop={() => {
          onDrop();
          setShowDrop(false);
        }}
        onDragOver={(e) => e.preventDefault()}
        className={showDrop ? "drop-area" : "hide-drop"}
      >
        Drop Area
      </section>
    </div>
  );
};

export default DropArea;
