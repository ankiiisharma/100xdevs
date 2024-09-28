import { useBlog } from "../hooks"
import {useParams} from "react-router-dom"
import { FullBlogPage } from "./FullBlogPage";


const Blog = () => {
  const { id } = useParams();
  const {loading, blog} = useBlog({
      id: id || ""
  });

  if (loading || !blog) {
      return <div>
          <div className="h-screen flex flex-col justify-center">
              
              <div className="flex justify-center">
                  loadinggg...
              </div>
          </div>
      </div>
  }
  return <div>
      <FullBlogPage blog={blog} />
  </div>
}

export default Blog;