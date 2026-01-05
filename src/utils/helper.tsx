// Base path for subdirectory deployment (e.g., '/staging')
// Change this value when deploying to a different subdirectory or use '' for localhost/root
export const BASE_PATH = '/staging';

// Helper to get asset URL with basePath for CSS backgrounds
export const getAssetPath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
};

export function currencyFormatter(amount: number, currency = "INR") {
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0
    });
    const result = formatter.format(amount);
    return result;
}

// Utility function to get the site URL with fallback
export const getSiteUrl = (): string => {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://drsomaplasticsurgery.com';
};

// Utility function to get full URL for a path
export const getFullUrl = (path: string): string => {
  const siteUrl = getSiteUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${cleanPath}`;
};
