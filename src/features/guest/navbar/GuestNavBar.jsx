

import React from 'react'
import MobileGuestNavBar from './MobileGuestNavBar';
import DesktopGuestNavBar from './DesktopGuestNavBar';
import { useWindowSize } from '../../../hooks/useWindowSize';



const GuestNavBar = () => {
    const windowSize = useWindowSize();
    console.log(windowSize);
    const isMobile = windowSize.width < 768;
  return (
    <>
      {
        isMobile ? <MobileGuestNavBar /> : <DesktopGuestNavBar />
      }
    </>
  )
}

export default GuestNavBar;
