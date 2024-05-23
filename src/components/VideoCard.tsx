
interface inputprops {
    title: string;
    channelName: string;
    views: string;
    timestamp: number;
  
}

const VideoCard = (props:inputprops) => {
  return (
    <div className="px-3 cursor-pointer " >
        <img src="/photo.jpg" alt="" className="rounded-xl hover:scale-105 duration-75 ease-in-out" />
        <div className="grid grid-cols-12 mt-2">
            <div className=" col-span-2 mx-auto">
                <img src="/photo.jpg" alt="photo"className="rounded-full w-12 h-12 "/>
            </div>
            <div className="col-span-10 ml-2">
            <div>{props.title}</div>
            <div className="col-span-11 text-gray-400 text-base">
           {props.channelName}
            </div>
            <div className="col-span-11 text-gray-400 text-base">
           {props.views} subscribers | {props.timestamp} days ago
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default VideoCard