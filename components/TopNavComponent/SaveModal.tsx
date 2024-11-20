// "use client";
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, Heart } from 'lucide-react';

// const SaveModal = () => {
//     const [isSaved, setIsSaved] = useState(false);

//     useEffect(() => {
//         const savedState = localStorage.getItem("isSaved") === "true";
//         setIsSaved(savedState);
//     }, []);

//     const toggleSaveState = () => {
//         const newSavedState = !isSaved;
//         setIsSaved(newSavedState);
//         localStorage.setItem("isSaved", String(newSavedState));
//     };

//     return (
//         <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-4">
//             <div className="flex items-center justify-between mb-4">
//                 <button className="flex items-center text-gray-600 hover:text-gray-800">
//                     <ChevronLeft className="w-5 h-5 mr-1" />
//                     <span>See all properties</span>
//                 </button>
                
//                 <button 
//                     onClick={toggleSaveState}
//                     className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
//                 >
//                     <Heart 
//                         className={`w-5 h-5 transition-colors ${
//                             isSaved ? 'text-red-500 fill-red-500' : 'text-gray-600'
//                         }`}
//                     />
//                     <span>Save</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SaveModal;
// components/HeartToggleButton.tsx
"use client";
import { useEffect, useState } from 'react';

const SaveModal: React.FC = () => {
    const [isSaved, setIsSaved] = useState<boolean>(false);

    useEffect(() => {
        // Check saved state in localStorage on mount
        const savedState = localStorage.getItem('isSaved') === 'true';
        setIsSaved(savedState);
    }, []);

    const toggleSaveState = () => {
        const newState = !isSaved;
        setIsSaved(newState);
        localStorage.setItem('isSaved', String(newState));
    };

    return (
        <button
            onClick={toggleSaveState}
            className={`flex items-center p-2 border rounded-lg transition-colors duration-500 ${isSaved ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}`}
        >
            <span className="heart-icon">
                <i className={`bx ${isSaved ? 'bxs-heart' : 'bx-heart'}`}></i>
            </span>
            Save
        </button>
    );
};

export default SaveModal;