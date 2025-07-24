import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SubmissionPage from "./SubmissionPage";
import { SubmissionInputs } from "@/lib/definitions";
import { getSubmission } from "@/lib/db";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: number }>
}) {
    const { slug } = await params
    const submissionId = slug
    const supabase = await createClient()
    
    const { data, error } = await supabase.auth.getClaims();
    if (error || !data?.claims) {
        redirect("/auth/login");
    }
    
    const submission: SubmissionInputs = await getSubmission(submissionId)
    console.log("submission retrieved")
    console.log(submission)
    
    return <SubmissionPage submission={submission} />
}