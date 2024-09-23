import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'
const {loading, blogs} from "use  "

const Blogs = () => {


  return (
    <>  
     <Navbar  />
     <div className='flex justify-center'>
     <div className='max-w-xs sm:max-w-md  md:max-w-xl'> 
        <BlogCard
            authorName={"Ankit Sharma"}
            title={"How to do this when you dont have to go for the race and dies"}
            content={`well people dies i the middle of the race and they find thing dt ot be very fornal and then they have to run in the race where they can win. but trust yor instints and jump into the race there might be chnaces that you eill fail. but there are chnaagses thsata you will win. and that day the things will chnage foreverdfor you .and you will be the perosn you wanted to be`}
            publishedDate={"05 Sept. 2024"}
            imageUrl={"https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/ce405ad07404fecfb3196b77822aec8b.jpg"}
        />
        <BlogCard
            authorName={"Ankit Sharma"}
            title={"How to do this when you dont have to go for the race and dies"}
            content={`well people dies i the middle of the race and they find thing dt ot be very fornal and then they have to run in the race where they can win. but trust yor instints and jump into the race there might be chnaces that you eill fail. but there are chnaagses thsata you will win. and that day the things will chnage foreverdfor you .and you will be the perosn you wanted to be`}
            publishedDate={"05 Sept. 2024"}
            imageUrl={"https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/ce405ad07404fecfb3196b77822aec8b.jpg"}
        />
        <BlogCard
            authorName={"Ankit Sharma"}
            title={"How to do this when you dont have to go for the race and dies"}
            content={`well people dies i the middle of the race and they find thing dt ot be very fornal and then they have to run in the race where they can win. but trust yor instints and jump into the race there might be chnaces that you eill fail. but there are chnaagses thsata you will win. and that day the things will chnage foreverdfor you .and you will be the perosn you wanted to be`}
            publishedDate={"05 Sept. 2024"}
            imageUrl={"https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/ce405ad07404fecfb3196b77822aec8b.jpg"}
        />
    </div>
     </div>
    </>
  )
}


export default Blogs