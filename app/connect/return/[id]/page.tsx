"use client";

import { ArrowBigRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Return(){
    return(
        <div>
            <div>
                <div>
                    {/* Success Header */}
                    <div className="bg-gradient-to-r from-green-500 to-gray-600 p-6 text-white text-center">
                        <div className="mb-4 flex justify-center">
                            <CheckCircle2 className="w-16 h-16" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">
                            Account Connected!
                        </h2>
                        <p>
                            Your Stripe account has been successfully connected
                        </p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="space-y-4">
                            <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                                <h3 className="font-medium text-green-900 mb-1">
                                    What happens next?
                                </h3>
                                <ul className="text-sm text-green-700 space-y-2">
                                    <li>• You can now create and tell tickets for events</li>
                                    <li>• Payments will be processed through your Stripe account</li>
                                    <li>• Funds will be transferred automatically</li>
                                </ul>
                            </div>

                            <Link 
                                href="/seller"
                                className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 items-center justify-center gap-2"
                            >
                                Go to Seller Dashboard
                                <ArrowBigRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}