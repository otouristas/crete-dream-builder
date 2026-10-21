import Link from "next/link";
import { JsonLd } from "@/components/site/json-ld";
import { localizedHref, pick, type Locale } from "@/lib/i18n/locale";
import {
  SITE_CONTAINER_CLASS,
  SITE_FAB_CLEAR_CLASS,
  SITE_HEADER_PT_CLASS,
} from "@/lib/layout-constants";
import { EMAIL, PHONE_1_DISPLAY, SITE_DOMAIN } from "@/lib/site-constants";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export function PrivacyPageView({ locale = "en" }: { readonly locale?: Locale }) {
  return (
    <main className={`bg-cream text-foreground ${SITE_HEADER_PT_CLASS} ${SITE_FAB_CLEAR_CLASS}`}>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: pick(locale, "Home", "Αρχική"), path: localizedHref(locale, "/") },
          { name: pick(locale, "Privacy", "Απόρρητο"), path: localizedHref(locale, "/privacy") },
        ])}
      />
      <article className={`${SITE_CONTAINER_CLASS} max-w-3xl py-12 lg:py-16`}>
        <p className="text-xs font-semibold uppercase tracking-display text-primary">
          {pick(locale, "Legal", "Νομικά")}
        </p>
        <h1 className="mt-3 font-display text-4xl text-stone-deep lg:text-5xl">
          {pick(locale, "Privacy notice", "Ενημέρωση απορρήτου")}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {pick(
            locale,
            "Last updated: 8 September 2026",
            "Τελευταία ενημέρωση: 8 Σεπτεμβρίου 2026",
          )}
        </p>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/85">
          <p>
            {pick(
              locale,
              "This site is operated by the Kagiampakis family for",
              "Αυτός ο ιστότοπος λειτουργεί από την οικογένεια Καγιαμπάκη για τα",
            )}{" "}
            <strong>Kagiampakis Concept Residences</strong>{" "}
            {pick(locale, "in Avdou, Crete", "στην Αβδού της Κρήτης")} ({SITE_DOMAIN}).{" "}
            {pick(
              locale,
              "We process only the information you choose to send when you enquire about a stay.",
              "Επεξεργαζόμαστε μόνο όσα επιλέγετε να στείλετε όταν ρωτάτε για μια διαμονή.",
            )}
          </p>
          <h2 className="font-display text-2xl text-stone-deep">
            {pick(locale, "What we collect", "Τι συλλέγουμε")}
          </h2>
          <p>
            {pick(
              locale,
              `The enquiry form opens your own email app addressed to ${EMAIL}. We do not store that form on this website. If you write via WhatsApp, Viber, phone (${PHONE_1_DISPLAY}), or email, we receive your name, number or address, dates, guest count, and any message you include, so we can reply and confirm a booking.`,
              `Η φόρμα ανοίγει τη δική σας εφαρμογή email προς ${EMAIL}. Δεν αποθηκεύουμε τη φόρμα σε αυτόν τον ιστότοπο. Αν γράψετε μέσω WhatsApp, Viber, τηλεφώνου (${PHONE_1_DISPLAY}) ή email, λαμβάνουμε το όνομα, τον αριθμό ή τη διεύθυνση, τις ημερομηνίες, τον αριθμό ατόμων και ό,τι μήνυμα συμπεριλάβετε, για να απαντήσουμε και να επιβεβαιώσουμε μια κράτηση.`,
            )}
          </p>
          <h2 className="font-display text-2xl text-stone-deep">
            {pick(locale, "Why we use it", "Γιατί τα χρησιμοποιούμε")}
          </h2>
          <p>
            {pick(
              locale,
              "We use your details solely to answer questions, hold dates, and host your stay. We do not sell personal data. Messages may remain in our phone or inbox for the length of the reservation and a reasonable period afterwards for accounting and guest history.",
              "Χρησιμοποιούμε τα στοιχεία σας μόνο για να απαντήσουμε σε ερωτήσεις, να κρατήσουμε ημερομηνίες και να σας φιλοξενήσουμε. Δεν πουλάμε προσωπικά δεδομένα. Τα μηνύματα μπορεί να μείνουν στο τηλέφωνο ή στα εισερχόμενά μας για όσο διαρκεί η κράτηση και για ένα εύλογο διάστημα μετά, για λογιστικούς λόγους και για το ιστορικό των επισκεπτών.",
            )}
          </p>
          <h2 className="font-display text-2xl text-stone-deep">
            {pick(locale, "Cookies and analytics", "Cookies και στατιστικά")}
          </h2>
          <p>
            {pick(
              locale,
              "This marketing site does not set advertising cookies. Hosting may log standard technical requests (IP address, browser, page path) needed to deliver the pages. Embedded Google Maps on the contact page is provided by Google and follows Google's privacy terms when you interact with the map.",
              "Αυτός ο ιστότοπος δεν βάζει διαφημιστικά cookies. Η φιλοξενία μπορεί να καταγράφει συνηθισμένα τεχνικά αιτήματα (διεύθυνση IP, πρόγραμμα περιήγησης, διαδρομή σελίδας) που χρειάζονται για να εμφανιστούν οι σελίδες. Ο ενσωματωμένος χάρτης Google στη σελίδα επικοινωνίας παρέχεται από την Google και ακολουθεί τους όρους απορρήτου της όταν αλληλεπιδράτε με τον χάρτη.",
            )}
          </p>
          <h2 className="font-display text-2xl text-stone-deep">
            {pick(locale, "Your rights", "Τα δικαιώματά σας")}
          </h2>
          <p>
            {pick(
              locale,
              `You may ask to access, correct, or delete the enquiry data we hold, or object to further contact, by emailing ${EMAIL}. For complaints you may also contact the Hellenic Data Protection Authority (dpa.gr).`,
              `Μπορείτε να ζητήσετε πρόσβαση, διόρθωση ή διαγραφή των στοιχείων που κρατάμε από ένα αίτημα, ή να αρνηθείτε περαιτέρω επικοινωνία, στέλνοντας email στο ${EMAIL}. Για καταγγελίες μπορείτε επίσης να απευθυνθείτε στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (dpa.gr).`,
            )}
          </p>
          <p>
            {pick(locale, "Questions? Use the", "Ερωτήσεις; Χρησιμοποιήστε τη")}{" "}
            <Link
              href={localizedHref(locale, "/contact")}
              className="text-primary underline-offset-4 hover:underline"
            >
              {pick(locale, "contact page", "σελίδα επικοινωνίας")}
            </Link>{" "}
            or {EMAIL}.
          </p>
        </div>
      </article>
    </main>
  );
}
