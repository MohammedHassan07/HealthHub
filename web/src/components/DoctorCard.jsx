import React, { useState, useRef } from 'react';
import userImage from '../assets/icons/user.png';
import EditProfile from './EditProfile';

const DoctorCard = ({ doctor }) => {

    const [isEditing, setIsEditing] = useState(false)
    const doctorIdRef = useRef(null);

    // Delete doctor
    async function deleteDoctor() {
        console.log('Deleting doctor with ID:', doctor.id);
    }

    // Edit doctor profile
    function editDoctorProfile() {
        doctorIdRef.current = doctor.id; // Assign the doctor ID to the ref
        setIsEditing(true); // Show the edit form
    }

    function handleEditing() {

        setIsEditing(!isEditing)
    }

    return (
        <>

            {/* Edit Form */}
            {isEditing ? <EditProfile task={'edit Doctor'} handleEditing={handleEditing} /> :

                <div
                    className="border-2 border-blue-950 rounded-lg flex flex-col items-start justify-start p-4 gap-5 mt-5">
                    <div className="flex gap-5">
                        <div className="border-2 border-blue-950">
                            <img className="w-24" src={userImage} alt="Doctor" />
                        </div>
                        <div className="mt-3">
                            <div>
                                <span className="text-xl">Name:</span> {doctor.name}
                            </div>
                            <div className="mt-2">
                                <span className="text-xl">Registration / Licence :</span> {doctor.registration}
                            </div>
                        </div>
                        <div className="mt-3">
                            <div>
                                <span className="text-xl">Email:</span> {doctor.email}
                            </div>
                            <div className="mt-2">
                                <span className="text-xl">Mobile:</span> {doctor.mobile}
                            </div>
                        </div>
                        <div className="mt-3">
                            <div>
                                <span className="text-xl">Qualification:</span> {doctor.qualification}
                            </div>
                            <div className="flex justify-end items-center gap-4 mt-4">
                                <button
                                    className="border-2 border-blue-950 rounded-lg p-2 w-24 text-center hover:shadow hover:shadow-blue-950"
                                    onClick={editDoctorProfile}
                                >
                                    Edit
                                </button>
                                <button
                                    className="border-2 border-blue-950 rounded-lg p-2 w-24 text-center hover:shadow hover:shadow-blue-950"
                                    onClick={deleteDoctor}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default DoctorCard;
