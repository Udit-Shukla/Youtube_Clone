import VideoCard from "./VideoCard";
const videos = [{
    title:"S8UL Palworld",
    channelName:"S8UL Binks",
    views:"285K",
    timestamp:13
},{
    title:"S8UL Palworld",
    channelName:"S8UL Binks",
    views:"285K",
    timestamp:13
},
{
    title:"S8UL Palworld",
    channelName:"S8UL Binks",
    views:"285K",
    timestamp:13
},
{
    title:"S8UL Palworld",
    channelName:"S8UL Binks",
    views:"285K",
    timestamp:13
},{
    title:"S8UL Palworld",
    channelName:"S8UL Binks",
    views:"285K",
    timestamp:13
},
{
    title:"S8UL Palworld",
    channelName:"S8UL Binks",
    views:"285K",
    timestamp:13
}]
const Mainpanel = () => {
return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
    {
        videos.map((video,index)=>{
            return <VideoCard key={index} title={video.title} channelName={video.channelName} views={video.views} timestamp={video.timestamp}/>
        })
    }
    </div>
)
}

export default Mainpanel;