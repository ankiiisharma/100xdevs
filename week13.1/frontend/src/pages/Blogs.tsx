import React from "react";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import { useBlogs } from "../hooks";
import BlogSkeleton from "../components/BlogSkeleton";

const Blogs: React.FC = () => {
  const { loading, blogs = [], error } = useBlogs();

  if (loading) {
    return(
      <> 
        <div className="flex justify-center"> 
            <div> 
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            </div> 
        </div>
      </>
    )
  }

  if (error) {
    return <h1 className="text-xl text-red-500">Error loading blogs: {error.message}</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="max-w-xs sm:max-w-md md:max-w-xl">
          {blogs.length === 0 ? (
            <p>No blogs available</p>
          ) : (
            blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                authorName={blog.author?.name || "Unknown Author"}
                title={blog.title || "Untitled Blog"}
                content={blog.content || "No content available"}
                publishedDate={blog.publishedDate || "23 Sept 2024"}
                imageUrl={blog.imageUrl || "https://c4.wallpaperflare.com/wallpaper/237/293/295/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg"}
                author={blog.author}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
