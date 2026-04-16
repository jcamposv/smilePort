import heroImg from "../assets/images/hero.jpg";
import implantImg from "../assets/images/dental-implant.jpg";
import veneersImg from "../assets/images/porcelain-veneers.jpg";
import crownImg from "../assets/images/crown-&-Core-Treatment.jpg";
import smileDesignImg from "../assets/images/full-Smile-Design.jpg";

export const siteConfig = {
  name: "SmilePort",
  tagline: "Dental Tourism · Bogotá",
  title: "SmilePort — Dental Tourism in Bogotá, Colombia | Save up to 70%",
  description:
    "Premium dental care in Bogotá, Colombia. Dental implants, veneers, crowns & more at a fraction of US prices. Board-certified specialists, world-class facilities.",
  url: "https://smileportdental.com",
};

export const booking = {
  whatsapp: {
    number: "50670124238",
    defaultMessage: "Hi! I'm interested in dental tourism at SmilePort Bogotá. Can you help me?",
  },
  googleCalendar: { enabled: false, calendarId: "primary" },
};

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Why Bogotá", href: "#why-bogota" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headline: {
    line1: "World-Class Dental Care,",
    accent: "70% Less",
    line2: "Than US Prices",
  },
  description:
    "Board-certified specialists in Bogotá, Colombia deliver the same quality implants, veneers and crowns you'd get in the US — at a fraction of the cost. Your dream smile is one flight away.",
  cta: { primary: "Get a Free Quote", secondary: "See Our Work" },
  badges: [
    { value: "70%", label: "Savings vs. US" },
    { value: "15+", label: "Years Experience" },
    { value: "3,000+", label: "Happy Patients" },
    { value: "ADA", label: "Standards" },
  ],
  image: heroImg.src,
};

export const stats = [
  { value: "70%", label: "Average Savings" },
  { value: "3,000+", label: "Patients Treated" },
  { value: "15+", label: "Years Experience" },
  { value: "4.9/5", label: "Patient Rating" },
];

export const services = [
  {
    index: "01",
    title: "Dental Implants",
    titleEs: "Implantes Dentales",
    description: "Permanent, natural-looking tooth replacements using premium titanium implants. Full-mouth restorations available with All-on-4 and All-on-6 solutions.",
    price: "$800",
    usPrice: "$4,000",
    savings: "80%",
    duration: "3-5 days",
    includes: ["Premium titanium implant", "Porcelain crown", "3D CT scan & planning", "Lifetime implant warranty"],
    image: implantImg.src,
  },
  {
    index: "02",
    title: "Porcelain Veneers",
    titleEs: "Carillas de Porcelana",
    description: "Ultra-thin, custom-crafted porcelain shells that transform your smile. Designed digitally for a perfect, natural-looking result that lasts 15+ years.",
    price: "$350",
    usPrice: "$1,800",
    savings: "70%",
    duration: "2-3 days",
    includes: ["E-max porcelain per tooth", "Digital smile design preview", "Custom shade matching", "Temporary veneers included"],
    image: veneersImg.src,
  },
  {
    index: "03",
    title: "Crown & Core Treatment",
    titleEs: "Tratamiento de Núcleo y Corona",
    description: "Full porcelain or zirconia crowns with precision core build-ups. Restores damaged teeth to full function and aesthetics with same-day technology.",
    price: "$300",
    usPrice: "$1,500",
    savings: "75%",
    duration: "1-2 days",
    includes: ["Zirconia or E-max crown", "Fiber post core build-up", "Digital impression (no molds)", "Same-day delivery available"],
    image: crownImg.src,
  },
  {
    index: "04",
    title: "Full Smile Design",
    titleEs: "Diseño de Sonrisa Completo",
    description: "A comprehensive treatment combining veneers, crowns and implants for a complete smile transformation. Digital planning with preview of your new smile before treatment begins.",
    price: "Custom",
    usPrice: "$30,000+",
    savings: "60-70%",
    duration: "5-7 days",
    includes: ["Full digital smile simulation", "All treatments combined", "Dedicated patient coordinator", "Post-treatment follow-up plan"],
    image: smileDesignImg.src,
  },
];

export const whyBogota = {
  headline: "Why Dental Tourism in Bogotá?",
  items: [
    { title: "Save 50-70%", description: "Same materials, same quality, drastically lower prices. Your savings can easily pay for flights and a vacation.", icon: "dollar" },
    { title: "ADA-Standard Care", description: "Our specialists are trained in the US and Europe. We use FDA-approved materials and follow ADA protocols.", icon: "shield" },
    { title: "Modern Facilities", description: "State-of-the-art clinic with 3D scanning, digital smile design, and in-house dental lab for same-day results.", icon: "building" },
    { title: "Travel Assistance", description: "We coordinate everything: airport pickup, hotel recommendations, treatment scheduling, and post-care follow-up.", icon: "globe" },
  ],
};

export const team = [
  {
    name: "Dr. Andrés Castellanos",
    specialty: "Implantologist & Prosthodontist",
    bio: "15+ years of experience. Trained at Universidad Javeriana and advanced certifications in implantology from NYU.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dra. Camila Rivera",
    specialty: "Cosmetic Dentistry Specialist",
    bio: "Expert in smile design and porcelain veneers. International training in aesthetic dentistry with 10+ years of experience.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
];

export const testimonials = [
  {
    name: "Michael T.",
    location: "Miami, FL",
    service: "Full Mouth Implants",
    review: "I saved over $18,000 compared to quotes in Miami. The quality is outstanding — my dentist back home couldn't believe they were done abroad. SmilePort made the entire process seamless.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    location: "Houston, TX",
    service: "10 Porcelain Veneers",
    review: "Best decision I ever made. The clinic is modern, the team speaks perfect English, and my new smile is absolutely stunning. I saved enough to enjoy a week in Bogotá!",
    rating: 5,
  },
  {
    name: "James & Linda R.",
    location: "Los Angeles, CA",
    service: "Crowns & Implants",
    review: "We both got treatment done. The savings were incredible and the care was exceptional. Dr. Castellanos is truly world-class. We tell everyone about SmilePort.",
    rating: 5,
  },
];

export const process = [
  { step: "01", title: "Free Virtual Consultation", description: "Send us your X-rays or photos via WhatsApp. We'll create a personalized treatment plan with transparent pricing — no surprises." },
  { step: "02", title: "Plan Your Trip", description: "We help coordinate flights, hotels near the clinic, and schedule your appointments. Most treatments take 3-7 days." },
  { step: "03", title: "Your Treatment", description: "Receive world-class dental care in our modern Bogotá clinic. We provide airport pickup and a dedicated patient coordinator." },
  { step: "04", title: "Your New Smile", description: "Leave Bogotá with a stunning new smile. We provide all documentation for your dentist at home and virtual follow-up care." },
];

export const appointmentCTA = {
  heading: "Ready for Your Dream Smile?",
  description: "Get a free, no-obligation virtual consultation. Send us your X-rays and we'll create a personalized treatment plan with transparent pricing.",
  cta: "Get My Free Quote",
  secondary: "Or WhatsApp us at +506 7012-4238",
};

export const footer = {
  services: ["Dental Implants", "Porcelain Veneers", "Crowns & Core", "Smile Design"],
  contact: {
    address: "Calle 93 #14-20, Piso 5\nBogotá, Colombia",
    phone: "+57 601 555 0123",
    email: "hello@smileportdental.com",
  },
  hours: "Mon – Fri: 8:00 AM – 6:00 PM (COT)",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};
