"use client";
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

function MedicalVoiceAgent() {
  const { sessionId } = useParams();

  useEffect(() => {
    sessionId && getSessionInfo();
  }, [sessionId])

  const getSessionInfo = async () => {
    const result = await axios.get("/api/session-chat?sessionId=" + sessionId);
    console.log(result.data);
  }

  return (
    <div>{sessionId}</div>
  )
}

export default MedicalVoiceAgent