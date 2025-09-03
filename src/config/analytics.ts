// Google Analytics Configuration
export const GA_TRACKING_ID = 'G-L72ZFT62PN'; // Your Google Analytics Measurement ID

// Google Analytics Event Tracking
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track portfolio interactions
export const trackPortfolioInteraction = (action: string, projectName?: string) => {
  trackEvent(action, 'Portfolio', projectName);
};

// Track case study views
export const trackCaseStudyView = (caseStudyName: string) => {
  trackEvent('view_case_study', 'Case Study', caseStudyName);
};

// Track contact interactions
export const trackContactInteraction = (method: string) => {
  trackEvent('contact', 'Contact', method);
};
