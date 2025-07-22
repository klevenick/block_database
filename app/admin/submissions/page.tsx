import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getSubmissions } from "@/lib/db";
import Link from "next/link";


export default async function Page() {
    const supabase = await createClient();
    
      const { data, error } = await supabase.auth.getClaims();
      if (error || !data?.claims) {
        redirect("/auth/login");
      }

      const submissions = await getSubmissions()
      const subsBlock = submissions.map((submission, index) => {
        const subURL = "/admin/submissions/" + submission.id
        return (
            <Link href={subURL} key={index}>
                <div className="submission_container" >
                <h3>{submission.block_association_name}</h3>
                <span>Submitted by: {submission.name}</span>
                </div>
            </Link>
        )
      })

      return (
        <main className="general_main submission_main">
            <h1>Process Submissions</h1>
            <section className="submissions_list">
                {subsBlock}
            </section> 
        </main>
      )
}