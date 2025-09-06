// Google Tag Manager TypeScript definitions

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export interface GTMEvent {
  event: string;
  [key: string]: unknown;
}

export interface GTMPageView {
  event: 'page_view';
  page_title: string;
  page_location: string;
  page_path: string;
}

export interface GTMCustomEvent {
  event: string;
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameters?: Record<string, unknown>;
}

// Helper function to push events to dataLayer
export const pushToDataLayer = (data: GTMEvent | GTMPageView | GTMCustomEvent) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
  }
};

// Helper function to track page views
export const trackPageView = (title: string, path: string) => {
  pushToDataLayer({
    event: 'page_view',
    page_title: title,
    page_location: window.location.href,
    page_path: path,
  });
};

export {};
