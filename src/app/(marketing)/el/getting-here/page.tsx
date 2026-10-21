import type { Metadata } from "next";
import { GuidePage, GuideSection, TextLink } from "@/components/site/guide-page";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { GEO } from "@/lib/geo-config";

const locale = "el" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Πώς θα έρθετε στην Αβδού",
  description:
    "Το αεροδρόμιο Ηρακλείου απέχει 34,3 χλμ. (περίπου 31 λεπτά) από τις πέτρινες κατοικίες στην Αβδού. Το λιμάνι απέχει 37,5 χλμ., περίπου 41 λεπτά.",
  path: "/el/getting-here",
  locale,
});

export default function GettingHereElPage() {
  return (
    <GuidePage
      locale={locale}
      path="/el/getting-here"
      eyebrow="Άφιξη"
      h1="Πώς θα έρθετε στα σπίτια της Αβδού"
      lede="Η καρφίτσα είναι στο Σοκάκι Καγιαμπίδων, Αβδού 70005. Το check-in είναι μετά τις 15:00 και σας υποδέχεται η οικοδέσποινα."
      inShort="Το αεροδρόμιο Ηρακλείου «Νίκος Καζαντζάκης» απέχει 34,3 χλμ. από τα σπίτια, περίπου 31 λεπτά. Το λιμάνι του Ηρακλείου απέχει 37,5 χλμ., περίπου 41 λεπτά. Η πόλη του Ηρακλείου απέχει περίπου 35 χλμ. Το check-out είναι πριν από τις 12:00. Ρωτήστε τη Χρύσα στο WhatsApp ποια διαδρομή να ακολουθήσετε."
      image={{
        src: "/property/entrance-evening.jpg",
        alt: "Πέτρινη είσοδος των σπιτιών στην Αβδού",
      }}
    >
      <GuideSection title="Αεροδρόμιο, λιμάνι και πόλη">
        <p>
          Το σημείωμα μετακινήσεων της Κατοικίας I δίνει 31 λεπτά και 34,3 χλμ. από το αεροδρόμιο
          Νίκος Καζαντζάκης, και 41 λεπτά και 37,5 χλμ. από το λιμάνι του Ηρακλείου. Η περιγραφή του
          σπιτιού τοποθετεί επίσης την Αβδού περίπου 35 χλμ. από την πόλη του Ηρακλείου.
        </p>
        <p>
          Συντεταγμένες σε αυτόν τον ιστότοπο: {GEO.latitude}, {GEO.longitude}.{" "}
          <a
            href={`https://maps.google.com/?q=${GEO.mapsQuery}`}
            className="font-medium text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ανοίξτε την καρφίτσα στους Χάρτες Google
          </a>
          . Η διεύθυνση είναι {GEO.streetAddress}, Αβδού {GEO.postalCode}.
        </p>
      </GuideSection>
      <GuideSection title="Όταν φτάσετε">
        <p>
          Το check-in είναι μετά τις 15:00. Το check-out είναι πριν από τις 12:00. Οι ίδιες ώρες
          ισχύουν και για τις δύο κατοικίες. Σας υποδέχεται η οικοδέσποινα. Στείλτε μήνυμα στη
          Χρύσα, στα ελληνικά ή στα αγγλικά, με την ώρα άφιξης, ώστε να ξέρει ποιο σπίτι να ανοίξει:
          την Κατοικία I (έως 6 άτομα, ελάχιστο 2 διανυκτερεύσεις) ή την Κατοικία II (έως 7 άτομα,
          ελάχιστο 3 διανυκτερεύσεις).
        </p>
        <p>
          Ο <TextLink href="/el/avdou">οδηγός της Αβδού</TextLink> περιγράφει το χωριό. Οι εκδρομές
          και τα χιλιόμετρά τους είναι στις{" "}
          <TextLink href="/el/ekdromes">ημερήσιες εκδρομές</TextLink>. Μια παρέα που χρησιμοποιεί
          και τα δύο σπίτια ας διαβάσει{" "}
          <TextLink href="/el/omades">ομάδες και οικογένειες</TextLink> και τις{" "}
          <TextLink href="/el/faq">ερωτήσεις</TextLink>.
        </p>
      </GuideSection>
    </GuidePage>
  );
}
