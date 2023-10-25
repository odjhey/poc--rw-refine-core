// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import MainLayout from './layouts/MainLayout/MainLayout'
import RefineLayout from './layouts/RefineLayout/RefineLayout'
import SampolLayout from './layouts/SampolsLayout/SampolsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Set wrap={RefineLayout}>
          <Set wrap={ScaffoldLayout} title="Jobs" titleTo="jobs" buttonLabel="New Job" buttonTo="newJob">
            <Route path="/jobs/new" page={JobNewJobPage} name="newJob" />
            <Route path="/jobs" page={JobJobsPage} name="jobs" />
          </Set>
          <Set wrap={ScaffoldLayout} title="Tasks" titleTo="tasks" buttonLabel="New Task" buttonTo="newTask">
            <Route path="/tasks/new" page={TaskNewTaskPage} name="newTask" />
            <Route path="/tasks" page={TaskTasksPage} name="tasks" />
          </Set>
          <Route path="/new-sampol" page={NewSampolPage} name="newSampol" />
          <Set wrap={SampolLayout}>
            <Route path="/sampols" page={SampolsPage} name="sampols" />
          </Set>
        </Set>

        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
