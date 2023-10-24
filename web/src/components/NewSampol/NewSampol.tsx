import { useForm } from '@refinedev/react-hook-form'

export const NewSampol: React.FC = () => {
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form onSubmit={handleSubmit(onFinish)}>
      <label>Title: </label>
      <input {...register('title', { required: true })} />
      {errors.title && <span>This field is required</span>}
      <br />
      <label>Status: </label>
      <select {...register('status')}>
        <option value="published">published</option>
        <option value="draft">draft</option>
        <option value="rejected">rejected</option>
      </select>
      <br />
      <br />
      <input type="submit" value="Submit" />
      {formLoading && <p>Loading</p>}
    </form>
  )
}
