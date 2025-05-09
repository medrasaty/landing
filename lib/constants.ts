// Set a fixed launch date (2 months from a specific reference date)
// This ensures all users see the same countdown regardless of when they visit
export const LAUNCH_DATE = new Date("2025-07-08T00:00:00Z") // Fixed date: July 8, 2025

// Format the launch date for display
export const FORMATTED_LAUNCH_DATE = LAUNCH_DATE.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
})
