import { Platform, useWindowDimensions } from 'react-native';

const BREAKPOINTS = { mobile: 768, tablet: 1024 };

export function useResponsive() {
  const { width, height } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const isDesktop = isWeb && width > BREAKPOINTS.tablet;
  const isTablet = isWeb && width > BREAKPOINTS.mobile && width <= BREAKPOINTS.tablet;
  const isMobile = !isWeb || width <= BREAKPOINTS.mobile;
  const showSidebar = isWeb && width > BREAKPOINTS.mobile;

  return { isWeb, isDesktop, isTablet, isMobile, showSidebar, width, height };
}

export function responsiveValue(mobile, tablet, desktop, breakpoint) {
  if (breakpoint === 'desktop') return desktop;
  if (breakpoint === 'tablet') return tablet;
  return mobile;
}
