import { useForm } from '@refinedev/react-hook-form'
import type { EditTaskById } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormTask = NonNullable<EditTaskById['task']>

interface TaskFormProps {
  task?: EditTaskById['task']
}

const TaskForm = (props: TaskFormProps) => {
  const formMethods = useForm()
  const {
    refineCore: { onFinish, formLoading },
    handleSubmit,
  } = formMethods

  return (
    <div>
      <Form<FormTask>
        formMethods={formMethods}
        onSubmit={handleSubmit(onFinish)}
        // error={props.error}
      >
        {formLoading && <p>Loading</p>}
        <FormError
          // error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.task?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>

        <TextField
          name="status"
          defaultValue={props.task?.status}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="status" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.task?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="jobId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Job id
        </Label>

        <TextField
          name="jobId"
          defaultValue={props.task?.jobId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="jobId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={formLoading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TaskForm
