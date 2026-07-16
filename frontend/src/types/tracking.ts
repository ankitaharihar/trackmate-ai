export interface TrackingData {
  courier: string;
  trackingId: string;
  origin: string;
  destination: string;
  status: string;
  eta: string;
  confidence: number;
}