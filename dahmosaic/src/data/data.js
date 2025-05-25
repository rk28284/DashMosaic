export const dashboardData = {
  CSPM: {
    title: "CSPM Executive Dashboard",
    widgets: [
      { id: "cloudAccounts", name: "Cloud Accounts", content: "Connected: 2, Not Connected: 0" },
      { id: "riskAssessment", name: "Cloud Account Risk Assessment", content: "Passed: 7253, Failed: 1989" }
    ]
  },
  CWPP: {
    title: "CWPP Dashboard",
    widgets: [
      { id: "namespaceAlerts", name: "Top 5 Namespace Specific Alerts", content: "No Graph data available!" },
      { id: "workloadAlerts", name: "Workload Alerts", content: "No Graph data available!" }
    ]
  },
  Registry: {
    title: "Registry Scan",
    widgets: [
      { id: "riskAssessment", name: "Image Risk Assessment", content: "1470 Total Vulnerabilities" },
      { id: "securityIssues", name: "Image Security Issues", content: "Critical: 2, High: 5" }
    ]
  }
};