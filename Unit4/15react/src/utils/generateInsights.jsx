export function generateInsights(logs) {
  let avgSleep =
    logs.reduce((sum, l) => sum + Number(l.sleep), 0) / logs.length;
  let avgStress =
    logs.reduce((sum, l) => sum + Number(l.stress), 0) / logs.length;

  let insights = [];
  if (avgSleep >= 8) insights.push("You focus better after 8+ hours of sleep.");
  if (avgStress >= 7)
    insights.push("Try reducing stress levels with breaks or mindfulness.");

  return insights;
}
