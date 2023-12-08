import analyticsSuite from 'assets/image/analytics_suite.png';
import cloudCheck from 'assets/image/cloud_check.png';
import customerEngagement from 'assets/image/customer_engagement_enhancement.png';
import eCommerceIntegration from 'assets/image/e-commerce_integration.png';
import vistaSecure from 'assets/image/vista_secure.png';

import ImageOne from 'assets/image/image1.png';
import ImageTwo from 'assets/image/image2.png';
import ImageThree from 'assets/image/image3.png';
import ImageFour from 'assets/image/image4.png';
import ImageFive from 'assets/image/image5.png';

const HERO_SECTION_IMAGE = [
	{
		url: ImageOne,
		alt: ImageOne
	},
	{
		url: ImageTwo,
		alt: ImageTwo
	},
	{
		url: ImageThree,
		alt: ImageThree
	},
	{
		url: ImageFour,
		alt: ImageFour
	},
	{
		url: ImageFive,
		alt: ImageFive
	}
];

const SLIDER_SETTINGS = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 1500,
	responsive: [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 1
			}
		}
	]
};

const SLIDER_SERVICES_SETTINGS = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3500,
	responsive: [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 1
			}
		}
	]
};
const NAVIGATION = [
	{ name: 'Home', href: '/homePage' },
	{ name: 'Features', href: '#' },
	{ name: 'Blogs', href: '/blog' },
	{ name: 'Pricing', href: '/pricing' },
	{
		name: 'Products',
		href: '#',

		submenu: [
			{ name: 'Product 1', href: '/product1' },
			{ name: 'Product 2', href: '/product2' }
		]
	},
	{ name: 'FAQs', href: '#' }
];

const SERVICES_MAPPER = [
	{
		image: analyticsSuite,
		title: 'Shop Vista Analytics Suite',
		description:
			'A comprehensive analytics suite that provides in-depth insights into e-commerce performance, customer behavior, and market trends. It offers actionable data-driven strategies to enhance decision-making and optimize business performance'
	},
	{
		image: cloudCheck,
		title: 'VistaScale Cloud Infrastructure',
		description:
			'Scalable and resilient cloud infrastructure solutions tailored for e-commerce businesses. This service optimizes performance, handles traffic spikes, and ensures high availability for online storefronts.'
	},
	{
		image: customerEngagement,
		title: 'VistaAI Customer Engagement Enhancement',
		description:
			'Leveraging artificial intelligence and machine learning, this service offers personalized customer experiences, targeted marketing campaigns, and predictive analytics to increase customer engagement and retention.'
	},
	{
		image: eCommerceIntegration,
		title: 'VistaSync E-commerce Integration',
		description:
			'An integration platform that seamlessly synchronizes multiple e-commerce platforms, streamlining operations, inventory management, and sales channels. This service ensures consistency and efficiency across various online marketplaces.'
	},
	{
		image: vistaSecure,
		title: 'VistaSecure',
		description:
			'A robust security suite tailored for e-commerce, providing comprehensive protection against cyber threats, ensuring data integrity, secure transactions, and compliance with industry standards.'
	}
];

const SITEMAP = [
	{
		title: 'Company',
		links: ['About Us', 'Careers', 'Our Team', 'Projects']
	},
	{
		title: 'Help Center',
		links: ['Discord', 'Twitter', 'GitHub', 'Contact Us']
	},
	{
		title: 'Resources',
		links: ['Blog', 'Newsletter', 'Free Products', 'Affiliate Program']
	},
	{
		title: 'Products',
		links: ['Templates', 'UI Kits', 'Icons', 'Mockups']
	}
];

const PRICE_COMPARISON_HEADER = ['', 'Starter', 'Company', 'Enterprise'];

const PRICE_COMPARISON_DATA = [
	['Basic components', true, true, true],
	['Another component', false, true, false],
	['Another component', false, true, false],
	['Another component', true, true, false],
	['Another component', false, false, false],
	['Another component', false, true, true],
	['Another component', true, true, false],
	['Another component', false, false, true],
	['Another component', false, true, false],
	['Another component', false, true, false],
	['Another component', true, true, false]
];
export {
	HERO_SECTION_IMAGE,
	NAVIGATION,
	PRICE_COMPARISON_DATA,
	PRICE_COMPARISON_HEADER,
	SERVICES_MAPPER,
	SITEMAP,
	SLIDER_SERVICES_SETTINGS,
	SLIDER_SETTINGS
};
