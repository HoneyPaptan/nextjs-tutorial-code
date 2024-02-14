import Card from "@/components/card";
import Link from "next/link";
export default function ComplexDashboardPage(){
    return (
        <Card>
            <div>Notifications</div>
            <Link className="pr-3 flex gap-2" href="/complex-dashboard/archived">Archived</Link>
        </Card>

    ) 
}