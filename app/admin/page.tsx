import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function Page() {
    const supabase = await createClient();
    
      const { data, error } = await supabase.auth.getClaims();
      if (error || !data?.claims) {
        redirect("/auth/login");
      }

      return (
        <main className="general_main admin_main">
            <h1>Admin Section</h1>
            <section className="admin_button">
                <Link href="./admin/submissions" >Process Submissions</Link>
            </section> 
        </main>
      )
}