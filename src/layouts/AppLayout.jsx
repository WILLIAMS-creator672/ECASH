import { Outlet } from "react-router-dom";

export default function AppLayout(){
    return(
        <div className="flex">
            <aside className="bg-black text-white">this is aside bar</aside>
            <main><Outlet/></main>
        </div>
    )
}