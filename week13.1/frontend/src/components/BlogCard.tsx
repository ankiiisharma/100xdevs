import { MdEditDocument } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";

export interface BlogCardProps {
  author: string;
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  imageUrl: string;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
  imageUrl,
}: BlogCardProps) => {
  const readingTime = Math.ceil(content.length / 100);

  return (
    <Link to={`/blog/${id}`}>
      <div className="flex items-center gap-4  cursor-pointer">
        <div>
          {/* Blog Image */}
          <div>
            <img
              src={imageUrl}
              alt="Blog image"
              className="border border-slate-400 p-[1px] rounded-lg"
            />
          </div>

          {/* Author Info */}
          <div className="flex gap-1 items-center mt-3 mb-3">
            <Avatar name={authorName} />
            <div className="font-semibold text-[12px] text-gray-700 ml-1">
              {authorName}
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-800 mx-2" />
            <div className="tracking-tight text-gray-600 text-[13px]">
              {publishedDate}
            </div>
          </div>

          {/* Blog Title */}
          <div className="text-xl font-semibold pt-2">{title}</div>

          {/* Blog Content (Excerpt) */}
          <div className="font-normal pt-1">
            {content.slice(0, 100) + "..."} 
          </div>

          {/* Footer (Reading Time & Icons) */}
          <div className="flex justify-between items-center pt-4 pb-2">
            <div className="font-semibold text-slate-600">
              {`${readingTime} minute(s) read`}
            </div>
            <div className="flex gap-3 text-lg">
              <BiLike />
              <MdEditDocument />
            </div>
          </div>

          {/* Divider */}
          <div className="bg-slate-200 w-full h-[1px] mt-2 mb-4" />
        </div>
      </div>
    </Link>
  );
};

const Avatar = ({ name }: { name: string }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-extrathin text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
};

export { Avatar };
export default BlogCard;
