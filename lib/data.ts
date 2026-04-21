export type Product = {
  slug: string;
  name: string;
  price: number;
  priceFrom?: boolean;
  category: 'Bouquets' | 'Seasonal' | 'Wedding' | 'Funeral' | 'Plants' | 'Luxury';
  occasion: string[];
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  palette: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  stems?: string[];
};

export const products: Product[] = [
  {
    slug: 'glorious',
    name: 'Glorious',
    price: 78,
    category: 'Luxury',
    occasion: ['Anniversary', 'Thank You', 'Birthday'],
    description:
      'An opulent hand-tie of garden roses, ranunculus and trailing jasmine.',
    longDescription:
      'Our signature luxury bouquet, Glorious is the arrangement we are most known for. Market-fresh David Austin garden roses are paired with ivory ranunculus, blush lisianthus and soft trailing jasmine, hand-tied in our Plaistow Road studio and wrapped in unbleached Italian paper.',
    image:
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1400&q=80',
    ],
    palette: ['#f5efde', '#eeab9c', '#c9d6bd', '#966583'],
    isBestseller: true,
    stems: ['Garden rose', 'Ranunculus', 'Lisianthus', 'Jasmine'],
  },
  {
    slug: 'extravaganza',
    name: 'Extravaganza',
    price: 125,
    category: 'Luxury',
    occasion: ['Anniversary', 'Milestone', 'New Home'],
    description:
      'Our largest signature arrangement — couture florals in abundance.',
    longDescription:
      'Unapologetically generous. A showstopping couture bouquet packed with peonies, garden roses, hydrangea and seasonal focals. Hand-gathered by our senior designers and finished with silk ribbon.',
    image:
      'https://images.unsplash.com/photo-1587751366577-4ae478440ab9?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587751366577-4ae478440ab9?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1400&q=80',
    ],
    palette: ['#fbe8e3', '#eeab9c', '#d0b3c7', '#966583'],
    isBestseller: true,
  },
  {
    slug: 'florist-choice-seasonal',
    name: "Florist's Choice Seasonal",
    price: 48,
    priceFrom: true,
    category: 'Seasonal',
    occasion: ['Thank You', 'Birthday', 'Just Because'],
    description:
      'Trust our designers. Whatever is freshest from market, styled for you.',
    longDescription:
      "Leave it to us. Every morning our team returns from New Covent Garden with the very best of the season — we'll style the freshest blooms into a bouquet tailored to your colour preference.",
    image:
      'https://images.unsplash.com/photo-1469259943454-aa100abba749?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1469259943454-aa100abba749?auto=format&fit=crop&w=1400&q=80',
    ],
    palette: ['#f5efde', '#c9d6bd', '#839c6e'],
  },
  {
    slug: 'spring-in-bloom',
    name: 'Spring in Bloom',
    price: 55,
    category: 'Seasonal',
    occasion: ['Mother’s Day', 'Easter', 'Birthday'],
    description:
      'Tulips, hyacinth, narcissi and fritillary — the first breath of spring.',
    longDescription:
      'A painterly celebration of the season. French tulips dance above hyacinth, narcissi and chequered fritillary in soft spring tones.',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=80',
    ],
    palette: ['#fdf5f3', '#f6d0c7', '#c9d6bd'],
    isNew: true,
  },
  {
    slug: 'english-garden',
    name: 'English Garden',
    price: 62,
    category: 'Bouquets',
    occasion: ['Thank You', 'Birthday', 'Anniversary'],
    description:
      'Locally grown blooms with a foraged, just-gathered feel.',
    longDescription:
      'Sweet peas, cornflowers, phlox and scabious styled as though gathered from a country garden that morning. Wrapped in brown paper and raffia.',
    image:
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1400&q=80',
    ],
    palette: ['#fbe8e3', '#c9d6bd', '#966583'],
  },
  {
    slug: 'quiet-white',
    name: 'Quiet White',
    price: 58,
    category: 'Funeral',
    occasion: ['Sympathy', 'Funeral'],
    description:
      'A serene white-and-green arrangement for quiet condolence.',
    longDescription:
      'A gentle, understated tribute in white roses, lisianthus, chrysanthemum and eucalyptus. Arranged in a biodegradable vessel, ready to present.',
    image:
      'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1400&q=80',
    ],
    palette: ['#fdfcf8', '#e5ebdf', '#839c6e'],
  },
  {
    slug: 'mum-tribute',
    name: '"Mum" Letter Tribute',
    price: 165,
    category: 'Funeral',
    occasion: ['Funeral', 'Sympathy'],
    description:
      'A classic letter tribute, hand-massed with ivory chrysanthemum.',
    longDescription:
      'A traditional East London tribute — a dense, immaculate letter frame spelling "Mum", massed with chrysanthemum and finished with white ribbon. Made fresh to order by our funeral team.',
    image:
      'https://images.unsplash.com/photo-1478031706604-bb4fbd342dc1?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1478031706604-bb4fbd342dc1?auto=format&fit=crop&w=1400&q=80',
    ],
    palette: ['#fdfcf8', '#f5efde', '#688054'],
  },
  {
    slug: 'all-i-want-for-christmas',
    name: 'All I Want for Christmas',
    price: 68,
    category: 'Seasonal',
    occasion: ['Christmas', 'Winter'],
    description:
      'Deep reds, pine and spiced berries, tied with velvet ribbon.',
    longDescription:
      'A festive bouquet of red naomi roses, amaryllis, eucalyptus, pine, cinnamon and hypericum berries. The scent of Christmas, hand-tied.',
    image:
      'https://images.unsplash.com/photo-1544376664-80b17f09d399?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544376664-80b17f09d399?auto=format&fit=crop&w=1400&q=80',
    ],
    palette: ['#9d3c2f', '#37422d', '#f5efde'],
  },
  {
    slug: 'red-letter-day',
    name: 'Red Letter Day',
    price: 95,
    category: 'Luxury',
    occasion: ['Valentine’s', 'Anniversary', 'Romance'],
    description:
      'Twenty-five long-stemmed Red Naomi roses, presented box-style.',
    longDescription:
      'Velvet-red Red Naomi roses — the finest rose variety grown — arranged in a signature hatbox with layered foliage. The gift that says everything.',
    image:
      'https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=1400&q=80',
    ],
    palette: ['#9d3c2f', '#1f1d1a', '#f5efde'],
    isBestseller: true,
  },
  {
    slug: 'sunday-morning',
    name: 'Sunday Morning',
    price: 42,
    category: 'Bouquets',
    occasion: ['Just Because', 'Thank You'],
    description:
      'Cheerful yellows and buttery creams — an easy bouquet to love.',
    longDescription:
      'A bright, buttery hand-tie of ranunculus, tulips, craspedia and mimosa. Like a Sunday morning in the garden.',
    image:
      'https://images.unsplash.com/photo-1524598171353-ce84a157c61d?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524598171353-ce84a157c61d?auto=format&fit=crop&w=1400&q=80',
    ],
    palette: ['#faf7ef', '#f5efde', '#c9d6bd'],
  },
  {
    slug: 'orchid-studio',
    name: 'Studio Orchid',
    price: 65,
    category: 'Plants',
    occasion: ['New Home', 'Thank You', 'Desk'],
    description:
      'A white phalaenopsis orchid in our stoneware vessel.',
    longDescription:
      'An elegant double-stem phalaenopsis in bone-white, planted in a hand-thrown stoneware pot by an East London potter. Cared for at home with minimal fuss.',
    image:
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1400&q=80',
    ],
    palette: ['#fdfcf8', '#e5ebdf'],
    isNew: true,
  },
  {
    slug: 'wild-meadow',
    name: 'Wild Meadow',
    price: 52,
    category: 'Bouquets',
    occasion: ['Birthday', 'Just Because'],
    description:
      'A loose, romantic gathering of meadow flowers and herbs.',
    longDescription:
      'Cosmos, scabious, dill, poppy seed heads and rosemary — a wild, foraged-feel bouquet finished with jute twine.',
    image:
      'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1400&q=80',
    ],
    palette: ['#f5efde', '#c9d6bd', '#a6ba94'],
  },
];

export const deliveryAreas = [
  { name: 'Plaistow', postcode: 'E13' },
  { name: 'Stratford', postcode: 'E15' },
  { name: 'West Ham', postcode: 'E15' },
  { name: 'Leyton', postcode: 'E10' },
  { name: 'Walthamstow', postcode: 'E17' },
  { name: 'Bethnal Green', postcode: 'E2' },
  { name: 'Hackney', postcode: 'E9' },
  { name: 'Barking', postcode: 'IG11' },
  { name: 'Barkingside', postcode: 'IG6' },
  { name: 'Canary Wharf', postcode: 'E14' },
  { name: 'Bow', postcode: 'E3' },
  { name: 'Forest Gate', postcode: 'E7' },
];

export const testimonials = [
  {
    quote:
      'Helen and the team have made every family celebration — every wedding, christening, funeral — since I was a little girl. The flowers are always perfect.',
    author: 'Eleanor M.',
    role: 'Plaistow, since 1998',
  },
  {
    quote:
      'The most beautiful bouquet I have ever seen in London. Delivered by hand at 8.30am, on my anniversary. I was stunned.',
    author: 'Rohan P.',
    role: 'Canary Wharf',
  },
  {
    quote:
      "We asked for something quiet and white for Mum. What arrived was heartbreakingly beautiful. Thank you, Sewell's.",
    author: 'Catherine O.',
    role: 'Bethnal Green',
  },
  {
    quote:
      "Our wedding florals were the thing guests talked about most. Every table, every arch — utter magic.",
    author: 'Priya & James',
    role: 'Wedding, April 2025',
  },
];

export const contact = {
  name: "Sewell's Florist",
  address: '165 Plaistow Road',
  city: 'London',
  postcode: 'E15 3ET',
  phone: '020 8534 5182',
  phoneHref: 'tel:+442085345182',
  email: 'hello@sewellsflorist.co.uk',
  hours: [
    { day: 'Monday – Friday', time: '8.00 — 17.00' },
    { day: 'Saturday', time: '8.00 — 16.00' },
    { day: 'Sunday', time: '10.00 — 15.00' },
  ],
};
