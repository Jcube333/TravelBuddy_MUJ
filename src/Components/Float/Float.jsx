import React from "react";
import { Progress } from "rsuite";

function Float(props) {
  return (
    <div className="float">
      <Progress.Line percent={80} showInfo={false} status="active" />
      <Progress.Line percent={80} showInfo={false} status="active" />
    </div>
  );
}

export default Float;
