// Google Analytics utility functions
export const GA_TRACKING_ID = 'G-7LF9EQM7KP';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Custom event for form submissions
export const trackFormSubmission = (formName: string) => {
  event({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
};

// Custom event for button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  event({
    action: 'click',
    category: 'Button',
    label: `${buttonName} - ${location}`,
  });
};

// Custom event for service page views
export const trackServiceView = (serviceName: string) => {
  event({
    action: 'view',
    category: 'Service',
    label: serviceName,
  });
};

// Custom event for contact actions
export const trackContactAction = (action: string, method: string) => {
  event({
    action,
    category: 'Contact',
    label: method,
  });
};
