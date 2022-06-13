import React, { useEffect, useState } from "react";
import axios from "axios";

const task = () => {
  useEffect(() => {
    addTime();
  }, []);
  return <div>{task.project}</div>;
};

export default task;
