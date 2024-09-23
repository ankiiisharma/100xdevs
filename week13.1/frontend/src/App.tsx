import { Route, Routes } from 'react-router-dom'
import  Signup  from './pages/Signup'
import  Signin from './pages/Signin'
import  Blog  from './pages/Blog'
import Blogs from "./pages/Blogs"

function App() {

  return (
    <>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
    </>
  )
}

export default App