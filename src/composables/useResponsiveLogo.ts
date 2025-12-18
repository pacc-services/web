/**
 * Composable for loading responsive logo images
 * Provides multiple sizes for optimal loading on different devices
 */

// Full logo (square format)
import logoFullLarge from '@/assets/images/logo_full.png'
import logoFullMedium from '@/assets/images/logo-variants/logo_full_medium.png'
import logoFullSmall from '@/assets/images/logo-variants/logo_full_small.png'

// Cropped logo (rectangular format)
import logoCroppedLarge from '@/assets/images/logo_full_cropped.png'
import logoCroppedMedium from '@/assets/images/logo-variants/logo_cropped_medium.png'
import logoCroppedSmall from '@/assets/images/logo-variants/logo_cropped_small.png'

export interface ResponsiveLogoSet {
  src: string
  srcset: string
  sizes: string
}

export function useResponsiveLogo() {
  /**
   * Get responsive image attributes for the full logo (square format)
   * Optimized sizes: 256px (mobile), 512px (tablet), 1024px (desktop)
   */
  const getFullLogo = (): ResponsiveLogoSet => {
    return {
      src: logoFullLarge,
      srcset: `${logoFullSmall} 256w, ${logoFullMedium} 512w, ${logoFullLarge} 1024w`,
      sizes: '(max-width: 640px) 256px, (max-width: 1024px) 512px, 1024px',
    }
  }

  /**
   * Get responsive image attributes for the cropped logo (rectangular format)
   * Optimized sizes: 256px (mobile), 512px (tablet), 635px (desktop)
   */
  const getCroppedLogo = (): ResponsiveLogoSet => {
    return {
      src: logoCroppedLarge,
      srcset: `${logoCroppedSmall} 256w, ${logoCroppedMedium} 512w, ${logoCroppedLarge} 635w`,
      sizes: '(max-width: 640px) 256px, (max-width: 1024px) 512px, 635px',
    }
  }

  return {
    getFullLogo,
    getCroppedLogo,
  }
}
