/**
 * Composable for Google Analytics tracking
 * Note: Google Tag Manager ID should be replaced with actual ID in production
 */

// Event types for type safety
export interface AnalyticsEvent {
  event: string
  category?: string
  label?: string
  value?: number
  [key: string]: unknown
}

export const useAnalytics = () => {
  /**
   * Track a page view
   */
  const trackPageView = (path: string, title?: string) => {
    if (typeof window === 'undefined') return

    // GTM dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: path,
        title: title || document.title,
      })
    }
  }

  /**
   * Track a custom event
   */
  const trackEvent = (eventData: AnalyticsEvent) => {
    if (typeof window === 'undefined') return

    // GTM dataLayer
    if (window.dataLayer) {
      window.dataLayer.push(eventData)
    }
  }

  /**
   * Track button clicks
   */
  const trackButtonClick = (buttonName: string, category = 'engagement') => {
    trackEvent({
      event: 'button_click',
      category,
      label: buttonName,
    })
  }

  /**
   * Track form submissions
   */
  const trackFormSubmission = (formName: string) => {
    trackEvent({
      event: 'form_submit',
      category: 'conversion',
      label: formName,
    })
  }

  /**
   * Track outbound link clicks
   */
  const trackOutboundLink = (url: string) => {
    trackEvent({
      event: 'outbound_link',
      category: 'engagement',
      label: url,
    })
  }

  /**
   * Track scroll depth (useful for engagement metrics)
   */
  const trackScrollDepth = (depth: number) => {
    trackEvent({
      event: 'scroll_depth',
      category: 'engagement',
      value: depth,
    })
  }

  return {
    trackPageView,
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackOutboundLink,
    trackScrollDepth,
  }
}

// Extend Window type for TypeScript
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}
