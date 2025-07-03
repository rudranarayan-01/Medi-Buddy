import React from 'react'
import Image from 'next/image'
import { doctorAgent } from './DoctorAgentCard'

interface SuggestedDoctorCardProps {
  doctor: doctorAgent;
  selectedDoctor?: doctorAgent;
  setSelectedDoctor: (doctor: doctorAgent) => void;
}

const SuggestedDoctorCard: React.FC<SuggestedDoctorCardProps> = ({ doctor, selectedDoctor, setSelectedDoctor }) => {
  const isSelected = selectedDoctor?.id === doctor.id;

  return (
    <div
      className={`flex flex-col items-center border rounded-2xl shadow p-5 hover:border-blue-500 cursor-pointer transition 
      ${isSelected ? 'border-blue-500' : 'border-gray-300'}`}
      onClick={() => setSelectedDoctor(doctor)}
    >
      <Image
        src={doctor.image}
        alt={`${doctor.specialist}`}
        width={70}
        height={70}
        className="w-[50px] h-[50px] rounded-full object-cover"
      />
      <div className="text-center mt-2">
        <p className="text-sm text-gray-500">{doctor.specialist}</p>
      </div>
    </div>
  )
}

export default SuggestedDoctorCard;
