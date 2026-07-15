const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

export interface TrackResponse {
  courier: string;
  trackingId: string;
  origin: string;
  destination: string;
  status: string;
  eta: string;
  confidence: number;
}

export async function detectCourier(
  trackingUrl: string
): Promise<TrackResponse> {
  const response = await fetch(`${API}/api/track`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      trackingUrl,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to detect courier");
  }

  return response.json();
}