import React, { useContext } from "react";
import QRCode from "react-qr-code";

import { LoyaltyContext } from "../contexts/LoyaltyContext";

export default function Loyalty() {
    const { renderLoyalty } = useContext(LoyaltyContext);

    return (
        <div>
            {renderLoyalty && (
                <div>
                    <div className="text-center font-semibold text-tch-gray-dk text-3xl xl:text-2xl pt-24 pb-20 xl:p-24">
                        <p>LOYALTY</p>
                        <div className="flex justify-center pt-12">
                            <QRCode
                                value="Coming soon! Until then, keep shopping at The Coffee House Addu!"
                                fgColor="#3F3F3F"
                                level="L"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
