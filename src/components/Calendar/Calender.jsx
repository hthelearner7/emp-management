import React, { useState, useEffect, useContext } from "react";
import AddEventModal from "./AddEventModal";
import { AuthContext } from "../../context/AuthProvider";

const Calendar = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    const userId = user?.data?.id;
    const { userData, setEmployeeUserData } = useContext(AuthContext);

    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    // Load employee events from localStorage
    console.log(userData);

    useEffect(() => {
        const employees = userData.employeesData || [];
        const emp = employees.find((e) => e.id === userId);
        setEvents(emp?.events || []);
    }, [userId]);

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
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={handlePrevMonth}
                    className="px-2 py-1 border rounded"
                >
                    Prev
                </button>
                <h2 className="text-xl font-bold">
                    {currentDate.toLocaleString("default", { month: "long" })}{" "}
                    {year}
                </h2>
                <button
                    onClick={handleNextMonth}
                    className="px-2 py-1 border rounded"
                >
                    Next
                </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div key={d} className="text-center font-semibold">
                        {d}
                    </div>
                ))}

                {/* Empty slots before first day */}
                {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                ))}

                {/* Days */}
                {Array.from({ length: numDays }).map((_, i) => {
                    const day = i + 1;
                    const dayEvents = monthEvents(day);
                    return (
                        <div
                            key={day}
                            onClick={() =>
                                openModal(
                                    `${year}-${String(month + 1).padStart(
                                        2,
                                        "0"
                                    )}-${String(day).padStart(2, "0")}`
                                )
                            }
                            className="border p-2 h-20 cursor-pointer relative hover:bg-gray-100 rounded"
                        >
                            <div className="font-medium">{day}</div>
                            {dayEvents.length > 0 && (
                                <div className="absolute bottom-1 left-1 flex gap-1">
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

            {showModal && (
                <AddEventModal
                    date={selectedDate}
                    onClose={() => setShowModal(false)}
                    onSave={addEvent}
                />
            )}
        </div>
    );
};

export default Calendar;
