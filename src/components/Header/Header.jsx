import { useState } from "react";
import IdCardModal from "../IdCard/IdCardModal";
import AllAnnouncements from "../Announcements/AllAnnouncements";
import Calendar from "../Calendar/Calender";

const Header = (props) => {
    const { data, changeUser } = props;
    const [showAnnouncements, setShowAnnouncements] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);

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
                onClick={() => setShowCalendar(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                📅 Open Calendar
            </button>

            {/* Modal */}
            {showCalendar && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={() => setShowCalendar(false)} // Close when clicking outside
                >
                    <div
                        className="bg-gray-900 p-6 rounded shadow-lg w-[90%] max-w-3xl relative overflow-auto max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setShowCalendar(false)}
                            className="absolute top-2 right-2 text-4xl font-bold text-red-400 hover:text-red-800"
                        >
                            &times;
                        </button>

                        {/* Calendar content */}
                        <Calendar />
                    </div>
                </div>
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
