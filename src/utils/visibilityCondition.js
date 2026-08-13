export const getVisibilityLevel = (visibilityKm) => {
  if (visibilityKm >= 10) return "Excellent";
  if (visibilityKm >= 7) return "Good";
  if (visibilityKm >= 5) return "Moderate";
  if (visibilityKm >= 2) return "Poor";

  return "Very Poor";
};
