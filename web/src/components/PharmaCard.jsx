import React, { useState, useRef } from 'react';
import userImage from '../assets/icons/user.png';
import EditProfile from './EditProfile';


const PharmaCard = ({ pharma }) => {


    // console.log(pharma)
    const [isEditing, setIsEditing] = useState(false)
    const pharmaIdRef = useRef(null);

    // Delete pharma
    async function deletePharma() {
        console.log('Deleting pharma with ID:', pharma.id);
    }

    // Edit pharma profile
    function editPharmaProfile() {
        pharmaIdRef.current = pharma.id; // Assign the pharma ID to the ref
        setIsEditing(true); // Show the edit form
    }

    function handleEditing() {

        setIsEditing(!isEditing)
    }
    return (
        <>

            {/* Edit Form */}
            {isEditing ? <EditProfile task={'edit pharma'} handleEditing={handleEditing} /> :

                <div
                    className="border-2 border-blue-950 rounded-lg flex flex-col items-start justify-start p-4 gap-5 mt-5 w-full">
                    <div className="flex gap-5">
                        <div className="border-2 border-blue-950">
                            <img className="w-24" src={userImage} alt="pharma" />
                        </div>
                        <div className="mt-3">
                            <div>
                                <span className="text-xl">Name:</span> {pharma.pharma_name}
                            </div>
                            <div className="mt-2">
                                <span className="text-xl">Registration / Licence :</span> {pharma.pharma_RN}
                            </div>
                        </div>
                        <div className="mt-3">
                            <div>
                                <span className="text-xl">Email:</span> {pharma.pharma_email}
                            </div>
                            <div className="mt-2">
                                <span className="text-xl">Mobile:</span> {pharma.pharma_mobile}
                            </div>
                        </div>
                        <div className="mt-3">
                            <div>
                                <span className="text-xl">Qualification:</span> {pharma.pharma_qualification}
                            </div>
                            <div className="flex justify-end items-center gap-4 mt-4">
                                <button
                                    className="border-2 border-blue-950 rounded-lg p-2 w-24 text-center hover:shadow hover:shadow-blue-950"
                                    onClick={editPharmaProfile}
                                >
                                    Edit
                                </button>
                                <button
                                    className="border-2 border-blue-950 rounded-lg p-2 w-24 text-center hover:shadow hover:shadow-blue-950"
                                    onClick={deletePharma}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PharmaCard
