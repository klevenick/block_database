'use client'
import { getSubmission, submissionApproval } from "@/lib/db";
import { ApprovedSubmission, Block, SubmissionInputs } from "@/lib/definitions";
import SubMap from './SubMap'
import { useForm, SubmitHandler } from "react-hook-form"
import SubmissionForm from "./SubmissionForm";
import { useState } from "react";
import { useRef } from "react";
import { LatLngLiteral } from "leaflet";

export default function SubmissionPage({submission}: {submission: SubmissionInputs}) {
    
   // const polyCoords = useRef<Array<LatLngLiteral>>([])
    const [polyCoords, setPolyCoords] = useState(Array<L.LatLng>)

        return (
        <main className="submission_map_main">
                <h1>Submission</h1>
            <section className="submission_map_container">
                <section className="submission_list">
                    <SubmissionForm submission={submission} polyCoords={polyCoords} />
                    
                </section> 
                <section className="submission_map" >
                    <SubMap setPolyCoords={setPolyCoords}/>
                </section>
            </section>
        </main>
        )
}