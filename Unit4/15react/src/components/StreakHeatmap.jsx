import React from "react";

export default function StreakHeatmap({ logs }) {
  const streak = logs.length;

  return (
    <div className="text-center mt-6">
      <h2 className="text-lg font-semibold">🔥 {streak}-Day Streak</h2>
      <div className="flex gap-2 justify-center mt-2">
        {logs.slice(-7).map((log, i) => (
          <div key={i} className="w-6 h-6 bg-green-500 rounded-full"></div>
        ))}
      </div>
    </div>
  );
}
