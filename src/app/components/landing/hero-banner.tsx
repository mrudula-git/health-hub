import React from 'react';

function HeroBanner() {
    return (
        <div>
            <section className="container component-order text-shadow-xl" data-componentname="YourBannerComponent" data-componentid="your_banner_id" component-order="0" data-componentlocation="your_location">
                <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-purple-700 h-auto md:h-96">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:w-1/2 md:flex-shrink-0">
                        <div className="text-yellow-400">
                            <h2 className="text-3xl md:hidden font-bold mb-2 md:mb-4">Lorem Ipsum Text<br />Lorem Ipsum Subtext</h2>
                            <h2 className="hidden md:block text-xl font-bold mb-2 md:mb-4">Lorem Ipsum Text<br />Lorem Ipsum Subtext</h2>
                            <div id="bntsHeroText">
                                <h1 className="text-4xl font-bold mb-2 md:mb-4">Lorem Ipsum Heading</h1>
                                <h2 className="text-2xl mb-4 md:mb-8">Lorem Ipsum Subheading</h2>
                            </div>
                            <div className="mt-4">
                                <a
                                    data-link-type="outbound"
                                    data-link-text="Your CTA Text"
                                    data-link-url="YOUR_CTA_URL"
                                    id="your_cta_id"
                                    className="bg-yellow-500 text-purple-700 px-6 py-3 rounded-full inline-block hover:bg-yellow-400"
                                    href="YOUR_CTA_URL"
                                    target="_blank"
                                >
                                    Your CTA Text
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:h-96">
                        <div className="bg-cover bg-center h-48 md:h-full" style={{ backgroundImage: "url('https://caas.athenahealth.com/sites/default/files/styles/webp_image_style/public/2024/01/Hero-Homepage-Desktop_2x.webp?itok=SVsyICkA')" }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HeroBanner;
