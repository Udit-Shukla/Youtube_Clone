import { signIn, signOut, useSession } from "next-auth/react";
import SearchBar from "./SearchBar";
const AppBar=()=>{
    const session =useSession();
    return (
        
        <div className="w-full flex flex-row justify-between items-center mt-4 ml-3">
            {/* Logo */}
            <div>
            <p>YouTube
            <sup>  IN</sup>
            </p>
        </div>

        {/* Search Bar */}
        <div><SearchBar/></div>
            
            {/* Icons */}
        <div className="flex flex-row gap-4">
            <div onClick={()=>{signOut()}} className="hover:cursor-pointer rounded-lg hover:bg-slate-700 hover:scale-90">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>
</div>
           {
            session.data? <div onClick={()=>{signOut()}} className="hover:cursor-pointer">{session.data?.user?.name}</div>: <div className="hover:cursor-pointer" onClick={()=>signIn()}>Sign in</div>
           } 
        </div>
        </div>
        
        
    )
}

export default AppBar;