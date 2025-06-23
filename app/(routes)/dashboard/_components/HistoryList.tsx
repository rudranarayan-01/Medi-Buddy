"use client";

import Image from 'next/image';
import React, { useState } from 'react'
import AddNewSessionDialog from './AddNewSessionDialog';

function HistoryList() {
    const [historyList, setHistroyList] = useState([]);
  return (
    <div className='mt-10'>
        {historyList.length == 0?
        <div className='flex items-center flex-col justify-center p-7 border-4 border-dashed rounded-2xl' >
            <Image src={"/medical-assistance.png"} alt='medical-assistance' height={150} width={150}/>
            <h2 className='font-bold text-xl mt-5'>No Recent Consulations</h2>
            <p>It looks like you haven't consulted with any doctors yet.</p>
            <AddNewSessionDialog/>
        </div>
        :<div>
            List
        </div>
        }
    </div>
  )
}

export default HistoryList