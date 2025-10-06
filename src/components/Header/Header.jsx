import { useState } from "react";
import IdCardModal from "../IdCard/IdCardModal";
import AllAnnouncements from "../Announcements/AllAnnouncements";

const Header = (props) => {
    const { data, changeUser } = props;
    const [showAnnouncements, setShowAnnouncements] = useState(false);

    const logOutUser = () => {
        localStorage.setItem("loggedInUser", null);
        changeUser("");
    };

    return (
        <div className="p-6 flex justify-between border-b-1">
            <h1 className="text-2xl font-medium">
                Hello <br />{" "}
                <span className="text-3xl font-semibold">
                    {data?.firstName?.toUpperCase()} 😃
                </span>
            </h1>
            <IdCardModal />
            {data?.role === "Employee" && (
                <>
                    <button
                        onClick={() => setShowAnnouncements(true)}
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-all"
                    >
                        📢 Announcements
                    </button>

                    {showAnnouncements && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                            onClick={() => setShowAnnouncements(false)} // close when clicking outside
                        >
                            <div
                                className="bg-white dark:bg-gray-800 w-[90%] max-w-4xl h-[80vh] rounded-xl shadow-2xl p-6 relative overflow-hidden"
                                onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setShowAnnouncements(false)}
                                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white text-2xl font-bold"
                                >
                                    ×
                                </button>

                                {/* Scrollable Content */}
                                <div className="overflow-y-auto h-[calc(100%-3rem)] pr-2 custom-scrollbar w-[98%]">
                                    <AllAnnouncements
                                        className="w-full"
                                        isAdmin={false}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}

            <button
                className="bg-red-400 rounded-md px-2 h-12 w-24 font-medium"
                onClick={logOutUser}
            >
                Log Out
            </button>
        </div>
    );
};

export default Header;
