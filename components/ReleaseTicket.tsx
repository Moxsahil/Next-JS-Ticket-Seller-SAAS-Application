"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";;
import { useMutation } from "convex/react";
import { XCircle } from "lucide-react";
import { useState } from "react";
;


export default function({
    eventId, waitingListId } : {
        eventId: Id<"events">;
        waitingListId: Id<"waitingList">
    }){

    const [isReleasing, setIsReleasing] = useState(false)
    const releaseTicket = useMutation(api.waitingList.releaseTicket);

    const handleRelease = async () => {
        if(!confirm("Are you sure!, You want to release your Ticket offer?")) return;

        try{
            setIsReleasing(true);
            await releaseTicket({
                eventId,
                waitingListId,
            });
        }catch(error){
            console.error("Error releasign ticket: ", error);
        } finally{setIsReleasing(false);
        }
    }
    return (
        <button 
            onClick={handleRelease}
            disabled={isReleasing}
            className="mt-2 w-full flex items-center justify-center gap-2 py-2 px-4 bg-rose-200 text-red-600 rounded-lg hover:bg-rose-300 transition disabled:opacity-50 disabled:cursor-not-allowed">
            <XCircle  className="w-4 h-4" />
            {isReleasing ? "Releasing..." : "Release Ticket Offer"}
        </button>
    )
}