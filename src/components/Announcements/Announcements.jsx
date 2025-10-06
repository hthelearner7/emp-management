import React, { useState, useEffect } from "react";
import AddAnnouncement from "./AddAnnouncement";
import AllAnnouncements from "./AllAnnouncements";

const Announcements = ({ isAdmin }) => {
    const [announcements, setAnnouncements] = useState([]);
    const [editAnnouncement, setEditAnnouncement] = useState(null);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("announcements")) || [];
        setAnnouncements(saved);
    }, []);

    const saveToStorage = (data) => {
        localStorage.setItem("announcements", JSON.stringify(data));
    };

    const handleAdd = (newAnn) => {
        let updated;
        if (editAnnouncement) {
            updated = announcements.map((a) =>
                a.id === editAnnouncement.id ? newAnn : a
            );
            setEditAnnouncement(null);
        } else {
            updated = [newAnn, ...announcements];
        }
        setAnnouncements(updated);
        saveToStorage(updated);
    };

    const handleDelete = (id) => {
        if (!confirm("Delete this announcement?")) return;
        const updated = announcements.filter((a) => a.id !== id);
        setAnnouncements(updated);
        saveToStorage(updated);
    };

    const handleClearMonth = (month) => {
        if (!confirm(`Clear all announcements for ${month}?`)) return;
        const updated = announcements.filter(
            (a) =>
                new Date(a.createdAt).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                }) !== month
        );
        setAnnouncements(updated);
        saveToStorage(updated);
    };

    const handleClearAll = () => {
        if (!confirm("Clear ALL announcements?")) return;
        setAnnouncements([]);
        saveToStorage([]);
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 p-6">
            {isAdmin && (
                <AddAnnouncement
                    onAdd={handleAdd}
                    editAnnouncement={editAnnouncement}
                    onCancelEdit={() => setEditAnnouncement(null)}
                />
            )}

            <AllAnnouncements
                announcements={announcements}
                isAdmin={isAdmin}
                onEdit={(ann) => setEditAnnouncement(ann)}
                onDelete={handleDelete}
                onClearMonth={handleClearMonth}
            />

            {isAdmin && announcements.length > 0 && (
                <div className=" bottom-6 right-6">
                    <button
                        onClick={handleClearAll}
                        className="px-4 py-2 bg-red-400 text-white rounded-lg shadow-lg hover:bg-red-500"
                    >
                        Clear All Announcements
                    </button>
                </div>
            )}
        </div>
    );
};

export default Announcements;
