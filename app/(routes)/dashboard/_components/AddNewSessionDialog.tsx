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
import DoctorAgentCard,{doctorAgent} from './DoctorAgentCard';
import axios from 'axios';

function AddNewSessionDialog() {
  const [note, setNote] = useState<string>();
  const[loading, setloading] = useState(false);
  const [suggestedDoctor, setSuggestedDoctor]  = useState<doctorAgent>
  const [selectedDoctor, setSelectedDoctor] = useState<doctorAgent>

  const onClickNext = async() =>{
    setloading(true);
    const result = await axios.post("/api/suggest-doctors/",{notes:note});

    console.log(result.data);
    setSuggestedDoctor(result.data);
    

  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button className='mt-3'>+ Start a Consultation</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Dasic Details</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2>Add Symptoms and Any Other Details</h2>
              <Textarea placeholder='Add details here' className='h-[150px] mt-1' onChange={(e)=>setNote(e.target.value)} />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant="destructive">Cancel</Button>
          </DialogClose>
          <Button disabled={!note} >Next<ArrowRightIcon/></Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddNewSessionDialog