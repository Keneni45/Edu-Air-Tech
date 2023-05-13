import React, { useState } from "react";

export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  // This function updates the progress state every second
  // You would replace this with your actual progress tracking logic
  function simulateProgress() {
    setTimeout(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      }
    }, 1000);
  }

  simulateProgress();

  return (
    <div>
      <progress value={progress} max="100" />
      <span>{progress}%</span>
    </div>
  );
}
