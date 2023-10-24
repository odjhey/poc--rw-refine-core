// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import MainLayout from './layouts/MainLayout/MainLayout'
import RefineLayout from './layouts/RefineLayout/RefineLayout'
import SampolLayout from './layouts/SampolsLayout/SampolsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Set wrap={RefineLayout}>
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
