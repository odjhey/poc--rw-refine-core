import JobForm from 'src/components/Job/JobForm'

const NewJob = () => {
  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Job</h2>
      </header>
      <div className="rw-segment-main">
        <JobForm />
      </div>
    </div>
  )
}

export default NewJob
