export type SiteSearchItem = {
  title: string
  href: string
  content: string
  tags?: string[]
}

// Lightweight, static search index for site-wide search.
// Add/extend content here as new pages are added.
export const SITE_SEARCH_INDEX: SiteSearchItem[] = [
  {
    title: 'Home',
    href: '/',
    content:
      'Soochak Bharat Technologies Private Limited. RFID, security, and automation solutions. Our Solutions. Our Products. Contact.',
    tags: ['home', 'rfid', 'automation', 'security'],
  },
  { title: 'Solutions (Home section)', href: '/#solutions', content: 'Solutions section on home page.', tags: ['solutions'] },
  { title: 'Products (Home section)', href: '/#products', content: 'Products section on home page.', tags: ['products'] },

  { title: 'Retail Solutions', href: '/solutions/retail', content: 'Retail RFID solutions: fitting room, inventory, checkout, jewellery, washing management, customer experience.', tags: ['solutions', 'retail'] },
  { title: 'Defence & Security Solutions', href: '/solutions/defence-security', content: 'Defence & security RFID solutions.', tags: ['solutions', 'defence', 'security'] },
  { title: 'Manufacturing Solutions', href: '/solutions/manufacturing', content: 'Manufacturing RFID solutions.', tags: ['solutions', 'manufacturing'] },
  { title: 'Transportation & Logistics Solutions', href: '/solutions/transportation-logistics', content: 'Transportation and logistics RFID solutions.', tags: ['solutions', 'logistics', 'transportation'] },
  { title: 'Healthcare Solutions', href: '/solutions/healthcare', content: 'Healthcare RFID solutions.', tags: ['solutions', 'healthcare'] },
  { title: 'Hospitality Solutions', href: '/solutions/hospitality', content: 'Hospitality RFID solutions.', tags: ['solutions', 'hospitality'] },
  { title: 'Education Solutions', href: '/solutions/education', content: 'Education RFID solutions.', tags: ['solutions', 'education'] },
  { title: 'Government & Public Solutions', href: '/solutions/government-public', content: 'Government and public sector RFID solutions: assets, access control, smart city, waste management, transport, judiciary.', tags: ['solutions', 'government', 'public'] },
  { title: 'Pet & Livestock Solutions', href: '/solutions/pet-livestock', content: 'Pet & livestock RFID solutions.', tags: ['solutions', 'pet', 'livestock'] },

  { title: 'RFID Tags', href: '/products/rfid-tags', content: 'RFID Tags product family. View datasheets.', tags: ['products', 'rfid tags'] },
  { title: 'Handheld RFID Readers', href: '/products/handheld-rfid-readers', content: 'Handheld RFID Readers product family. View datasheets.', tags: ['products', 'readers'] },
  { title: 'Fixed RFID Readers', href: '/products/fixed-rfid-readers', content: 'Fixed RFID Readers product family. View datasheets.', tags: ['products', 'readers'] },
  { title: 'Integrated RFID Readers', href: '/products/integrated-rfid-readers', content: 'Integrated RFID Readers product family. View datasheets.', tags: ['products', 'readers'] },
  { title: 'RFID Tokens/Wristbands', href: '/products/rfid-tokens-wristbands', content: 'RFID Tokens and Wristbands product family. View datasheets.', tags: ['products', 'tokens', 'wristbands'] },
  { title: 'RFID Antennas', href: '/products/rfid-antennas', content: 'RFID Antennas product family. View datasheets.', tags: ['products', 'antennas'] },
  { title: 'Desktop RFID Readers', href: '/products/desktop-rfid-readers', content: 'Desktop RFID Readers product family. View datasheets.', tags: ['products', 'readers'] },
  { title: 'RFID Printers', href: '/products/rfid-printers', content: 'RFID Printers product family. View datasheets.', tags: ['products', 'printers'] },
  { title: 'Biometric Machines & Security Cameras', href: '/products/biometric-machines-security-cameras', content: 'Biometric machines and security cameras. View datasheets.', tags: ['products', 'biometric', 'cameras'] },
  { title: 'NFC Chips', href: '/products/nfc-chips', content: 'NFC Chips and NFC products. View datasheets for cards, posters, rings, on-metal tags, and keyfobs/wristbands.', tags: ['products', 'nfc'] },

  { title: 'Software', href: '/software', content: 'Software offerings and tools.', tags: ['software'] },
  { title: 'Store', href: '/store', content: 'Store information.', tags: ['store'] },
  { title: 'About Us', href: '/about', content: 'About Soochak Bharat.', tags: ['about'] },
  { title: 'Contact Us', href: '/contact', content: 'Contact form, address, email, phone.', tags: ['contact'] },
  { title: 'Career', href: '/career', content: 'Careers at Soochak Bharat. Apply form.', tags: ['career', 'jobs'] },
  { title: 'Certifications', href: '/certifications', content: 'Company certifications.', tags: ['certifications'] },
  { title: 'Blogs', href: '/blogs', content: 'Blogs and updates.', tags: ['blogs'] },
  { title: 'Terms & Conditions', href: '/terms', content: 'Terms and conditions, liability, governing law.', tags: ['legal', 'terms'] },
  { title: 'Privacy Policy', href: '/privacy-policy', content: 'Privacy policy, data collection, cookies, security, user rights.', tags: ['legal', 'privacy'] },
]


