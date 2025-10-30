import React from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import partsData from "./data/parts";

function UploadParts() {
    const uploadParts = async () => {
        try {
            for (const part of partsData) {
                await addDoc(collection(db, "parts"), part);
                console.log(`Added: ${part.name}`);
            }
            console.log("All parts uploaded successfully!");
        } catch (error) {
            console.error("Error uploading parts:", error);
        }
    };

    return (
        <button
            onClick={uploadParts}
            className="bg-green-600 text-white px-4 py-2 rounded mt-4"
        >
            Upload Parts to Firebase
        </button>
    );
}

export default UploadParts;
