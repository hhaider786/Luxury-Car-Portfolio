export type Vehicle = {
  slug: string;
  name: string;
  class: string;
  specs: string[];
  image: string;
  price: string;
  description: string;
  features: string[];
};

export const fleet: Vehicle[] = [
  {
    slug: "rolls-royce-phantom",
    name: "Rolls-Royce Phantom",
    class: "Ultra Luxury",
    specs: ["6.75L V12 Engine", "5 Passengers", "Starlight Headliner", "Bespoke Leather"],
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&q=90",
    price: "$300",
    description:
      "The Phantom is the most quiet, opulent vehicle in our fleet. The Starlight Headliner is hand-pierced with 1,340 fibre-optic lights — a private night sky for every passenger. Reserved for weddings, state visits, and once-in-a-lifetime arrivals.",
    features: [
      "On-board champagne service",
      "Hand-stitched bespoke leather throughout",
      "Whisper-quiet at 70 mph (sound levels measured at 56 dB)",
      "Suicide-hinged coach doors",
      "Dedicated concierge for each booking",
    ],
  },
  {
    slug: "mercedes-s-class",
    name: "Mercedes S-Class",
    class: "Executive",
    specs: ["3.0L Inline-6", "4 Passengers", "Burmester Sound", "Massage Seats"],
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1600&q=90",
    price: "$180",
    description:
      "The default choice of London's finance set. The S-Class delivers boardroom comfort with 18-speaker Burmester 3D sound and Energising Comfort programmes that calibrate scent, light, sound, and massage.",
    features: [
      "Energising Comfort wellness package",
      "Burmester 3D Surround Sound",
      "Aircraft-style executive rear seats",
      "Privacy glass and rear curtains",
      "Onboard WiFi and Apple TV",
    ],
  },
  {
    slug: "bentley-flying-spur",
    name: "Bentley Flying Spur",
    class: "Grand Tourer",
    specs: ["6.0L W12 Engine", "4 Passengers", "Diamond Stitching", "Naim Audio"],
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=90",
    price: "$250",
    description:
      "The Flying Spur is the most discreet way to make an entrance. A 626 bhp W12 paired with rotating-faced veneers, knurled organ-stops, and the legendary 2,200-watt Naim audio system.",
    features: [
      "Naim for Bentley 2,200 W audio",
      "Diamond-quilted leather",
      "Rotating display surface",
      "Massaging and ventilated seats",
      "Mulliner Driving Specification",
    ],
  },
  {
    slug: "cadillac-escalade",
    name: "Cadillac Escalade",
    class: "SUV Luxury",
    specs: ["6.2L V8 Engine", "6 Passengers", '35" Display', "AKG Sound"],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=90",
    price: "$200",
    description:
      "The chosen ride of touring artists and visiting executives. The full-size Escalade ESV pairs an SUV's commanding presence with a curved 38-inch OLED dashboard and 36-speaker AKG Studio Reference audio.",
    features: [
      "38-inch curved OLED dashboard",
      "36-speaker AKG Studio Reference audio",
      "Conference-style executive seating",
      "Magnetic Ride Control",
      "Ample luggage space (5+ suitcases)",
    ],
  },
  {
    slug: "mercedes-v-class",
    name: "Mercedes V-Class",
    class: "Group Luxury",
    specs: ["2.0L Diesel", "7 Passengers", "Executive Seating", "Conference Setup"],
    image: "https://images.unsplash.com/photo-1574023278046-e7f25c9028ee?w=1600&q=90",
    price: "$160",
    description:
      "Our preferred vehicle for film crews, wedding parties, and corporate groups. Configured as a four-seat executive lounge with a foldaway conference table, or seven full leather seats.",
    features: [
      "Convertible executive lounge or 7-seat configuration",
      "Foldaway conference table",
      "Privacy glass throughout",
      "Onboard 4G WiFi",
      "Soft-close electric doors",
    ],
  },
  {
    slug: "bmw-7-series",
    name: "BMW 7 Series",
    class: "Executive",
    specs: ["3.0L Inline-6", "4 Passengers", "Bowers & Wilkins", "Sky Lounge Roof"],
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=90",
    price: "$150",
    description:
      "The G70 7 Series is the most futuristic option on the road. The 31-inch Theatre Screen folds down from the roof, and the Bowers & Wilkins Diamond Surround Sound is engineered for the cabin alone.",
    features: [
      "31-inch 8K Theatre Screen",
      "Bowers & Wilkins Diamond Surround Sound (36 speakers)",
      "Executive Lounge rear package",
      "Cashmere-blend headlining",
      "Power-operated coach doors",
    ],
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return fleet.find((v) => v.slug === slug);
}
