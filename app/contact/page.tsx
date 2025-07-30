import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Page() {

    return (
        <main className="contact_main">
            <h1>Submit a block association</h1>
            <span>Fill out the form below to add your block association. If you are not the main contact, please make a note in the Other Info section!</span>
            <span>* Indicates a required field</span>
        <ContactForm />
        <section className="button_footer">
                <div className="button">
                    <Link href="./">
                        Back to the map
                    </Link>
                </div>
            </section>
        </main>
    )
}