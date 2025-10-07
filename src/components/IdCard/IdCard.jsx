import React from "react";

const IdCard = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    // console.log(user);

    if (!user) {
        return (
            <div className="p-4 text-center text-gray-500">
                No user data found.
            </div>
        );
    }

    const {
        firstName,
        lastName,
        empId,
        role,
        email,
        department,
        designation,
        dateOfJoining,
    } = user.data;

    const bgColor = role === "Employee" ? "bg-blue-200" : "bg-orange-200";

    return (
        <div
            className={`max-w-sm mx-auto ${bgColor} shadow-xl rounded-xl p-6 border border-gray-200`}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-bold text-gray-800">
                    Company Name Pvt. Ltd.
                </h1>
                <span className="text-xs text-gray-500 italic">
                    Employee ID Card
                </span>
            </div>

            {/* Avatar */}
            <div className="flex items-center justify-center mb-4">
                <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600 shadow-inner">
                    {firstName[0]}
                    {lastName[0]}
                </div>
            </div>

            {/* User Info */}
            <div className="text-center space-y-1 mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    {firstName} {lastName}
                </h2>
                <p className="text-sm text-gray-500">{designation}</p>
                <p className="text-sm text-gray-500">{department}</p>
            </div>

            {/* Extra Details */}
            <div className="text-sm text-gray-700 space-y-1 border-t border-b py-3">
                <p>
                    <span className="font-medium">Employee ID:</span> {empId}
                </p>
                <p>
                    <span className="font-medium">Role:</span> {role}
                </p>
                <p>
                    <span className="font-medium">Email:</span> {email}
                </p>
                <p>
                    <span className="font-medium">Date of Joining:</span>{" "}
                    {dateOfJoining}
                </p>
            </div>

            {/* Footer */}
            <div className="mt-3 text-xs text-gray-500 text-center italic">
                Authorized by HR Department
            </div>
        </div>
    );
};

export default IdCard;
