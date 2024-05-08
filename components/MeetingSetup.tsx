"use client";
import { Call, DeviceSettings, VideoPreview, useCall } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({ setIsSetupComplete}:{ setIsSetupComplete:(value : boolean)=> void}) => {
  const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false);
  const call = useCall();
  useEffect(() => {
    if (isMicCamToggleOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [call?.camera, call?.microphone, isMicCamToggleOn]);
  return (
    
      <div className="py-[50px] flex h-full w-full flex-col items-center justify-center gap-3 text-white">
        <h1 className="text-2xl font-bold">Setup</h1>
        <VideoPreview className="w-[500px]"/>
        <div className="flex h-16 items-center justify-center gap-3 ">
            <label className=" flex items-center justify-center gap-2 font-medium">
                <input type="checkbox" checked={isMicCamToggleOn} onChange={(e)=>setIsMicCamToggleOn(e.target.checked)} />
                Join with mic and camera off
            </label>
            <DeviceSettings />
        </div>
        <Button className="rounded-md bg-green-500 px-4 py-2.5" onClick={()=>{
            call?.join();

            setIsSetupComplete(true);
        }}>
            Join Meeting
        </Button>
      </div>
    
  );
};

export default MeetingSetup;
