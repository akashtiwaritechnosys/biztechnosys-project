/**
 * Biztechnosys Case Studies Database
 * Contains rich content, images, metrics, and testimonials for case studies.
 */

const CASE_STUDIES_DATA = {
  "healthcare": {
    "id": "healthcare",
    "title": "Health Cloud Implementation",
    "clientName": "MedVitals Group",
    "category": "healthcare",
    "categoryLabel": "Healthcare",
    "industry": "healthcare",
    "industryLabel": "Healthcare",
    "solution": "portals",
    "solutionLabel": "Customer Engagement",
    "image": "./images/health-cloud-implementation.png",
    "summary": "Developing robust healthcare engagement portals with Sitecore to unify patient data and personalize care journeys.",
    "timeline": "4 Months",
    "region": "North America",
    "challenge": "MedVitals suffered from fragmented patient data across 14 different legacy platforms. Patients had to log in multiple times to view health records, schedule appointments, or contact doctors. The lack of personalization led to low engagement and high patient attrition.",
    "solution": "Biztechnosys unified patient experiences by implementing Sitecore Health Cloud, integrating Electronic Health Record (EHR) systems with Sitecore's Composable CDP. We deployed a secure patient portal built on Next.js, allowing real-time personalization of health tips, automated checkups, and unified patient profiles.",
    "resultsDescription": "The new platform saw massive engagement increases and reduced patient call center workloads significantly.",
    "metrics": [
      { "value": "150%", "label": "Portal Engagement Increase" },
      { "value": "40%", "label": "Call Support Volume Reduction" },
      { "value": "HIPAA", "label": "100% Compliant Asset Delivery" }
    ],
    "techStack": ["Sitecore DXP", "Sitecore CDP", "Next.js", "Azure", "TailwindCSS"],
    "testimonial": {
      "quote": "Biztechnosys delivered a secure, intuitive health portal that transformed our patient experiences. Their Sitecore implementation expertise was top-notch.",
      "author": "Dr. Amanda Ross",
      "role": "Chief Digital Officer",
      "company": "MedVitals Group",
      "image": "./images/client-img.png"
    }
  },
  "ecommerce": {
    "id": "ecommerce",
    "title": "Commerce Cloud Implementation",
    "clientName": "AeroParts Global",
    "category": "ecommerce",
    "categoryLabel": "E-Commerce",
    "industry": "ecommerce",
    "industryLabel": "E-Commerce",
    "solution": "marketplace",
    "solutionLabel": "B2B/B2C Marketplace",
    "image": "./images/commerce-cloud-implementation.png",
    "summary": "Implementing scalable B2B/B2C marketplace solutions that drive conversions and global brand consistency.",
    "timeline": "6 Months",
    "region": "Europe & Asia",
    "challenge": "AeroParts needed to catalog over 500,000 aircraft components for B2B distributors and B2C consumers. Their legacy system crashed during peak order periods, lacked search filters, and had no localization support for international buyers.",
    "solution": "We implemented Sitecore OrderCloud as a headless commerce solution. Using GraphQL APIs and a React frontend, we built an lightning-fast catalog search capable of listing thousands of parts within milliseconds. Multilingual and multi-currency rules were created to automatically support global buyers.",
    "resultsDescription": "AeroParts achieved a robust global system that runs smoothly under heavy load with dramatic improvements in orders.",
    "metrics": [
      { "value": "230%", "label": "B2B Online Revenue Growth" },
      { "value": "0%", "label": "Downtime During Black Friday Peak" },
      { "value": "3.2s", "label": "Average Page Load Time Reduced" }
    ],
    "techStack": ["Sitecore OrderCloud", "React", "GraphQL", "TailwindCSS", "Azure Search"],
    "testimonial": {
      "quote": "Biztechnosys transformed our complex inventory into a seamless global marketplace. Our distributors are wowed by the speed.",
      "author": "Marcus Vance",
      "role": "VP of Global Commerce",
      "company": "AeroParts Global",
      "image": "./images/client-img.png"
    }
  },
  "cdp": {
    "id": "cdp",
    "title": "Sitecore CDP & Personalization",
    "clientName": "Zenith Retail Group",
    "category": "cdp",
    "categoryLabel": "Data & CDP",
    "industry": "retail",
    "industryLabel": "Retail",
    "solution": "cdp",
    "solutionLabel": "Customer Data & CDP",
    "image": "./images/sales-cloud-implementation.png",
    "summary": "Unifying customer data points to deliver real-time, 1:1 personalization at scale using Sitecore CDP.",
    "timeline": "3 Months",
    "region": "Global",
    "challenge": "Zenith Group has 50+ retail stores and a massive online shop, but they couldn't track whether an online shopper bought items in-store. Marketing emails were generic, leading to a low conversion rate of 1.2%.",
    "solution": "Biztechnosys integrated all offline POS systems and online activity logs into Sitecore CDP. By resolving anonymous web visitors to known customers using CDP identity resolution, we created 360-degree buyer personas. Then, we set up personalized marketing experiences that change in real-time based on live context.",
    "resultsDescription": "The customer purchase journey was fully mapped, enabling highly personalized product recommendations.",
    "metrics": [
      { "value": "360°", "label": "Unified Customer View" },
      { "value": "+45%", "label": "Email Click-Through Rate" },
      { "value": "3.8x", "label": "Higher Personalization Conversions" }
    ],
    "techStack": ["Sitecore CDP", "Sitecore Personalize", "Google Analytics 4", "JavaScript API", "AWS"],
    "testimonial": {
      "quote": "With Biztechnosys, we finally understand our buyers' cross-channel behavior. The personalization results speak for themselves.",
      "author": "Sarah Jenkins",
      "role": "VP of Customer Marketing",
      "company": "Zenith Retail Group",
      "image": "./images/client-img.png"
    }
  },
  "dam": {
    "id": "dam",
    "title": "Sitecore DAM & Content Hub",
    "clientName": "Vanguard Media",
    "category": "dam",
    "categoryLabel": "Digital Assets",
    "industry": "media",
    "industryLabel": "Media & Entertainment",
    "solution": "dam",
    "solutionLabel": "Digital Assets & DAM",
    "image": "./images/service-cloud-implementation.png",
    "summary": "Streamlining global asset management and content workflows with Sitecore's Digital Asset Management solution.",
    "timeline": "3.5 Months",
    "region": "United Kingdom",
    "challenge": "Vanguard's creative teams spent up to 30% of their working hours searching for images, logos, and videos across scattered local servers. File duplication was massive, and copyrighted assets were frequently used past their expiration dates.",
    "solution": "We implemented Sitecore DAM (Content Hub) as the single source of truth for all digital assets. We configured metadata schemas, automated image resizing workflows, and integrated Adobe Creative Cloud. Smart rights-management was put in place to flag expired files automatically.",
    "resultsDescription": "Asset lifecycle management became fully centralized, and creative productivity skyrocketed.",
    "metrics": [
      { "value": "100%", "label": "Asset Governance & Compliance" },
      { "value": "10k+", "label": "Duplicated Assets Cleaned" },
      { "value": "30%", "label": "Faster Asset Approval Workflows" }
    ],
    "techStack": ["Sitecore Content Hub", "Azure AD", "REST API", "Adobe CC Connector"],
    "testimonial": {
      "quote": "Biztechnosys structured our asset library and workflows beautifully. The time we save every week searching for files is incredible.",
      "author": "Elena Rostova",
      "role": "Creative Director",
      "company": "Vanguard Media",
      "image": "./images/client-img.png"
    }
  },
  "pharma": {
    "id": "pharma",
    "title": "Life Science Accelerator",
    "clientName": "BioGenix Lab",
    "category": "pharma",
    "categoryLabel": "Pharma & Life Science",
    "industry": "pharma",
    "industryLabel": "Pharma & Life Science",
    "solution": "compliance",
    "solutionLabel": "Compliance & Operations",
    "image": "./images/mobile-sdk-xamarin.png",
    "summary": "Specialized Sitecore implementation for pharmaceutical giants, ensuring compliance and digital excellence.",
    "timeline": "5 Months",
    "region": "Switzerland",
    "challenge": "BioGenix Lab needed to launch product marketing sites for new therapeutic agents under strict regulatory oversight. Manual content verification was slow, delay-prone, and prone to compliance audit penalties.",
    "solution": "Biztechnosys built a custom Life Science Accelerator on Sitecore. We integrated Veeva Vault for medical review workflows, ensuring any changes in clinical trial databases automatically update on public sites. We also enforced strict FDA/HIPAA compliance controls via automated content checks.",
    "resultsDescription": "Compliance issues were completely eliminated and site spin-up times went from months to days.",
    "metrics": [
      { "value": "100%", "label": "Regulatory Audit Compliance" },
      { "value": "90%", "label": "Reduction in Site Spin-up Time" },
      { "value": "12 Days", "label": "From Development to Live Launch" }
    ],
    "techStack": ["Sitecore Experience Platform", "Veeva Vault", "SAML SSO", "Azure Web Apps"],
    "testimonial": {
      "quote": "The Life Science Accelerator was exactly what we needed to maintain compliance while speeding up our go-to-market. Biztechnosys is a reliable partner.",
      "author": "Robert Chen",
      "role": "Global Compliance Lead",
      "company": "BioGenix Lab",
      "image": "./images/client-img.png"
    }
  },
  "headless": {
    "id": "headless",
    "title": "Legacy to Headless Transformation",
    "clientName": "Nexus Tech Corp",
    "category": "headless",
    "categoryLabel": "DXP Migration",
    "industry": "tech",
    "industryLabel": "High Tech",
    "solution": "headless",
    "solutionLabel": "Headless DXP Migration",
    "image": "./images/sitecore.png",
    "summary": "Modernizing legacy platforms into high-performance, composable headless DXPs using modern frameworks.",
    "timeline": "8 Weeks",
    "region": "Global",
    "challenge": "Nexus Tech Corp ran their global product site on an outdated Sitecore XP instance. Site loading speed was poor (Lighthouse score < 30) and marketers had to rely constantly on developers to update basic promotional copy.",
    "solution": "We migrated Nexus Tech to Sitecore XM Cloud (Headless SaaS). Utilizing Next.js for server-side rendering and Vercel for hosting, we built a modern frontend. Marketers gained complete independence using Sitecore Pages visual editor, and site speed improved instantly.",
    "resultsDescription": "Website load speed became lightning-fast, and hosting costs dropped significantly.",
    "metrics": [
      { "value": "98/100", "label": "Lighthouse Performance Score" },
      { "value": "5x", "label": "Faster Developer Deployments" },
      { "value": "60%", "label": "Infrastructure Cost Reduction" }
    ],
    "techStack": ["Sitecore XM Cloud", "Next.js", "Vercel", "TailwindCSS", "GraphQL"],
    "testimonial": {
      "quote": "We went from clunky, slow page edits to instant publishing. Our web performance has never been this stellar.",
      "author": "David Miller",
      "role": "Head of Engineering",
      "company": "Nexus Tech Corp",
      "image": "./images/client-img.png"
    }
  }
};
