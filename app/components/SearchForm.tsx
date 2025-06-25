'use client'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  location: string
}

export default function SearchForm() {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  //console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label className="location_label">Enter an address, ZIP, or neighborhood</label>
      <input className="location" {...register("location", { required: true })} />
      {errors.location && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}