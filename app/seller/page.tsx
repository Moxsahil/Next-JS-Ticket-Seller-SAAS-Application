import SellerDashboard from "@/components/SellerDashboard";
import { auth } from "@clerk/nextjs/server"

export default async function SellerPage(){

    const { userId } = await auth();
    if(!userId) return ("/");
    return (
        <div className="min-h-screen bg-gray-50">
            <SellerDashboard />
        </div>
    )
}