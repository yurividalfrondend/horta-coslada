export const SITE = {
  name: 'Horta Coslada',
  tagline: 'Structural Engineering Excellence',
  description: 'International structural engineering consultancy.',
  linkedin: 'https://www.linkedin.com/company/horta-coslada',
  email: 'info@hortacoslada.com',
  phone: '+34 91 000 0000',
  address: 'Coslada, Madrid, Spain',
}

export const PROJECT_CATEGORIES = [
  {
    id: 'bridges-and-footbridges',
    label: 'Bridges & Footbridges',
    cover: 'https://www.hortacoslada.com/archivos/proyectos_eti/1/proyectos-1-rec2.jpg',
    href: '/projects/bridges-and-footbridges',
    count: 24,
    description: 'Innovative bridge and footbridge designs integrating structural efficiency with architectural elegance across rivers, highways and urban landscapes.',
  },
  {
    id: 'buildings',
    label: 'Buildings',
    cover: 'https://www.hortacoslada.com/archivos/proyectos_eti/2/captura-rec2.jpg',
    href: '/projects/buildings',
    count: 31,
    description: 'Civil and commercial buildings where structural performance meets spatial quality, from concept to completion.',
  },
  {
    id: 'stadiums-and-arenas',
    label: 'Stadiums & Arenas',
    cover: 'https://www.hortacoslada.com/archivos/proyectos_eti/3/400-rec2.jpg',
    href: '/projects/stadiums-and-arenas',
    count: 12,
    description: 'Large-span roof structures and sports venues that combine engineering precision with iconic architectural ambition.',
  },
  {
    id: 'industrial-facilities',
    label: 'Industrial Facilities',
    cover: 'https://www.hortacoslada.com/archivos/proyectos_eti/4/01-rec2.jpg',
    href: '/projects/industrial-facilities',
    count: 18,
    description: 'Functional industrial structures engineered for operational excellence, safety and long-term durability.',
  },
  {
    id: 'special-projects',
    label: 'Special Projects',
    cover: 'https://www.hortacoslada.com/archivos/proyectos_eti/5/portada-rec2.jpg',
    href: '/projects/special-projects',
    count: 9,
    description: 'Bespoke engineering solutions for structures that defy conventional typologies.',
  },
]

export const PROJECTS = {
  'bridges-and-footbridges': [
    { id: 'b1', title: 'Río Manzanares Footbridge', location: 'Madrid, Spain', year: '2022', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
    { id: 'b2', title: 'Alcalá de Henares Bridge', location: 'Alcalá, Spain', year: '2021', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80' },
    { id: 'b3', title: 'Tagus River Crossing', location: 'Toledo, Spain', year: '2020', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
    { id: 'b4', title: 'Guadalquivir Pedestrian Bridge', location: 'Seville, Spain', year: '2019', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80' },
  ],
  'buildings': [
    { id: 'bd1', title: 'Torres Business Centre', location: 'Barcelona, Spain', year: '2023', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80' },
    { id: 'bd2', title: 'Coslada Cultural Hub', location: 'Coslada, Spain', year: '2022', image: 'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=800&q=80' },
    { id: 'bd3', title: 'Valencia Maritime Terminal', location: 'Valencia, Spain', year: '2021', image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80' },
    { id: 'bd4', title: 'Bilbao Office Tower', location: 'Bilbao, Spain', year: '2020', image: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?w=800&q=80' },
  ],
  'stadiums-and-arenas': [
    { id: 's1', title: 'Estadio Central Renovation', location: 'Madrid, Spain', year: '2023', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80' },
    { id: 's2', title: 'Palacio de los Deportes', location: 'Seville, Spain', year: '2021', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80' },
    { id: 's3', title: 'Arena Norte Roof Structure', location: 'Zaragoza, Spain', year: '2020', image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80' },
  ],
  'industrial-facilities': [
    { id: 'i1', title: 'Logistics Hub Madrid', location: 'Madrid, Spain', year: '2023', image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=800&q=80' },
    { id: 'i2', title: 'Renewable Energy Plant', location: 'Aragón, Spain', year: '2022', image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80' },
    { id: 'i3', title: 'Automotive Assembly Facility', location: 'Valladolid, Spain', year: '2021', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80' },
  ],
  'special-projects': [
    { id: 'sp1', title: 'Retiro Park Canopy Structure', location: 'Madrid, Spain', year: '2023', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80' },
    { id: 'sp2', title: 'Historical Theatre Restoration', location: 'Salamanca, Spain', year: '2022', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80' },
    { id: 'sp3', title: 'Temporary Expo Pavilion', location: 'Valencia, Spain', year: '2021', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  ],
}

export const NEWS = [
  { id: 'n1', title: 'Horta Coslada wins Best Infrastructure Award 2024', date: 'November 12, 2024', excerpt: 'Our Manzanares Footbridge project has been recognised by the Spanish Association of Civil Engineers for outstanding structural innovation.', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80', category: 'Awards' },
  { id: 'n2', title: 'New partnership with European Infrastructure Fund', date: 'September 3, 2024', excerpt: 'Horta Coslada joins the European Infrastructure Investment consortium to deliver sustainable civil engineering projects across the continent.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', category: 'Corporate' },
  { id: 'n3', title: 'Stadium renovation project breaks ground in Seville', date: 'July 18, 2024', excerpt: 'Works have begun on the Palacio de los Deportes renovation, with our team leading structural assessment and retrofitting of the iconic roof.', image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80', category: 'Projects' },
]

export const COMPANY_STATS = [
  { value: '40+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '25', label: 'Countries' },
  { value: '120+', label: 'Engineers' },
]

export const TEAM = [
  { name: 'Carlos Horta', role: 'Founding Partner & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
  { name: 'Elena Coslada', role: 'Chief Structural Engineer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { name: 'Marcos Ruiz', role: 'Director of International Projects', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { name: 'Sophie Martín', role: 'Head of Innovation', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
]

export const CAREERS = [
  { id: 'c1', title: 'Senior Structural Engineer', location: 'Madrid, Spain', type: 'Full-time', department: 'Engineering' },
  { id: 'c2', title: 'BIM Coordinator', location: 'Barcelona, Spain', type: 'Full-time', department: 'Digital' },
  { id: 'c3', title: 'Project Manager — Bridges', location: 'Madrid, Spain', type: 'Full-time', department: 'Project Management' },
  { id: 'c4', title: 'Graduate Structural Engineer', location: 'Coslada, Spain', type: 'Full-time', department: 'Engineering' },
]
