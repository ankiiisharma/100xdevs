import { Route, Routes } from 'react-router-dom'
import  Signup  from './pages/Signup'
import  Signin from './pages/Signin'
import  Blog  from './pages/Blog'
import Blogs from "./pages/Blogs"
import PublishPage from './pages/PublishPage'
import Home from './pages/Home'

function App() {

  return (
    <>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<PublishPage />} />
        </Routes>
    </>
  )
}

export default App