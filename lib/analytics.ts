// Analytics helper for Plausible
// Usage: track('event_name', { prop1: 'value1' })

export function track(eventName: string, props?: Record<string, string | number | boolean>) {
  // No-op on server side
  if (typeof window === "undefined") {
    return;
  }

  // Call Plausible if available
  if (typeof window !== "undefined" && (window as any).plausible) {
    (window as any).plausible(eventName, { props });
  }
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string | number | boolean> }) => void;
  }
}
