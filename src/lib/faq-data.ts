export interface FaqLink {
  readonly label: string;
  readonly href: string;
}

export type FaqAnswerPart = string | FaqLink;

export interface FaqItem {
  readonly question: string;
  readonly answer: readonly FaqAnswerPart[];
}

/** Plain answer text for JSON-LD and llms-full. Link labels keep the previous wording. */
export function faqAnswerText(answer: readonly FaqAnswerPart[]): string {
  return answer
    .map((part) => {
      if (typeof part === "string") {
        return part;
      }
      return part.label;
    })
    .join("");
}

/**
 * Answer-first FAQ for AEO (answer engines) and FAQPage schema.
 * Keep answers factual, concise, and consistent with on-page rates.
 */
export const SITE_FAQ: readonly FaqItem[] = [
  {
    question: "What is Kagiampakis Concept Residences?",
    answer: [
      "Kagiampakis Concept Residences is a family-hosted pair of restored stone houses in Avdou village, Crete. ",
      { label: "Residence I", href: "/residences/concept-1" },
      " sleeps up to 6 guests (2 bedrooms, 1 bathroom, from €60/night). ",
      { label: "Residence II", href: "/residences/concept-2" },
      " sleeps up to 7 guests (3 bedrooms, 2 bathrooms, from €170/night). You can book one house or both for ",
      { label: "groups of up to 13", href: "/groups" },
      ".",
    ],
  },
  {
    question: "Where is Kagiampakis Concept Residences located?",
    answer: [
      "The residences are in Avdou, a historic village in the Heraklion region of Crete, Greece (postal code 70005), about 35 km from Heraklion city and 34.3 km (around 31 minutes) from ",
      { label: "Heraklion Airport", href: "/getting-here" },
      ". Hersonissos beaches and the ",
      { label: "Lasithi Plateau", href: "/lasithi-plateau" },
      " are each about 14 km away.",
    ],
  },
  {
    question: "How much does it cost to stay, and what is the minimum stay?",
    answer: [
      { label: "Residence I", href: "/residences/concept-1" },
      " is priced by guest count: Sunday–Thursday €60–€120 per night and Friday–Saturday €70–€130 per night, with a 2-night minimum. ",
      { label: "Residence II", href: "/residences/concept-2" },
      " is a flat rate of €170 per night Sunday–Thursday and €180 Friday–Saturday for 1–7 guests, with a 3-night minimum. Book direct via WhatsApp, Viber, or email for host rates.",
    ],
  },
  {
    question: "How do I book Kagiampakis Concept Residences directly?",
    answer: [
      "Message host Xrisa on WhatsApp or Viber at +30 694 968 7227 (primary) or +30 698 221 0506 (secondary), email Xrisa.xk@hotmail.gr, or use the enquiry form on the ",
      { label: "Contact page", href: "/contact" },
      ". Send your preferred residence, dates, and guest count. Direct booking avoids platform fees and gets a personal reply, usually within hours, in Greek or English.",
    ],
  },
  {
    question: "How many guests can stay, and can we reserve both houses?",
    answer: [
      { label: "Residence I", href: "/residences/concept-1" },
      " sleeps up to 6 guests and ",
      { label: "Residence II", href: "/residences/concept-2" },
      " sleeps up to 7 guests. Reserving both houses together accommodates ",
      { label: "groups of up to 13", href: "/groups" },
      ". Ask on WhatsApp if you need both for the same dates.",
    ],
  },
  {
    question: "Is there parking, Wi-Fi, and a kitchen?",
    answer: [
      "Yes. Both residences include a fully equipped kitchen, high-speed Wi-Fi, air conditioning, and free on-premises / village parking (the main street is about a block from the alley). ",
      { label: "Residence I", href: "/residences/concept-1" },
      " also has a wood-burning stove and private balcony; ",
      { label: "Residence II", href: "/residences/concept-2" },
      " adds a second bathroom, a dedicated workspace, and an in-unit washing machine.",
    ],
  },
  {
    question: "What are the official Greek tourism registration numbers?",
    answer: [
      { label: "Residence I", href: "/residences/concept-1" },
      " is registered as EOT / MMA 00000846700. ",
      { label: "Residence II", href: "/residences/concept-2" },
      " is registered as 00001845501. Both operate as licensed short-term residences in Avdou, Crete.",
    ],
  },
  {
    question: "What is there to see near Avdou?",
    answer: [
      "From the door you can reach the Cave of Agia Fotini (3.6 km), Aposelemi Dam (3.9 km), Aqua Plus water park (11.2 km), Hersonissos beaches (14 km), the Lasithi Plateau (14 km), and Heraklion museums, Knossos, and the Venetian harbour (about 35 km). The village itself has stone lanes, tavernas, and summer festivals. See ",
      { label: "what to see near Avdou", href: "/what-to-see" },
      ", the ",
      { label: "day trips", href: "/day-trips" },
      ", and the ",
      { label: "Avdou village guide", href: "/avdou-village" },
      ".",
    ],
  },
  {
    question: "How far is the nearest beach?",
    answer: [
      "Hersonissos, on the north coast, is about 14 km from the houses. Aqua Plus water park is about 11.2 km. Distances for the dam, the cave, and the coast are on the ",
      { label: "day trips page", href: "/day-trips" },
      ".",
    ],
  },
  {
    question: "Is there a fireplace, heating, or air conditioning?",
    answer: [
      { label: "Residence I", href: "/residences/concept-1" },
      " has a wood-burning stove. Both houses have air conditioning, and ",
      { label: "Residence II", href: "/residences/concept-2" },
      " has air conditioning in the rooms.",
    ],
  },
  {
    question: "How do we get there from Heraklion Airport or the port?",
    answer: [
      "Heraklion Airport is 34.3 km, about 31 minutes. Heraklion port is 37.5 km, about 41 minutes. The houses are on Sokaki Kagiampidon in Avdou, postal code 70005. Parking is free on the premises and in the village, and the main street is about a block from the alley. The map pin and those distances are on ",
      { label: "getting here", href: "/getting-here" },
      ". Message Xrisa on WhatsApp for the route she uses.",
    ],
  },
] as const;
