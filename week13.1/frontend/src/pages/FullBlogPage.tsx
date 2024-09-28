import { Blog } from "../hooks/index";
import { FaPenNib } from "react-icons/fa";

export const FullBlogPage = ({ blog }: {blog: Blog}) => {
  return (
       <> 
      <div className="flex justify-center">
        <div className="max-w-xs sm:max-w-md md:max-w-xl">
          <img src={"https://c4.wallpaperflare.com/wallpaper/237/293/295/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg"} className="rounded-xl p-[1px] border border-slate-400 mt-[20px]" />
          <h1 className="font-semibold text-[18px] flex items-center mt-1 mb-3 underline"> <FaPenNib className="mr-1" />  {blog.author.name} </h1>
          <h1 className="text-3xl font-bold"> {blog.title} </h1>
          <h1 className="mt-2"> {blog.content} </h1>
          
          <p className="text-[15px] mt-3"> published on <span className="font-semibold"> 5th Sept. 2023 </span> </p>
        </div>
      </div>
    </>
  )
}