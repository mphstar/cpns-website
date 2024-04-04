"use client"
import { useState } from "react"
import HeaderAdmin from "../organisms/HeaderAdmin"
import SidebarAdmin from "../organisms/SidebarAdmin"

const AdminPage = ({children, breadcrumb, title}) => {

    const [showSidebar, setShowSidebar] = useState(false)

    const handleSidebar = (e) => {
        setShowSidebar(!showSidebar)
    }

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <SidebarAdmin title={title} showSidebar={showSidebar} handleSidebar={handleSidebar} />
            <div className="md:pl-[300px] flex flex-col duration-300 ease-in-out">
                <HeaderAdmin title={title} breadcrumb={breadcrumb} handleSidebar={handleSidebar} />
                <div className="px-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminPage