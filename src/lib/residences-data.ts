import { AIRBNB_RESI_1_URL, AIRBNB_RESI_2_URL } from "./site-constants";

export interface ResidencePhoto {
  readonly src: string;
  readonly alt: string;
}

export interface ResidenceDetails {
  readonly id: "concept-1" | "concept-2";
  readonly title: string;
  readonly subtitle: string;
  readonly badge: string;
  readonly maxGuests: number;
  readonly bedrooms: number;
  readonly bathrooms: number;
  readonly minStayNights: number;
  readonly startingPriceSunThu: number;
  readonly startingPriceFriSat: number;
  readonly registrationNumber: string;
  readonly airbnbUrl: string;
  readonly heroImage: string;
  readonly description: readonly string[];
  readonly spaceHighlights: readonly { title: string; desc: string }[];
  readonly sleepingArrangements: readonly { room: string; beds: string; image?: string }[];
  readonly amenities: readonly string[];
  readonly photos: readonly ResidencePhoto[];
  readonly pricingNotes: readonly string[];
}

export const RESIDENCES_DATA: Record<"concept-1" | "concept-2", ResidenceDetails> = {
  "concept-1": {
    id: "concept-1",
    title: "Kagiampakis Concept Residence I",
    subtitle: "Traditional 3-Level Stone House with Mountain & Agia Fotini Cave Views",
    badge: "Guest Favorite · ★ 5.0 (23 Reviews)",
    maxGuests: 6,
    bedrooms: 2,
    bathrooms: 1,
    minStayNights: 2,
    startingPriceSunThu: 60,
    startingPriceFriSat: 70,
    registrationNumber: "00000846700",
    airbnbUrl: AIRBNB_RESI_1_URL,
    heroImage: "/property/exterior-courtyard.jpg",
    description: [
      "In the historic village of Avdou, near the Aposelemi dam and 35 km from Heraklion, sits Kagiampakis Concept Residence I — a restored traditional stone house built across three levels.",
      "Ground floor features a traditional kitchen and cozy living area with a wood-burning stove. First floor offers a double bedroom, private balcony, and bathroom. Second floor opens to panoramic views of the Agia Fotini cave mountain.",
      "Guests enjoy private courtyard access on the traditional 'Sokaki Kagiampidon' alley, authentic Cretan hospitality, and peaceful surroundings.",
    ],
    spaceHighlights: [
      {
        title: "Level 1 (Ground Floor)",
        desc: "Fully equipped kitchen (espresso, filter coffee, tea) and warm living area with wood-burning stove.",
      },
      {
        title: "Level 2 (First Floor)",
        desc: "Main bedroom with double bed, private balcony for quiet evenings, and bathroom.",
      },
      {
        title: "Level 3 (Second Floor)",
        desc: "Secondary bedroom with 1 double bed and 1 single bed, offering dramatic views of the Agia Fotini cave mountain.",
      },
      {
        title: "Sokaki Kagiampidon Alley",
        desc: "Private dead-end traditional street that acts as your outdoor courtyard.",
      },
    ],
    sleepingArrangements: [
      {
        room: "Bedroom 1 (First Floor)",
        beds: "1 Double Bed",
        image: "https://a0.muscache.com/im/pictures/e50cbbe2-5a13-4a34-9ce9-bfec356676df.jpg",
      },
      {
        room: "Bedroom 2 (Second Floor)",
        beds: "1 Double Bed & 1 Single Bed",
        image: "https://a0.muscache.com/im/pictures/e6ecc8c4-dfee-44ed-8648-ece3190883f3.jpg",
      },
    ],
    amenities: [
      "Fully Equipped Kitchen",
      "Wood-burning Stove",
      "Air Conditioning",
      "High-Speed Wi-Fi",
      "Private Balcony & Courtyard",
      "Free On-Premises Parking",
      "Espresso & Filter Coffee Machine",
      "TV & Living Room",
      "Hair Dryer & Fresh Towels",
      "Refrigerator & Cooking Basics",
      "Luggage Dropoff Allowed",
      "Mountain & Agia Fotini Views",
    ],
    photos: [
      {
        src: "/property/exterior-courtyard.jpg",
        alt: "Residence I outdoor stone courtyard at dusk",
      },
      { src: "/property/entrance-evening.jpg", alt: "Residence I traditional stone entrance" },
      { src: "/property/living-fireplace.jpg", alt: "Living room with traditional wood stove" },
      { src: "/property/stone-living.jpg", alt: "Authentic stone interior architecture" },
      { src: "/property/bedroom-main.jpg", alt: "First floor double bedroom with private balcony" },
      { src: "/property/bedroom-view.jpg", alt: "Second floor bedroom with mountain cave views" },
      { src: "/property/dining.jpg", alt: "Dining space and traditional kitchen" },
      {
        src: "https://a0.muscache.com/im/pictures/a0062924-4719-4179-8409-d39fb5c2be69.jpg",
        alt: "Main stone facade",
      },
      {
        src: "https://a0.muscache.com/im/pictures/5cf88c7f-fa57-4a5e-9e75-a9ce506a704c.jpg",
        alt: "Traditional sokaki alley",
      },
      {
        src: "https://a0.muscache.com/im/pictures/miso/Hosting-34710248/original/f30e9a27-3ec9-4f7f-ba07-a2f82e3e6005.jpeg",
        alt: "Warm stone details",
      },
      {
        src: "https://a0.muscache.com/im/pictures/3d1f8dff-452c-4364-8940-873280c7f4ef.jpg",
        alt: "Cozy living interior",
      },
      {
        src: "https://a0.muscache.com/im/pictures/miso/Hosting-34710248/original/0107a896-9a09-4957-a3e5-15d8601f4f0e.jpeg",
        alt: "Balcony overlook",
      },
    ],
    pricingNotes: [
      "Sunday to Thursday: 2 guests €60/night, 3 guests €75, 4 guests €90, 5 guests €105, 6 guests €120.",
      "Friday & Saturday: 2 guests €70/night, 3 guests €80, 4 guests €95, 5 guests €110, 6 guests €130.",
      "Minimum stay: 2 nights.",
    ],
  },
  "concept-2": {
    id: "concept-2",
    title: "Kagiampakis Concept Residence II",
    subtitle: "Spacious Modern-Rustic Residence for Up to 7 Guests",
    badge: "New Listing · Premium Residence",
    maxGuests: 7,
    bedrooms: 3,
    bathrooms: 2,
    minStayNights: 3,
    startingPriceSunThu: 170,
    startingPriceFriSat: 180,
    registrationNumber: "0001845501",
    airbnbUrl: AIRBNB_RESI_2_URL,
    heroImage:
      "https://a0.muscache.com/im/pictures/miso/Hosting-1083410970859524546/original/da03d28a-0404-4fe8-9075-bdf420733725.jpeg",
    description: [
      "Kagiampakis Concept Residence II is a spacious, elegantly appointed home designed for families and groups of up to 7 guests seeking high comfort in Avdou village.",
      "Featuring 3 plush bedrooms, 2 full bathrooms, a dedicated workspace, washer, and expansive common areas blending Cretan architectural stone charm with modern amenities.",
      "Enjoy peace and quiet, seamless Wi-Fi connectivity, and direct access to both mountain trails and the coastline.",
    ],
    spaceHighlights: [
      {
        title: "3 Comfortable Bedrooms",
        desc: "Tailored sleeping spaces designed for groups and large families up to 7 people.",
      },
      {
        title: "2 Full Bathrooms",
        desc: "Convenient double-bathroom layout ensuring full privacy and ease.",
      },
      {
        title: "Dedicated Workspace",
        desc: "Ideal for remote work or peaceful reading with high-speed wireless internet.",
      },
      {
        title: "Full Amenities",
        desc: "In-unit washing machine, fully stocked kitchen, climate control air conditioning, and free parking.",
      },
    ],
    sleepingArrangements: [
      { room: "Bedroom 1", beds: "1 Double Bed" },
      { room: "Bedroom 2", beds: "1 Double Bed" },
      { room: "Bedroom 3", beds: "1 Double Bed & 1 Single Bed / Sofa" },
    ],
    amenities: [
      "Fully Equipped Kitchen",
      "Air Conditioning (All Rooms)",
      "Dedicated Workspace",
      "In-Unit Washing Machine",
      "High-Speed Wi-Fi",
      "2 Full Bathrooms",
      "Free On-Premises Parking",
      "Smart TV",
      "Fresh Linens & Bath Amenities",
      "Hair Dryer & Iron",
      "Peaceful Village Environment",
      "Mountain & Valley Views",
    ],
    photos: [
      {
        src: "https://a0.muscache.com/im/pictures/miso/Hosting-1083410970859524546/original/da03d28a-0404-4fe8-9075-bdf420733725.jpeg",
        alt: "Residence II primary interior lounge",
      },
      {
        src: "https://a0.muscache.com/im/pictures/miso/Hosting-1083410970859524546/original/8bc284cc-2c88-45ff-9b45-7232003f717a.jpeg",
        alt: "Living area with modern stone detailing",
      },
      {
        src: "https://a0.muscache.com/im/pictures/miso/Hosting-1083410970859524546/original/32a27ce7-299c-4073-a783-0e1726da9054.jpeg",
        alt: "Master bedroom suite",
      },
      {
        src: "https://a0.muscache.com/im/pictures/miso/Hosting-1083410970859524546/original/aca2d1af-cf65-496f-ac84-f09c30990c1a.jpeg",
        alt: "Second bedroom design",
      },
      {
        src: "https://a0.muscache.com/im/pictures/miso/Hosting-1083410970859524546/original/1fb49b76-3446-4c8c-9847-6cafc35938b8.jpeg",
        alt: "Dining and kitchen area",
      },
      {
        src: "https://a0.muscache.com/im/pictures/miso/Hosting-1083410970859524546/original/058d16a4-1ba4-4eb7-b03a-c4a04a6fe357.jpeg",
        alt: "Modern bathroom",
      },
      {
        src: "https://a0.muscache.com/im/pictures/miso/Hosting-1083410970859524546/original/3ee0c0d4-ed27-46ef-86af-e39f94319828.jpeg",
        alt: "Workspace nook",
      },
      {
        src: "https://a0.muscache.com/im/pictures/miso/Hosting-1083410970859524546/original/40609659-c272-42b7-8d6c-281cd2e0a628.jpeg",
        alt: "Third bedroom layout",
      },
      {
        src: "https://a0.muscache.com/im/pictures/miso/Hosting-1083410970859524546/original/46d79c51-edd6-4257-a36f-cc8fbab9febe.jpeg",
        alt: "Second bathroom",
      },
      {
        src: "https://a0.muscache.com/im/pictures/miso/Hosting-1083410970859524546/original/55605651-10f8-4a9e-b737-62029893159b.jpeg",
        alt: "Exterior stone details",
      },
      {
        src: "https://a0.muscache.com/im/pictures/miso/Hosting-1083410970859524546/original/83126ea4-dfad-4bca-b56c-a4952da2e4ce.jpeg",
        alt: "Comfortable seating lounge",
      },
      {
        src: "https://a0.muscache.com/im/pictures/miso/Hosting-1083410970859524546/original/b966144f-1e9e-4681-b58b-6fbaae8cb03c.jpeg",
        alt: "Kitchen appliances and storage",
      },
    ],
    pricingNotes: [
      "Standard flat rate for 1 to 7 guests.",
      "Sunday to Thursday: €170/night.",
      "Friday & Saturday: €180/night.",
      "Minimum stay: 3 nights.",
    ],
  },
};

export function getAllResidences(): readonly ResidenceDetails[] {
  return [RESIDENCES_DATA["concept-1"], RESIDENCES_DATA["concept-2"]];
}

export function getResidenceById(id: string): ResidenceDetails | null {
  if (id === "concept-1" || id === "concept-2") {
    return RESIDENCES_DATA[id];
  }
  return null;
}
