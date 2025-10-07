import React, { useState, useEffect, useContext } from "react";
import AddEventModal from "./AddEventModal";
import { AuthContext } from "../../context/AuthProvider";
import AllEventsOnDate from "./AllEventsOnDate";

const Calendar = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const userId = user?.data?.id;
    const { userData, setEmployeeUserData } = useContext(AuthContext);

    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    // Load employee events from localStorage
    useEffect(() => {
        const employees = userData?.employeesData || [];
        const emp = employees.find((e) => e.id === userId);
        setEvents(emp?.events || []);
    }, [userId, userData]);

    const saveEvents = (newEvents) => {
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const updatedEmployees = employees.map((e) =>
            e.id === userId ? { ...e, events: newEvents } : e
        );

        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
        setEmployeeUserData(userData, updatedEmployees);

        const newUserData = updatedEmployees.find((e) => e.id === userId);
        localStorage.setItem(
            "loggedInUser",
            JSON.stringify({ ...user, data: newUserData })
        );

        setEvents(newEvents);
    };

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const handlePrevMonth = () =>
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );

    const handleNextMonth = () =>
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );

    const openModal = (date) => {
        setSelectedDate(date);
        setShowModal(true);
    };

    const addEvent = (newEvent) => {
        const updatedEvents = [...events, newEvent];
        saveEvents(updatedEvents);
        setShowModal(false);
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const numDays = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);

    const monthEvents = (day) => {
        const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
            day
        ).padStart(2, "0")}`;
        return events.filter((e) => e.date === dateStr);
    };

    return (
        <div className="p-4 text-white bg-gray-800">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={handlePrevMonth}
                    className="px-2 py-1 border rounded hover:bg-gray-100"
                >
                    Prev
                </button>

                <h2 className="text-xl font-bold">
                    {currentDate.toLocaleString("default", { month: "long" })}{" "}
                    {year}
                </h2>

                <button
                    onClick={handleNextMonth}
                    className="px-2 py-1 border rounded hover:bg-gray-100"
                >
                    Next
                </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
                {/* Weekday headers */}
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div key={d} className="text-center font-semibold">
                        {d}
                    </div>
                ))}

                {/* Empty slots before the first day */}
                {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                ))}

                {/* Days */}
                {Array.from({ length: numDays }).map((_, i) => {
                    const day = i + 1;
                    const dayEvents = monthEvents(day);

                    const formattedDate = `${year}-${String(month + 1).padStart(
                        2,
                        "0"
                    )}-${String(day).padStart(2, "0")}`;

                    const today = new Date();
                    const isToday =
                        today.getFullYear() === year &&
                        today.getMonth() === month &&
                        today.getDate() === day;

                    return (
                        <div
                            key={day}
                            onClick={() => openModal(formattedDate)}
                            className={`border p-2 h-15 cursor-pointer relative rounded-lg hover:bg-gray-100 hover:text-gray-700 hover:border-black ${
                                isToday ? "border-yellow-500 border-3" : ""
                            }`}
                        >
                            <div className="font-medium">{day}</div>

                            {/* Yellow "Today" badge */}
                            {isToday && (
                                <span className="absolute top-1 right-1 text-blue-800 bg-yellow-400 text-xs font-semibold px-2 py-[1px] rounded-full">
                                    Today
                                </span>
                            )}

                            {/* Event Dots */}
                            {dayEvents.length > 0 && (
                                <div className="absolute bottom-1 left-1 flex gap-1 flex-wrap">
                                    {dayEvents.map((e, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-blue-400 w-2 h-2 rounded-full"
                                        ></span>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Add Event Modal */}

            {showModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-around items-center z-50 flex-col md:flex-row">
                    <AddEventModal
                        date={selectedDate}
                        onClose={() => setShowModal(false)}
                        onSave={addEvent}
                    />
                    <AllEventsOnDate
                        selectedDate={selectedDate}
                        events={events}
                    />
                </div>
            )}
        </div>
    );
};

export default Calendar;
