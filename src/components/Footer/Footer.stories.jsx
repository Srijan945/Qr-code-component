import React from "react";
import Footer from './Footer';

export default {
    title: 'Footer',
    component: Footer
}

export const FooterAnchorLarge = () => <Footer variant="footerAnchorLarge"/>;
export const FooterAnchorSmall = () => <Footer variant="footerAnchorSmall"/>;
export const FooterAnchorPlain = () => <Footer />;