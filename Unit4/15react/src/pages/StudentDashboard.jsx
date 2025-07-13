import React, { useState } from "react";
import TrackerForm from "../components/TrackerForm";
import StreakHeatmap from "../components/StreakHeatmap";
import ReflectionViewer from "../components/ReflectionViewer";

export default function StudentDashboard() {
  const [logs, setLogs] = useState([]);

  const handleNewLog = (data) => {
    const newEntry = { ...data, date: new Date().toLocaleDateString() };
    setLogs([...logs, newEntry]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        🎯 Student Dashboard
      </h1>
      <TrackerForm onSubmit={handleNewLog} />
      <StreakHeatmap logs={logs} />
      <ReflectionViewer reflections={logs} />
    </div>
  );
}
