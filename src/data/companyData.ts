/**
 * Amarnaathh Engineering - Master Data & Specifications
 */

import heroImage from '@/src/assets/images/hero_industrial_machinery_1791217410122.jpg';
import plantImage from '@/src/assets/images/facility_manufacturing_plant_1791217438802.jpg';
import medicalImage from '@/src/assets/images/machinery_medical_textile_1791217461154.jpg';
import hygieneImage from '@/src/assets/images/machinery_hygiene_production_1791217483451.jpg';
import spinningImage from '@/src/assets/images/machinery_spinning_industrial_1791217495307.jpg';

export interface ProductSpec {
  name: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  model: string;
  category: 'Medical Textile' | 'Hygiene Product' | 'Spinning & Textile' | 'Industrial Machinery';
  shortDesc: string;
  fullDesc: string;
  image: string;
  productionSpeed: string;
  powerRequirement: string;
  dimensions: string;
  weight: string;
  features: string[];
  specs: ProductSpec[];
  applications: string[];
  certifications: string[];
  priceRange: string;
}

export interface LocationItem {
  id: string;
  title: string;
  category: 'Headquarters & Heavy Plant' | 'Precision CNC Division' | 'Textile Machinery Plant' | 'International Hub';
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  hours: string;
  facilitySize: string;
  specialization: string;
  coordinates: { lat: number; lng: number };
}

export interface BlogItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  author: string;
  authorRole: string;
  image: string;
}

export interface FaqItem {
  id: string;
  category: 'General' | 'Products' | 'Orders & Enquiries' | 'Installation' | 'Support';
  question: string;
  answer: string;
}

export const COMPANY_INFO = {
  name: 'Amarnaathh Engineering',
  tagline: 'Engineering Machinery. Built for Performance.',
  foundedYear: 1998,
  experienceYears: '25+',
  clientsCount: '6500+',
  countriesCount: '50+',
  machineryCount: '100+',
  heroImage,
  facilityImage: plantImage,
  headquarters: 'Ahmedabad, Gujarat, India',
  phone: '+91 (079) 2289-4500',
  whatsapp: '+91 98250 18450',
  email: 'info@amarnaathhengineering.com',
  salesEmail: 'sales@amarnaathhengineering.com',
  workingHours: 'Monday - Saturday: 08:30 - 19:00 IST',
};

export const FEATURED_CATEGORIES = [
  {
    id: 'medical-textile',
    name: 'Medical Textile Machinery',
    description: 'Precision machinery engineered for high-output surgical mask, sterile nonwoven, and medical drape manufacturing.',
    image: medicalImage,
    modelCount: '14 Models',
  },
  {
    id: 'hygiene-product',
    name: 'Hygiene Product Machinery',
    description: 'Fully automated continuous lines for high-speed sanitary napkin, adult diaper, and baby pull-up converting.',
    image: hygieneImage,
    modelCount: '18 Models',
  },
  {
    id: 'spinning-textile',
    name: 'Spinning & Textile Machinery',
    description: 'Heavy-duty ring spinning frames, precision tension winders, and advanced fabric finishing equipment.',
    image: spinningImage,
    modelCount: '22 Models',
  },
  {
    id: 'industrial-machinery',
    name: 'Industrial Machinery',
    description: 'Custom heavy-gauge nonwoven slitters, thermal calenders, ultrasonic welders, and automated packaging systems.',
    image: heroImage,
    modelCount: '28 Models',
  },
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  {
    id: 'ae-msk-500',
    name: 'High-Speed Medical Mask Production System',
    model: 'AE-MSK-500 Pro',
    category: 'Medical Textile',
    shortDesc: 'Fully automated 3-ply and surgical mask making machine with synchronized ultrasonic welding.',
    fullDesc: 'The AE-MSK-500 Pro is designed for high-capacity, sterile production of certified surgical masks. Featuring multi-spool automated tension-controlled feed, dual ultrasonic ear-loop weld heads, and an integrated optical defect ejection unit, it guarantees maximum operational uptime and uniform sealing strength.',
    image: medicalImage,
    productionSpeed: '450 - 550 pcs/min',
    powerRequirement: '12.5 kW / 415V 3-Phase',
    dimensions: '6500 × 2800 × 1950 mm',
    weight: '3,800 kg',
    features: [
      'Dual-axis servo-driven feeding system with zero-slack nonwoven tensioners',
      'Ultrasonic ear-loop attachment with real-time pressure feedback',
      'Touchscreen HMI with recipe memory and automatic batch counter',
      'CE & FDA cleanroom compliant stainless-steel touch surfaces',
    ],
    specs: [
      { name: 'Rated Output Speed', value: 'Up to 550 pieces per minute' },
      { name: 'Fabric Compatibility', value: 'Spunbond + Meltblown + Spunbond (18–50 GSM)' },
      { name: 'Nose Wire Feed', value: 'Dual aluminum core / plastic core wire' },
      { name: 'Air Pressure Requirement', value: '0.6 - 0.8 MPa (dry compressed air)' },
      { name: 'Control Architecture', value: 'Siemens S7-1500 PLC with Profinet Bus' },
      { name: 'Welding Frequency', value: '20 kHz Precision Ultrasonic Generators' },
    ],
    applications: [
      'Surgical 3-Ply Face Masks',
      'Sterile Operating Room Barrier Masks',
      'Industrial Dust Respirators',
    ],
    certifications: ['CE Certified', 'ISO 9001:2015', 'GMP Cleanroom Compliant'],
    priceRange: 'Industrial Tier A',
  },
  {
    id: 'ae-hy-sn800',
    name: 'Ultra-Thin Sanitary Napkin Automatic Line',
    model: 'AE-HY-SN800 Max',
    category: 'Hygiene Product',
    shortDesc: 'Continuous servo-controlled converting line for ultra-thin and maxi wing sanitary pads.',
    fullDesc: 'Engineered for relentless 24/7 production, the AE-HY-SN800 Max integrates core-forming drum forming, SAP (Super Absorbent Polymer) precision doser, dynamic contour sealing, and quick-fold pouch wrapper into one unified, vibration-dampened frame.',
    image: hygieneImage,
    productionSpeed: '800 - 1,000 pads/min',
    powerRequirement: '160 kW / 415V 50Hz',
    dimensions: '22,000 × 4,500 × 3,200 mm',
    weight: '28,500 kg',
    features: [
      'Full electronic servo synchronisation across all cutting and embossing modules',
      'Micro-dosing SAP applicator with ±0.05g weight precision',
      'Automated web-splicing at maximum line velocity with zero stoppage',
      'Modular die-cutting units for quick 2-hour size changeover',
    ],
    specs: [
      { name: 'Design Speed', value: '1,200 pads/minute' },
      { name: 'Stable Operating Speed', value: '800 - 1,000 pads/minute' },
      { name: 'Pad Length Range', value: '240 mm, 280 mm, 320 mm (Night Use)' },
      { name: 'SAP Uniformity Variance', value: '< 1.8% CV across batch' },
      { name: 'Drive System', value: 'Full Servo Motion Control (16 Synchronized Axes)' },
      { name: 'Safety Enclosure', value: 'Interlocked polycarbonate perimeter with optical light curtains' },
    ],
    applications: [
      'Ultra-thin wing sanitary pads',
      'Overnight heavy-flow pads with ADL layer',
      'Biodegradable organic cotton feminine pads',
    ],
    certifications: ['CE Certified', 'ISO 9001:2015', 'TUV Rheinland Machinery Directive'],
    priceRange: 'High Output Enterprise',
  },
  {
    id: 'ae-sp-1200',
    name: 'Precision High-Draft Ring Spinning Frame',
    model: 'AE-SP-1200 Elite',
    category: 'Spinning & Textile',
    shortDesc: 'Heavy-duty 1,200-spindle textile spinning frame with electronic draft control and auto-doffer.',
    fullDesc: 'The AE-SP-1200 Elite delivers supreme yarn consistency, minimal end breakage, and lowest energy consumption per kilogram of spun yarn. Built upon heavily ribbed cast-iron end frames that dissipate harmonic vibrations at spindle speeds up to 25,000 RPM.',
    image: spinningImage,
    productionSpeed: 'Spindle speeds up to 25,000 RPM',
    powerRequirement: '55 kW + 45 kW High-Efficiency IE4 Motors',
    dimensions: '48,000 × 1,020 × 2,250 mm',
    weight: '16,200 kg',
    features: [
      'Electronic Drafting System (EDS) for instantaneous twist and draft adjustments',
      'Ultra-reliable cop auto-doffing cycle under 90 seconds',
      'Low-power suction manifold with variable frequency invertor drive',
      'Individual spindle monitoring with optical yarn sensor network',
    ],
    specs: [
      { name: 'Number of Spindles', value: 'Up to 1,200 spindles per frame' },
      { name: 'Spindle Gauge', value: '70 mm / 75 mm standard' },
      { name: 'Ring Diameter', value: '36 mm / 38 mm / 40 mm' },
      { name: 'Yarn Count Range', value: 'Ne 10s to Ne 120s (Combed & Carded)' },
      { name: 'Doffing Mechanism', value: 'Gripper rail with integrated tube peg tray loader' },
      { name: 'Bearings', value: 'SKF Sweden high-precision sealed spindle bolsters' },
    ],
    applications: [
      '100% Cotton combed yarn spinning',
      'Poly-cotton blended yarns for technical textiles',
      'High-tenacity synthetic filament spinning',
    ],
    certifications: ['ISO 9001:2015', 'CE Machinery Directive Compliant'],
    priceRange: 'Industrial Tier A',
  },
  {
    id: 'ae-ind-sr3000',
    name: 'Heavy Industrial Nonwoven Slitter & Rewinder',
    model: 'AE-IND-SR3000 Master',
    category: 'Industrial Machinery',
    shortDesc: 'High-speed master roll slitter rewinder for spunmelt, needlepunch, and composite industrial fabrics.',
    fullDesc: 'Engineered for converting wide-width master rolls up to 3,400 mm into precision narrow slit coils. Employs independent pneumatic shear knives, digital edge-position guides (EPC), and dual differential rewinding shafts that maintain constant web tension throughout roll build-up.',
    image: heroImage,
    productionSpeed: '600 - 800 m/min continuous',
    powerRequirement: '45 kW / 415V 50Hz',
    dimensions: '7,200 × 4,600 × 2,400 mm',
    weight: '11,400 kg',
    features: [
      'Digital ultrasonic web guide with high-contrast edge sensor',
      'Individual servo knife positioning with automatic millimeter indexing',
      'Floor-level hydraulic reel unwind pickup arms for 1,500 kg jumbo rolls',
      'Dynamic rewinding tension compensation with closed-loop load cells',
    ],
    specs: [
      { name: 'Maximum Web Width', value: '3,200 mm (expandable to 3,600 mm)' },
      { name: 'Minimum Slit Width', value: '45 mm' },
      { name: 'Maximum Unwind Diameter', value: '1,500 mm' },
      { name: 'Maximum Rewind Diameter', value: '1,200 mm' },
      { name: 'Slitting System', value: 'Rotary shear circular knives / crush cut blades' },
      { name: 'Shaft Technology', value: 'Friction differential multi-ring rewinding shafts' },
    ],
    applications: [
      'Spunbond and SMS nonwoven master roll converting',
      'Geotextile and agricultural crop cover rolls',
      'Automotive interior acoustic felt fabric slitting',
    ],
    certifications: ['CE Certified', 'ISO 9001:2015'],
    priceRange: 'Heavy Industrial Capital Equipment',
  },
  {
    id: 'ae-nw-2400',
    name: 'Thermal Nonwoven Bonding Calender',
    model: 'AE-NW-2400 Calender',
    category: 'Medical Textile',
    shortDesc: 'High-precision heated oil double-roll calender for thermal bonding of medical & hygiene web.',
    fullDesc: 'Provides exact surface embossing, tensile strength bonding, and calibrated thickness for spunbond medical fabrics. The rolls feature internal peripheral tri-zone thermal oil heating that maintains temperature deviation under ±1.0°C across the full 2,400 mm face length.',
    image: plantImage,
    productionSpeed: 'Up to 350 m/min',
    powerRequirement: '90 kW heating + 30 kW drive',
    dimensions: '5,800 × 3,200 × 2,600 mm',
    weight: '14,800 kg',
    features: [
      'Forged alloy steel engraved embossing roll with hydraulic deflection compensation',
      'Thermal oil circulation heating up to 260°C with PID micro-control',
      'Hydraulic nip pressure loading up to 150 N/mm linear force',
      'Emergency instantaneous nip opening under 0.25 seconds for fabric safety',
    ],
    specs: [
      { name: 'Working Roll Face Width', value: '2,400 mm' },
      { name: 'Maximum Linear Pressure', value: '150 N/mm' },
      { name: 'Operating Temperature', value: 'Ambient to 250°C' },
      { name: 'Temperature Accuracy', value: '±1.0°C across entire roll width' },
      { name: 'Roll Hardness', value: 'HRC 60-62 mirror ground alloy steel' },
      { name: 'Hydraulic System', value: 'Rexroth Germany proportional hydraulic valves' },
    ],
    applications: [
      'Surgical gown and drape laminates',
      'Sterile medical wraps and PPE fabrics',
      'Micro-porous breathable film lamination',
    ],
    certifications: ['CE Certified', 'ISO 9001:2015'],
    priceRange: 'Industrial Tier A',
  },
  {
    id: 'ae-hy-bd1000',
    name: 'Automatic Baby Pull-Up Pants Line',
    model: 'AE-HY-BD1000 Pant',
    category: 'Hygiene Product',
    shortDesc: 'Continuous high-velocity baby diaper and pull-up pant converting machine with ultrasonic side-sealing.',
    fullDesc: 'State-of-the-art baby pant production machinery with 360-degree elastic waistband applicator, ultrasonic side seams, breathable film lamination, and automated camera inspection system with high-speed reject gate.',
    image: hygieneImage,
    productionSpeed: '650 - 750 pants/min',
    powerRequirement: '220 kW / 415V 50Hz',
    dimensions: '35,000 × 5,200 × 3,600 mm',
    weight: '42,000 kg',
    features: [
      'Continuous 360° elastic thread unwinding and tension regulation',
      'Non-stop zero-speed automated material splicing',
      'Cognex AI visual inspection system for elastic integrity and surface contamination',
      'Automatic stacker and robotic cartoner integration ready',
    ],
    specs: [
      { name: 'Stable Operating Speed', value: '700 pants/minute' },
      { name: 'Sizes Produced', value: 'S, M, L, XL, XXL (Modular tool change)' },
      { name: 'Efficiency Rate', value: '≥ 92% continuous line efficiency' },
      { name: 'Product Reject Rate', value: '≤ 1.5% during steady state' },
      { name: 'Air Consumption', value: '3,800 NL/min at 0.65 MPa' },
    ],
    applications: [
      'Baby pull-up training pants',
      'Elastic ear tape baby diapers',
      'Overnight toddler pants',
    ],
    certifications: ['CE Certified', 'ISO 9001:2015', 'TUV Rheinland'],
    priceRange: 'Enterprise High-Output Line',
  },
];

export const CAPABILITIES = [
  {
    id: 'engineering-expertise',
    title: 'Engineering Expertise',
    description: 'Precision-designed machinery for demanding production environments.',
    details: 'Our in-house design office comprises 45+ senior mechanical and control engineers utilizing 3D finite-element simulation, dynamic thermal modeling, and CNC multi-axis tooling to manufacture machinery that operates seamlessly under heavy 24/7 duty cycles.',
    stat: '45+ Design Engineers',
  },
  {
    id: 'reliable-manufacturing',
    title: 'Reliable Manufacturing',
    description: 'Built with quality-focused manufacturing processes.',
    details: 'All structural chassis, precision roller mandrels, and cutting assemblies are machined in our climate-controlled facilities using high-grade forged alloy steel, hardened to exact Rockwell tolerances and balanced dynamically to ISO G1.0 standards.',
    stat: 'ISO 9001:2015 Certified',
  },
  {
    id: 'global-reach',
    title: 'Global Reach',
    description: 'Supporting customers across multiple international markets.',
    details: 'With turnkey installations in over 50 nations across Europe, the Middle East, Southeast Asia, Africa, and the Americas, our export engineering team handles multimodal shipping, port logistics, and on-site overseas commissioning.',
    stat: '50+ Export Nations',
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    description: 'Ongoing assistance from enquiry to installation and support.',
    details: 'Every machine is backed by comprehensive operator training, remote telemetry diagnostics, and guaranteed dispatch of critical replacement consumables and genuine spare parts within 48 hours worldwide.',
    stat: '24/7 Technical Dispatch',
  },
];

export const GLOBAL_REGIONS = [
  {
    region: 'South & Southeast Asia',
    hub: 'India (HQ), Bangladesh, Vietnam, Indonesia, Sri Lanka, Thailand',
    highlight: 'Over 3,800 active machines operating in leading textile hubs.',
    code: 'SEA',
    percentage: '48%',
  },
  {
    region: 'Middle East & North Africa',
    hub: 'UAE (Regional Hub), Saudi Arabia, Egypt, Turkey, Oman',
    highlight: 'Dedicated spare-parts and engineering service bureau in JAFZA, Dubai.',
    code: 'MENA',
    percentage: '24%',
  },
  {
    region: 'Europe & UK',
    hub: 'Germany, Italy, Poland, United Kingdom, Spain',
    highlight: 'CE marked machinery adhering to European Machinery Directive 2006/42/EC.',
    code: 'EUR',
    percentage: '14%',
  },
  {
    region: 'Americas & Sub-Saharan Africa',
    hub: 'USA, Mexico, Kenya, Nigeria, South Africa',
    highlight: 'Rapidly expanding installations in technical medical nonwovens and hygiene.',
    code: 'AFR/AME',
    percentage: '14%',
  },
];

export const LOCATIONS: LocationItem[] = [
  {
    id: 'unit-1',
    title: 'Unit 1: Corporate Headquarters & Heavy Fabrication Plant',
    category: 'Headquarters & Heavy Plant',
    address: 'Plot No. 42-45, Phase III, Kathwada GIDC Industrial Area',
    city: 'Ahmedabad',
    state: 'Gujarat',
    country: 'India',
    phone: '+91 (079) 2289-4500',
    email: 'ahmedabad.plant@amarnaathhengineering.com',
    hours: 'Mon - Sat: 08:30 - 19:00 IST',
    facilitySize: '120,000 sq. ft. heavy fabrication bay',
    specialization: 'Heavy structural chassis, master slitter rewinders, ring frames, executive board',
    coordinates: { lat: 23.045, lng: 72.671 },
  },
  {
    id: 'unit-2',
    title: 'Unit 2: Precision CNC & Automation Division',
    category: 'Precision CNC Division',
    address: 'Sector 8, Sanand Industrial Park, Phase II',
    city: 'Sanand, Ahmedabad',
    state: 'Gujarat',
    country: 'India',
    phone: '+91 (079) 2965-1100',
    email: 'automation@amarnaathhengineering.com',
    hours: 'Mon - Sat: 08:00 - 20:00 IST',
    facilitySize: '85,000 sq. ft. CNC clean machining center',
    specialization: 'Multi-axis Japanese CNC milling, ultrasonic welding head tuning, PLC integration',
    coordinates: { lat: 22.986, lng: 72.378 },
  },
  {
    id: 'unit-3',
    title: 'Unit 3: Textile & Hygiene Converting Plant',
    category: 'Textile Machinery Plant',
    address: 'Avinashi Road, Peelamedu Industrial Corridor',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    country: 'India',
    phone: '+91 (0422) 257-8920',
    email: 'coimbatore@amarnaathhengineering.com',
    hours: 'Mon - Sat: 08:30 - 18:30 IST',
    facilitySize: '95,000 sq. ft. trial and testing floor',
    specialization: 'Sanitary napkin converting lines, medical mask units, spinning spindle assembly',
    coordinates: { lat: 11.026, lng: 77.014 },
  },
  {
    id: 'unit-4',
    title: 'International Hub: Middle East & African Technical Bureau',
    category: 'International Hub',
    address: 'JAFZA One Tower, Office 1402, Jebel Ali Free Zone',
    city: 'Dubai',
    state: 'Dubai',
    country: 'United Arab Emirates',
    phone: '+971 4 881 7420',
    email: 'dubai@amarnaathhengineering.com',
    hours: 'Sun - Thu: 09:00 - 18:00 GST',
    facilitySize: 'Regional parts warehouse & rapid response center',
    specialization: 'Middle East and African client engineering dispatch, genuine parts stocking',
    coordinates: { lat: 24.985, lng: 55.088 },
  },
];

export const CLIENT_LOGOS = [
  { name: 'Aditya Birla Group', tag: 'Textile & Fibers' },
  { name: 'Welspun Global', tag: 'Home & Technical Textiles' },
  { name: 'Arvind Mills', tag: 'Denim & Advanced Fabrics' },
  { name: 'Raymond Textiles', tag: 'Worsted & Suiting' },
  { name: 'Vardhman Group', tag: 'Spinning & Yarns' },
  { name: 'Trident Limited', tag: 'Nonwoven & Terry' },
  { name: 'Toray Industries', tag: 'Performance Synthetics' },
  { name: 'Freudenberg', tag: 'Medical Nonwovens' },
];

export const TESTIMONIALS = [
  {
    quote: 'Amarnaathh’s high-speed hygiene line achieved 99.2% operational efficiency within 3 weeks of commissioning at our Gujarat plant. Their build quality easily matches European benchmarks at an exceptional cost of ownership.',
    author: 'Vikramaditya Shah',
    role: 'Vice President of Manufacturing',
    company: 'Apex Hygiene Global Ltd.',
  },
  {
    quote: 'The precision ultrasonic slitters provided by Amarnaathh have run 24 hours a day for four consecutive years with zero unplanned stoppages. The engineering tolerance and mechanical rigidity are outstanding.',
    author: 'Rajiv Singhania',
    role: 'Technical Director',
    company: 'Vardhman Technical Textiles',
  },
  {
    quote: 'Exporting complete turnkey production lines from Amarnaathh to our UAE facility was completely seamless. Their overseas installation crew completed trial batches five days ahead of our original deadline.',
    author: 'Tariq Al-Mansoor',
    role: 'Head of Plant Operations',
    company: 'Gulf Nonwoven Converting LLC',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Heavy Gantry Precision CNC Machining',
    category: 'Factory',
    description: 'Machining monolithic steel chassis in our Unit 2 Sanand facility to micron-grade tolerances.',
    image: plantImage,
    featured: true,
  },
  {
    id: 'gal-2',
    title: 'Medical Mask Line Ultrasonic Welding Tuning',
    category: 'Machinery',
    description: 'Engineers calibrating 20 kHz ultrasonic horns for airtight surgical ear-loop bonding.',
    image: medicalImage,
    featured: false,
  },
  {
    id: 'gal-3',
    title: 'Hygiene Napkin High-Speed Drum Assembly',
    category: 'Products',
    description: 'Core forming drum synchronization prior to final factory acceptance testing (FAT).',
    image: hygieneImage,
    featured: false,
  },
  {
    id: 'gal-4',
    title: 'Industrial Slitter Rewinder Factory Acceptance',
    category: 'Installation',
    description: '3.2-meter wide nonwoven web undergoing dynamic tension calibration at 700 m/min.',
    image: heroImage,
    featured: false,
  },
  {
    id: 'gal-5',
    title: 'Precision Ring Spindle Bolster Assembly',
    category: 'Machinery',
    description: 'Dynamic balancing of high-speed spindle rotors verified with laser vibrometry.',
    image: spinningImage,
    featured: false,
  },
  {
    id: 'gal-6',
    title: 'International Export Crating & Humidity Protection',
    category: 'Factory',
    description: 'Heavy machinery hermetically sealed with vapor-barrier foil for maritime transit.',
    image: plantImage,
    featured: false,
  },
];

export const BLOG_POSTS: BlogItem[] = [
  {
    id: 'blog-1',
    title: 'Optimizing Production Speed in Nonwoven Hygiene Converting Lines',
    category: 'Engineering & Manufacturing',
    date: 'February 18, 2026',
    readTime: '6 min read',
    summary: 'How full-servo motion synchronization and automated roll splicing eliminate bottleneck downtime in modern sanitary pad and diaper manufacturing.',
    content: [
      'In high-speed hygiene product converting, downtime is exponentially expensive. Traditional mechanically-geared line shafts suffer from mechanical play, belt wear, and lengthy changeover times when alternating between product sizes.',
      'By transitioning to electronic multi-axis servo architectures, modern lines achieve independent position feedback across rotary cutters, embossing rollers, and SAP applicators. This design eliminates physical gear wear while maintaining web register down to ±0.2 mm at line speeds over 800 units per minute.',
      'Our recent factory trials demonstrated that pairing full-servo drives with zero-speed automated web splicing drops operational waste from 4.2% to under 1.2%, directly improving raw material yield across nonwoven reels.',
    ],
    author: 'K. Patel',
    authorRole: 'Chief Technology Officer',
    image: hygieneImage,
  },
  {
    id: 'blog-2',
    title: 'The Transition to Medical-Grade Meltblown: Engineering Standards and Quality Control',
    category: 'Medical Textiles',
    date: 'January 28, 2026',
    readTime: '5 min read',
    summary: 'Analyzing the strict mechanical tolerances and cleanroom air handling required for manufacturing certified surgical nonwoven barrier fabrics.',
    content: [
      'Producing certified meltblown filtration media with Bacterial Filtration Efficiency (BFE) exceeding 99% requires meticulous control over die-tip temperature uniformity and electrostatic charging.',
      'Any variance greater than 1.5°C across the die orifice leads to uneven microfiber diameters, creating porosity voids that degrade filtration consistency. Amarnaathh Engineering’s closed-loop thermal oil calenders solve this by isolating ambient thermal loss.',
      'Furthermore, the incorporation of offline optical web inspection ensures that pinholes or polymer droplets are flagged and mapped in real time before winding.',
    ],
    author: 'Dr. S. Radhakrishnan',
    authorRole: 'Lead Material Scientist',
    image: medicalImage,
  },
  {
    id: 'blog-3',
    title: 'Preventative Maintenance Protocols for 24/7 Industrial Textile Machinery',
    category: 'Maintenance & Service',
    date: 'January 12, 2026',
    readTime: '4 min read',
    summary: 'A field-tested preventative schedule for spinning mills and slitter rewinders running continuous shifts under heavy industrial ambient loads.',
    content: [
      'Continuous 24/7 operation in humidified spinning environments places unique demands on bearing lubrication and mechanical guide rollers.',
      'Implementing laser alignment checks during quarterly scheduled shut-downs prevents uneven roller wear that otherwise causes microscopic yarn count variance across spindles.',
      'With integrated telemetry sensors measuring vibration harmonics on main drive bearings, plant maintenance managers can schedule bearing swaps weeks before mechanical failure occurs.',
    ],
    author: 'M. Mehta',
    authorRole: 'Head of Global Service',
    image: spinningImage,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What types of machinery does Amarnaathh Engineering manufacture?',
    answer: 'Amarnaathh Engineering specializes in four primary industrial manufacturing sectors: Medical Textile Machinery (surgical mask lines, meltblown laminators, swab folding units), Hygiene Product Machinery (sanitary napkin and baby/adult diaper converting lines), Spinning & Textile Machinery (ring spinning frames, high-speed rewinders, fabric inspection units), and Heavy Industrial Converting Machinery (ultrasonic slitter rewinders, thermal calenders, automated packaging systems).',
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'Which industries do you serve?',
    answer: 'We serve medical consumable manufacturers, feminine care & diaper producers, technical nonwoven fabric producers, composite materials converters, cotton spinning mills, geotextile fabricators, and multinational OEM textile brands across India and 50+ export countries.',
  },
  {
    id: 'faq-3',
    category: 'Installation',
    question: 'Do you provide on-site installation and commissioning support?',
    answer: 'Yes. Every complete machine or turnkey line includes on-site installation and mechanical commissioning by certified Amarnaathh field engineers. Our team conducts thorough Factory Acceptance Testing (FAT) at our plant prior to crating, followed by Site Acceptance Testing (SAT), line calibration, and comprehensive operator training at your facility.',
  },
  {
    id: 'faq-4',
    category: 'Orders & Enquiries',
    question: 'Do you export machinery internationally?',
    answer: 'Yes, over 40% of our production is exported worldwide. We have operational machinery in North America, Europe, the Middle East, Southeast Asia, and Africa. All export machinery complies with European CE Machinery Directives (2006/42/EC) and international electrical standards (415V/380V/220V 50/60Hz configurations). We maintain a dedicated overseas technical support hub in Dubai, UAE.',
  },
  {
    id: 'faq-5',
    category: 'Orders & Enquiries',
    question: 'How can I request a quotation or technical proposal?',
    answer: 'You can submit a quote request directly through our online quote builder or contact form, specifying your required machinery category, target output capacity (pieces/minute or meters/minute), and installation location. Our engineering sales team will review your specifications and furnish an itemized commercial proposal and technical layout drawing within 24 to 48 hours.',
  },
  {
    id: 'faq-6',
    category: 'Support',
    question: 'What is your warranty and spare parts availability policy?',
    answer: 'All Amarnaathh machines come with a comprehensive 12-month standard industrial warranty covering mechanical components and automation hardware. We maintain a guaranteed inventory of critical wear components (cutting blades, ultrasonic horns, servo drives, timing belts) dispatched within 24–48 hours from our Ahmedabad or Dubai hubs.',
  },
  {
    id: 'faq-7',
    category: 'Products',
    question: 'Can machines be customized for proprietary product dimensions?',
    answer: 'Yes. Our 45+ member in-house engineering team routinely modifies raw material feed widths, ultrasonic seal embossing patterns, core absorbent matrices, and automated packing interfaces to meet clients’ proprietary product specifications.',
  },
];
