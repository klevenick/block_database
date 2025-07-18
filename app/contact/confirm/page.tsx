import Link from "next/link";

export default function Page() {

    return(
    <main className="confirm_main">
        <span>Your block associaiton has been submitted, thanks!</span>
        <Link href="/">Return to the map</Link>
    </main>
    )
}