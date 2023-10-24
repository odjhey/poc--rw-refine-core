// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import RefineLayout from './layouts/RefineLayout/RefineLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={RefineLayout}>
        <Route path="/new-sampol" page={NewSampolPage} name="newSampol" />
        <Route path="/sampols" page={SampolsPage} name="sampols" />
      </Set>

      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
