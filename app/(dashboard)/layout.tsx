import { Sidebar } from "./_components/sidebar"

interface DashboardlayoutProps {
    children: React.ReactNode
}

export default function Dashboardlayout({ children }: DashboardlayoutProps) {
    return (
        <main className="h-full">
            <Sidebar/>
            <div className="pl-[60px] h-full">
                {children}
            </div>
        </main>
    )
}