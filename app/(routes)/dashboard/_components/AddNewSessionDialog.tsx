"use client";
import React, { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRightIcon } from 'lucide-react'
import DoctorAgentCard, { doctorAgent } from './DoctorAgentCard';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function AddNewSessionDialog() {
  const [note, setNote] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [suggestedDoctor, setSuggestedDoctor] = useState<doctorAgent | undefined>(undefined)
  const [selectedDoctor, setSelectedDoctor] = useState<doctorAgent | undefined>(undefined)
  const router = useRouter();

  const onClickNext = async () => {
    if (!note) return;

    setLoading(true);
    try {
      console.log("Sending note:", note);
      const result = await axios.post("/api/suggest-doctors/", { notes: note });
      console.log("Doctor suggested:", result.data);
      setSuggestedDoctor(result.data);
    } catch (error) {
      console.error("Error fetching suggested doctor:", error);
      alert("Failed to suggest doctor. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const onStartConsultation = async () => {
    if (!note || !selectedDoctor) return;

    setLoading(true);
    try {
      const result = await axios.post("/api/session-chat", {
        notes: note,
        doctorId: selectedDoctor
      });
      console.log("Session started:", result.data);
      if (result.data?.sessionId) {
        router.push(`/dashboard/medical-agent/${result.data.sessionId}`);
      }
    } catch (error) {
      console.error("Error starting consultation:", error);
      alert("Failed to start session.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button className='mt-3' onClick={onStartConsultation}>+ Start a Consultation</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Basic Details</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2>Add Symptoms and Any Other Details</h2>
              <Textarea
                placeholder='Add details here'
                className='h-[150px] mt-1'
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant="destructive">Cancel</Button>
          </DialogClose>
          <Button disabled={!note || loading} onClick={onClickNext}>
            {loading ? "Loading..." : <>Next <ArrowRightIcon className='ml-1 h-4 w-4' /></>}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddNewSessionDialog;
