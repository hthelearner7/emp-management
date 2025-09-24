// import React from "react";

// const ProgressBar = () => {

//     const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

//     return (
//         <div className="w-full max-w-md">
//             <div className="flex justify-between mb-1 text-sm font-medium">
//                 <span>Progress</span>
//                 <span>{percentage}%</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
//                 <div
//                     className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-out"
//                     style={{ width: `${percentage}%` }}
//                 ></div>
//             </div>
//             <p className="mt-2 text-sm text-gray-600">
//                 {completed} of {total} tasks completed
//             </p>
//         </div>
//     );
// };

// export default ProgressBar;

// ProgressBar.jsx
// import React from "react";

// const ProgressBar = () => {
//     const data = JSON.parse(localStorage.getItem("loggedInUser"))?.data
//         ?.taskSummary;
//     let completed = data.completedTasks || 0;
//     let total = 0;
//     for (const key in data) {
//         total += data[key];
//     }
//     const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

//     return (
//         <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//             <div className="w-3/4 max-w-2xl bg-white rounded-2xl shadow-xl p-8">
//                 <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
//                     Employee Progress
//                 </h2>

//                 {/* Progress container */}
//                 <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
//                     <div
//                         className="h-6 rounded-full transition-all duration-500 ease-out"
//                         style={{
//                             width: `${percentage}%`,
//                             background: `linear-gradient(90deg, #4ade80, #22c55e, #16a34a)`,
//                         }}
//                     ></div>
//                 </div>

//                 {/* Percentage text */}
//                 <p className="text-center mt-4 text-lg font-semibold text-gray-700">
//                     {percentage}% Completed ({completed}/{total} tasks)
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default ProgressBar;

// ProgressBar.jsx
import React from "react";

const ProgressBar = () => {
    const data = JSON.parse(localStorage.getItem("loggedInUser"))?.data
        ?.taskSummary;
    let completed = data.completedTasks || 0;
    let total = 0;
    for (const key in data) {
        total += data[key];
    }
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return (
        <div className="w-full px-6 py-4 bg-gray-800">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Employee Progress
                </h2>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-5">
                    <div
                        className="h-5 rounded-full transition-all duration-500 ease-out"
                        style={{
                            width: `${percentage}%`,
                            background: `linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa)`,
                        }}
                    ></div>
                </div>

                {/* Percentage + Stats */}
                <div className="flex justify-between mt-3 text-sm text-gray-600">
                    <span>{percentage}% Completed</span>
                    <span>
                        {completed}/{total} tasks
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
