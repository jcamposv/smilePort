import heroImg from "../assets/images/hero.jpg";
import implantImg from "../assets/images/dental-implant.jpg";
import veneersImg from "../assets/images/porcelain-veneers.jpg";
import crownImg from "../assets/images/crown-&-Core-Treatment.jpg";
import smileDesignImg from "../assets/images/full-Smile-Design.jpg";

export const siteConfig = {
  name: "SmilePort",
  tagline: "Turismo Dental · Bogotá",
  title: "SmilePort — Turismo Dental en Bogotá, Colombia | Ahorra hasta 70%",
  description:
    "Atención dental premium en Bogotá, Colombia. Implantes, carillas, coronas y más a una fracción de los precios en EE.UU. Especialistas certificados, instalaciones de primer nivel.",
  url: "https://smileportdental.com/es",
};

export const booking = {
  whatsapp: {
    number: "50670124238",
    defaultMessage: "¡Hola! Estoy interesado en turismo dental en SmilePort Bogotá. ¿Pueden ayudarme?",
  },
  googleCalendar: { enabled: false, calendarId: "primary" },
};

export const navigation = [
  { label: "Inicio", href: "#top" },
  { label: "Servicios", href: "/es#servicios" },
  { label: "¿Por qué Bogotá?", href: "/es#por-que-bogota" },
  { label: "Equipo", href: "/es#equipo" },
  { label: "Contacto", href: "/es#contacto" },
];

export const hero = {
  headline: {
    line1: "Atención Dental de Clase Mundial,",
    accent: "70% Menos",
    line2: "que en EE.UU.",
  },
  description:
    "Especialistas certificados en Bogotá, Colombia ofrecen la misma calidad en implantes, carillas y coronas que obtendrías en EE.UU. — a una fracción del costo. Tu sonrisa soñada está a un vuelo de distancia.",
  cta: { primary: "Cotización Gratis", secondary: "Ver Nuestro Trabajo" },
  badges: [
    { value: "70%", label: "Ahorro vs. EE.UU." },
    { value: "15+", label: "Años de Experiencia" },
    { value: "3,000+", label: "Pacientes Felices" },
    { value: "ADA", label: "Estándares" },
  ],
  image: heroImg.src,
};

export const stats = [
  { value: "70%", label: "Ahorro Promedio" },
  { value: "3,000+", label: "Pacientes Atendidos" },
  { value: "15+", label: "Años de Experiencia" },
  { value: "4.9/5", label: "Calificación" },
];

export const services = [
  {
    index: "01",
    title: "Implantes Dentales",
    titleEs: "Dental Implants",
    description: "Reemplazos dentales permanentes y de aspecto natural con implantes de titanio premium. Restauraciones de boca completa con soluciones All-on-4 y All-on-6.",
    price: "$800",
    usPrice: "$4,000",
    savings: "80%",
    duration: "3-5 días",
    includes: ["Implante de titanio premium", "Corona de porcelana", "Tomografía 3D y planificación", "Garantía de por vida"],
    image: implantImg.src,
  },
  {
    index: "02",
    title: "Carillas de Porcelana",
    titleEs: "Porcelain Veneers",
    description: "Láminas ultrafinas de porcelana hechas a medida que transforman tu sonrisa. Diseñadas digitalmente para un resultado perfecto y natural que dura más de 15 años.",
    price: "$350",
    usPrice: "$1,800",
    savings: "70%",
    duration: "2-3 días",
    includes: ["Porcelana E-max por diente", "Preview de diseño digital", "Igualación de tono personalizada", "Carillas temporales incluidas"],
    image: veneersImg.src,
  },
  {
    index: "03",
    title: "Núcleo y Corona",
    titleEs: "Crown & Core Treatment",
    description: "Coronas de porcelana o zirconia con reconstrucción de núcleo de precisión. Restaura dientes dañados con función y estética completa con tecnología del mismo día.",
    price: "$300",
    usPrice: "$1,500",
    savings: "75%",
    duration: "1-2 días",
    includes: ["Corona de zirconia o E-max", "Reconstrucción con poste de fibra", "Impresión digital (sin moldes)", "Entrega el mismo día disponible"],
    image: crownImg.src,
  },
  {
    index: "04",
    title: "Diseño de Sonrisa Completo",
    titleEs: "Full Smile Design",
    description: "Un tratamiento integral que combina carillas, coronas e implantes para una transformación completa de sonrisa. Planificación digital con preview de tu nueva sonrisa antes del tratamiento.",
    price: "A medida",
    usPrice: "$30,000+",
    savings: "60-70%",
    duration: "5-7 días",
    includes: ["Simulación digital completa", "Todos los tratamientos combinados", "Coordinador de paciente dedicado", "Plan de seguimiento post-tratamiento"],
    image: smileDesignImg.src,
  },
];

export const whyBogota = {
  badge: "Destino Top de Turismo Dental",
  headline: "¿Por qué Bogotá?",
  subtitle: "Colombia es uno de los principales destinos de turismo dental en el mundo — aquí te explicamos por qué miles de personas eligen Bogotá cada año.",
  items: [
    { title: "Ahorra 50-70%", description: "Mismos materiales, misma calidad, precios drásticamente más bajos. Tu ahorro puede pagar vuelos y vacaciones.", icon: "dollar" },
    { title: "Estándar ADA", description: "Nuestros especialistas se formaron en EE.UU. y Europa. Usamos materiales aprobados por la FDA y seguimos protocolos ADA.", icon: "shield" },
    { title: "Instalaciones Modernas", description: "Clínica de última generación con escaneo 3D, diseño digital de sonrisa y laboratorio dental propio para resultados el mismo día.", icon: "building" },
    { title: "Asistencia de Viaje", description: "Coordinamos todo: recogida en aeropuerto, recomendaciones de hotel, programación de tratamiento y seguimiento post-tratamiento.", icon: "globe" },
  ],
};

export const team = [
  {
    name: "Dr. Andrés Castellanos",
    specialty: "Implantólogo y Prostodoncista",
    bio: "15+ años de experiencia. Formado en la Universidad Javeriana con certificaciones avanzadas en implantología de NYU.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dra. Camila Rivera",
    specialty: "Especialista en Odontología Estética",
    bio: "Experta en diseño de sonrisa y carillas de porcelana. Formación internacional en odontología estética con 10+ años de experiencia.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
];

export const testimonials = [
  {
    name: "Michael T.",
    location: "Miami, FL",
    service: "Implantes de Boca Completa",
    review: "Ahorré más de $18,000 comparado con presupuestos en Miami. La calidad es excepcional — mi dentista en casa no podía creer que se hicieron en el exterior. SmilePort hizo todo el proceso impecable.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    location: "Houston, TX",
    service: "10 Carillas de Porcelana",
    review: "La mejor decisión que he tomado. La clínica es moderna, el equipo habla perfecto inglés, y mi nueva sonrisa es absolutamente impresionante. ¡Ahorré suficiente para disfrutar una semana en Bogotá!",
    rating: 5,
  },
  {
    name: "James y Linda R.",
    location: "Los Angeles, CA",
    service: "Coronas e Implantes",
    review: "Los dos nos hicimos tratamiento. Los ahorros fueron increíbles y la atención excepcional. El Dr. Castellanos es verdaderamente de clase mundial. Les contamos a todos sobre SmilePort.",
    rating: 5,
  },
];

export const process = [
  { step: "01", title: "Consulta Virtual Gratis", description: "Envíanos tus radiografías o fotos por WhatsApp. Crearemos un plan de tratamiento personalizado con precios transparentes — sin sorpresas." },
  { step: "02", title: "Planifica Tu Viaje", description: "Te ayudamos a coordinar vuelos, hoteles cerca de la clínica y programar tus citas. La mayoría de tratamientos toman 3-7 días." },
  { step: "03", title: "Tu Tratamiento", description: "Recibe atención dental de clase mundial en nuestra moderna clínica en Bogotá. Incluimos recogida en aeropuerto y coordinador de paciente dedicado." },
  { step: "04", title: "Tu Nueva Sonrisa", description: "Sal de Bogotá con una sonrisa espectacular. Proporcionamos toda la documentación para tu dentista en casa y seguimiento virtual." },
];

export const appointmentCTA = {
  heading: "¿Listo para Tu Sonrisa Soñada?",
  description: "Obtén una consulta virtual gratis y sin compromiso. Envíanos tus radiografías y crearemos un plan de tratamiento personalizado con precios transparentes.",
  cta: "Obtener Mi Cotización Gratis",
  secondary: "O escríbenos por WhatsApp al +506 7012-4238",
};

export const footer = {
  services: ["Implantes Dentales", "Carillas de Porcelana", "Núcleo y Corona", "Diseño de Sonrisa"],
  contact: {
    address: "Calle 93 #14-20, Piso 5\nBogotá, Colombia",
    phone: "+57 601 555 0123",
    email: "hello@smileportdental.com",
  },
  hours: "Lun – Vie: 8:00 AM – 6:00 PM (COT)",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};
