import AppBar from '../components/AppBar';
import Leftpanel from '../components/Leftpanel';
import Mainpanel from '../components/Mainpanel';
export default function Home(){
   
    return (
        <div className=' w-11/12 flex flex-col mx-auto mt-2'>
        <AppBar></AppBar>
        <div className='flex flex-row mt-4 gap-4'>
        <Leftpanel></Leftpanel>
        <Mainpanel></Mainpanel>
        </div>
        </div>
    )
}