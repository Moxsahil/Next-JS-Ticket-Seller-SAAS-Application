"use client";

import { Id } from "@/convex/_generated/dataModel";
import { Ban } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useToast } from "@/hooks/use-toast";
import { refundEventTickets } from "@/app/actions/refundEventTickets";

export default function CancelEventButton({
    eventId,
} : {
    eventId: Id<"events">
}){
    
    const { toast } = useToast();
    const router = useRouter();
    const [isCancelling, setIsCancelling] = useState(false);
    const cancelEvent = useMutation(api.events.cancelEvent);

    const handleClick = async() => {
        if(!confirm("Are you sure you want to cancel this event")){
            return;
        }
        setIsCancelling(true);

        try{
            await refundEventTickets(eventId);
            await cancelEvent({ eventId });
            toast({
                title: "Event Cancelled",
                description: "All tickets have been refunded successfully."
            });
            router.push("/seller/events");
        } catch(error){
            console.error("Failed to cancel event:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to cancel event. Please try again"
            })
        } finally {
            setIsCancelling(false);
        }
    }

    return (
        <button 
            onClick={handleClick}
            disabled={isCancelling}
            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors">
            
            <Ban className="w-4 h-4" />
            <span>{isCancelling ? "Processing ... " : " Cancel Event"}</span>
        </button>
    )
}