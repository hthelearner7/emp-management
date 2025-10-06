import React, { useState } from "react";
import IdCard from "./IdCard"; // import your IdCard component

const IdCardModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            {/* Trigger Button (ID card icon) */}
            <button
                onClick={openModal}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md h-18"
            >
                🆔 ID Card
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={closeModal}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl shadow-xl p-6 w-[400px] max-w-full z-10">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            ✕
                        </button>

                        {/* ID Card Component */}
                        <IdCard />
                    </div>
                </div>
            )}
        </div>
    );
};

export default IdCardModal;
