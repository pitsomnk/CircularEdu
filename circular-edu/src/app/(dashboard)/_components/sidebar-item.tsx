"use client"

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react"
import { usePathname,useRouter } from "next/navigation";


interface SidebarItemProps{
    icon:LucideIcon;
    label:string;
    href:string;
};
export const SidebarItem =({icon:Icon,label,href}:SidebarItemProps)=>{

    const pathname=usePathname();
    const router = useRouter();

    const isActive = (pathname==="/" && href ==="/")||
    pathname===href||
    pathname?.startsWith('${href}/');

    const onClick =() =>{
        router.push(href);
    }
 
    return(
        <button 
        onClick={onClick}
        type="button"
        className={cn("flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
            isActive && "text-yellow-500 bg-yellow-200/20 hover:bg-yellow-200/20 hover:text-yellow-500"
        )}>
            <div className="flex items-center gap-x-2n py-4">
               <Icon
               size={22}
               className={cn("text-slate-500",
                isActive && "text-yellow-500"
               )}/>
               {label}  
            </div>
            <div className={cn("ml-auto opacity-0 border-2 border-yellow-500 h-full transition-all",
                isActive && "opacity-100"
            )}/>
        </button>
    )
}