import TaskForm from 'src/components/Task/TaskForm'

const NewTask = () => {
  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Task</h2>
      </header>
      <div className="rw-segment-main">
        <TaskForm />
      </div>
    </div>
  )
}

export default NewTask
