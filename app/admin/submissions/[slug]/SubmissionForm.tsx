'use client'
import { getSubmission, submissionApproval } from "@/lib/db"
import { ApprovedSubmission, SubmissionInputs } from "@/lib/definitions"
import { LatLng, LatLngExpression, LatLngLiteral } from "leaflet"
import router from "next/router"
import { Dispatch, RefObject, SetStateAction, useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"


export default function SubmissionForm({submission, polyCoords} : {submission: SubmissionInputs, polyCoords: Array<L.LatLng>}) {
    
     
    const polyDiv = polyCoords ? polyCoords.map((polyPoint, index) => {
        
        return (
            <div className="polycoord" key={index}>
                <span>Point {index}: Lat:{polyPoint.lat} | Lng:{polyPoint.lng}</span>
            </div>
        )
    }) : null
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ApprovedSubmission>()
    const onSubmit: SubmitHandler<ApprovedSubmission> = async (data) => {
        const submissionResponse = await submissionApproval(data)
        console.log(submissionResponse)
        router.push("./contact/confirm")
    }   

    

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
            <label>Submitter Name: </label>
            <input defaultValue={submission.name} {...register("name")} />
            <label>Submitter Email: </label>
            <input defaultValue={submission.email} {...register("email")} />
            <label>Block Association Name*: </label>
            <input defaultValue={submission.block_association_name} {...register("block_association_name", { required: true })} />
            {errors.block_association_name && <span className="form_error">This field is required</span>}
            <label>Block Association Boundaries*: </label>
            <input defaultValue={submission.block_association_boundaries} {...register("block_association_boundaries", { required: true })} />
            {errors.block_association_boundaries && <span className="form_error">This field is required</span>}
            <label>Block Association Email: </label>
            <input defaultValue={submission.block_association_email} {...register("block_association_email")} />
            <label>Block Association Phone: </label>
            <input defaultValue={submission.block_association_phone} {...register("block_association_phone")} />
            <label>Block Association Website: </label>
            <input defaultValue={submission.block_association_website} {...register("block_association_website")} />
            <label>Other Info: </label>
            <textarea defaultValue="" {...register("other_info")} placeholder="Any other info you want to include (focus of the block association, any other contacts, etc)" />
            {polyDiv}
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <span></span>
        </form>
                
            
    )
}