import type { Locale } from "@/lib/i18n/locale";

export interface FaqItem {
  readonly question: Record<Locale, string>;
  readonly answer: Record<Locale, string>;
}

/**
 * Answer-first FAQ. Answers use listing and host facts plus rates already
 * published on this site. Guest-review claims are not used as facts.
 */
export const SITE_FAQ: readonly FaqItem[] = [
  {
    question: {
      en: "What is Kagiampakis Concept Residences?",
      el: "Τι είναι τα Kagiampakis Concept Residences;",
    },
    answer: {
      en: "Kagiampakis Concept Residences is two restored stone houses in Avdou, Crete, hosted by Xrisa. Residence I sleeps up to 6 guests in 2 bedrooms and 1 bathroom. Residence II sleeps up to 7 guests in 3 bedrooms and 2 bathrooms. They are two residences in Avdou. Book one, or both when you need room for up to 13 guests. Xrisa replies in Greek or English.",
      el: "Τα Kagiampakis Concept Residences είναι δύο ανακαινισμένες πέτρινες κατοικίες στην Αβδού της Κρήτης, με οικοδέσποινα τη Χρύσα. Η Κατοικία I φιλοξενεί έως 6 άτομα, σε 2 υπνοδωμάτια και 1 μπάνιο. Η Κατοικία II φιλοξενεί έως 7 άτομα, σε 3 υπνοδωμάτια και 2 μπάνια. Πρόκειται για δύο κατοικίες στην Αβδού. Κλείνετε τη μία ή και τις δύο, όταν θέλετε χώρο για έως 13 άτομα. Η Χρύσα απαντά στα ελληνικά ή στα αγγλικά.",
    },
  },
  {
    question: {
      en: "Where are the houses, and how far is Heraklion?",
      el: "Πού βρίσκονται τα σπίτια και πόσο απέχει το Ηράκλειο;",
    },
    answer: {
      en: "Both houses are in Avdou, Heraklion region, Crete, postal code 70005, on Sokaki Kagiampidon. Heraklion city is about 35 km away. Heraklion Airport (Nikos Kazantzakis) is 34.3 km, about 31 minutes. The port of Heraklion is 37.5 km, about 41 minutes.",
      el: "Και οι δύο κατοικίες είναι στην Αβδού, στην περιφερειακή ενότητα Ηρακλείου, με ταχυδρομικό κώδικα 70005, στο Σοκάκι Καγιαμπίδων. Η πόλη του Ηρακλείου απέχει περίπου 35 χλμ. Το αεροδρόμιο Ηρακλείου «Νίκος Καζαντζάκης» απέχει 34,3 χλμ., περίπου 31 λεπτά. Το λιμάνι του Ηρακλείου απέχει 37,5 χλμ., περίπου 41 λεπτά.",
    },
  },
  {
    question: {
      en: "What are the check-in and checkout times?",
      el: "Ποιες είναι οι ώρες άφιξης και αναχώρησης;",
    },
    answer: {
      en: "Check-in is after 15:00. Checkout is before 12:00. The same hours apply to Residence I and Residence II. The host greets you.",
      el: "Το check-in γίνεται μετά τις 15:00. Το check-out είναι πριν από τις 12:00. Οι ίδιες ώρες ισχύουν και για τις δύο κατοικίες. Σας υποδέχεται η οικοδέσποινα.",
    },
  },
  {
    question: {
      en: "How much does a stay cost, and what is the minimum stay?",
      el: "Πόσο κοστίζει η διαμονή και ποια είναι η ελάχιστη διαμονή;",
    },
    answer: {
      en: "Residence I is priced by guest count: Sunday–Thursday €60–€120 per night and Friday–Saturday €70–€130 per night, with a 2-night minimum. Residence II is €170 per night Sunday–Thursday and €180 Friday–Saturday for 1–7 guests, with a 3-night minimum. Each residence keeps its own rate. Message Xrisa on WhatsApp, Viber, or email.",
      el: "Η Κατοικία I τιμολογείται ανάλογα με τα άτομα: Κυριακή–Πέμπτη 60–120€ τη βραδιά και Παρασκευή–Σάββατο 70–130€, με ελάχιστη διαμονή 2 διανυκτερεύσεις. Η Κατοικία II είναι 170€ τη βραδιά Κυριακή–Πέμπτη και 180€ Παρασκευή–Σάββατο για 1–7 άτομα, με ελάχιστη διαμονή 3 διανυκτερεύσεις. Κάθε κατοικία κρατά τη δική της τιμή. Στείλτε μήνυμα στη Χρύσα σε WhatsApp, Viber ή email.",
    },
  },
  {
    question: {
      en: "Can a group of 13 stay?",
      el: "Μπορεί να μείνει μια παρέα 13 ατόμων;",
    },
    answer: {
      en: "Yes, by reserving both houses: Residence I for up to 6 guests and Residence II for up to 7. They are two residences in Avdou, so a group of up to 13 uses both. Each house keeps its own minimum stay. Ask Xrisa on WhatsApp if you need both for the same dates.",
      el: "Ναι, κλείνοντας και τις δύο κατοικίες: την Κατοικία I για έως 6 άτομα και την Κατοικία II για έως 7. Είναι δύο κατοικίες στην Αβδού, οπότε μια παρέα έως 13 ατόμων χρησιμοποιεί και τις δύο. Κάθε σπίτι κρατά τη δική του ελάχιστη διαμονή. Ρωτήστε τη Χρύσα στο WhatsApp αν χρειάζεστε και τις δύο τις ίδιες ημερομηνίες.",
    },
  },
  {
    question: {
      en: "Are pets allowed?",
      el: "Επιτρέπονται τα κατοικίδια;",
    },
    answer: {
      en: "Residence I does not accept pets. Service animals are the exception there. Residence II allows 1 pet. Tell Xrisa which house you want before you travel with an animal.",
      el: "Η Κατοικία I δεν δέχεται κατοικίδια. Εξαίρεση αποτελούν τα ζώα υπηρεσίας. Η Κατοικία II δέχεται 1 κατοικίδιο. Πείτε στη Χρύσα ποιο σπίτι θέλετε πριν ταξιδέψετε με ζώο.",
    },
  },
  {
    question: {
      en: "Is there a kitchen, Wi-Fi, and air conditioning?",
      el: "Υπάρχουν κουζίνα, Wi-Fi και κλιματισμός;",
    },
    answer: {
      en: "Yes. Both houses have a kitchen and Wi-Fi. Residence I has air conditioning, a wood-burning stove for the winter months, a private balcony, and the courtyard on Sokaki Kagiampidon. Residence II has air conditioning, a dedicated workspace, and a washing machine.",
      el: "Ναι. Και τα δύο σπίτια έχουν κουζίνα και Wi-Fi. Η Κατοικία I έχει κλιματισμό, ξυλόσομπα για τους χειμερινούς μήνες, ιδιωτικό μπαλκόνι και την αυλή στο Σοκάκι Καγιαμπίδων. Η Κατοικία II έχει κλιματισμό, χώρο για δουλειά και πλυντήριο ρούχων.",
    },
  },
  {
    question: {
      en: "What is the nearest beach?",
      el: "Ποια είναι η κοντινότερη παραλία;",
    },
    answer: {
      en: "Hersonissos, where you can swim, is 14 km from the houses. Aqua Plus water park is 11.2 km away. The host also lists the Lasithi Plateau, with its 18 villages, at 14 km.",
      el: "Η Χερσόνησος, για μπάνιο, απέχει 14 χλμ. από τα σπίτια. Το υδάτινο πάρκο Aqua Plus απέχει 11,2 χλμ. Η οικοδέσποινα αναφέρει και το Οροπέδιο Λασιθίου, με τα 18 χωριά του, στα 14 χλμ.",
    },
  },
  {
    question: {
      en: "Can we stay in winter?",
      el: "Μπορούμε να μείνουμε τον χειμώνα;",
    },
    answer: {
      en: "Winter stays are offered. In Residence I, the host describes a wood-burning stove for the winter months, on the ground floor with the kitchen and living room. Ask Xrisa which dates are open.",
      el: "Η χειμερινή διαμονή προσφέρεται. Στην Κατοικία I η οικοδέσποινα περιγράφει ξυλόσομπα για τους χειμερινούς μήνες, στο ισόγειο μαζί με την κουζίνα και το καθιστικό. Ρωτήστε τη Χρύσα ποιες ημερομηνίες είναι ανοιχτές.",
    },
  },
  {
    question: {
      en: "What are the official registration numbers?",
      el: "Ποιοι είναι οι αριθμοί μητρώου;",
    },
    answer: {
      en: "Residence I is registered as 00000846700. Residence II is registered as 00001845501.",
      el: "Η Κατοικία I είναι εγγεγραμμένη με αριθμό 00000846700. Η Κατοικία II είναι εγγεγραμμένη με αριθμό 00001845501.",
    },
  },
  {
    question: {
      en: "What is there to do near Avdou?",
      el: "Τι μπορεί να κάνει κανείς κοντά στην Αβδού;",
    },
    answer: {
      en: "The host lists the cave of Agia Fotini at 3.6 km, with the mountain visible from Residence I, and the Aposelemis dam at 3.9 km, on foot or by car along the dam. Also nearby: the Rosa gorge, paragliding, and horseback riding. The Lasithi Plateau and its 18 villages are 14 km away, as are the beaches of Hersonissos. In summer the village holds music, dance, theatre, concerts, and traditional celebrations.",
      el: "Η οικοδέσποινα αναφέρει το σπήλαιο της Αγίας Φωτεινής στα 3,6 χλμ., με το βουνό ορατό από την Κατοικία I, και το φράγμα Αποσελέμη στα 3,9 χλμ., με τα πόδια ή με το αυτοκίνητο κατά μήκος του φράγματος. Κοντά είναι επίσης το φαράγγι της Ρόζας, το αλεξίπτωτο πλαγιάς και η ιππασία. Το Οροπέδιο Λασιθίου και τα 18 χωριά του απέχουν 14 χλμ., όπως και οι παραλίες της Χερσονήσου. Το καλοκαίρι το χωριό έχει μουσική, χορό, θέατρο, συναυλίες και παραδοσιακές γιορτές.",
    },
  },
  {
    question: {
      en: "How do I book directly?",
      el: "Πώς κλείνω απευθείας;",
    },
    answer: {
      en: "Message host Xrisa on WhatsApp or Viber at +30 694 968 7227 or +30 698 221 0506, email Xrisa.xk@hotmail.gr, or use the contact form. Send the residence, the dates, and how many guests. She speaks Greek and English.",
      el: "Στείλτε μήνυμα στη Χρύσα σε WhatsApp ή Viber στο +30 694 968 7227 ή στο +30 698 221 0506, στο email Xrisa.xk@hotmail.gr, ή χρησιμοποιήστε τη φόρμα επικοινωνίας. Γράψτε την κατοικία, τις ημερομηνίες και πόσα άτομα είστε. Μιλά ελληνικά και αγγλικά.",
    },
  },
] as const;

export function faqText(item: FaqItem, locale: Locale): { question: string; answer: string } {
  return { question: item.question[locale], answer: item.answer[locale] };
}
