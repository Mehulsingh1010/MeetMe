"use client";
// import React, { useState } from "react";
// import { cn } from "@/lib/utils";
// import {
//   CallControls,
//   CallParticipantsList,
//   CallStatsButton,
//   CallingState,
//   PaginatedGridLayout,
//   SpeakerLayout,
//   useCallStateHooks,
// } from "@stream-io/video-react-sdk";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { LayoutList, Loader, LucideLayoutList, Users } from "lucide-react";
// import { useSearchParams } from "next/navigation";
// import EndCallButton from "./EndCallButton";

// type CallLayoutType = "grid" | "Speaker-left" | "Speaker-right";

// const MeetingRoom = () => {
//   const SearchParams = useSearchParams();
//   const isPersonalRoom = !!SearchParams.get("personal");
//   const [layout, setLayout] = useState<CallLayoutType>("Speaker-left");
//   const [showParticipants, setShowParticipants] = useState(false);
//   const { useCallCallingState } = useCallStateHooks();

//   const callingState = useCallCallingState();

//   if (callingState !== CallingState.JOINED) return <Loader />;

//   const handleLayoutChange = (layoutType: CallLayoutType) => {
//     setLayout(layoutType);
//   };

//   const CallLayout = () => {
//     switch (layout) {
//       case "grid":
//         return <PaginatedGridLayout />;
//       case "Speaker-left":
//         return <SpeakerLayout participantsBarPosition="right" />;
//       case "Speaker-right":
//         return <SpeakerLayout participantsBarPosition="left" />;
//       default:
//         return null; // Return null or default layout component if needed
//     }
//   };

//   return (
//     <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
//       <div className="relative flex size-full items-center justify-center">
//         <div className="flex size-full max-w-[1000px] items-center">
//           <CallLayout />
//         </div>
//         <div
//           className={cn("h-[calc(100vh-86px)] hidden ml-2", {
//             "show-block": showParticipants,
//           })}
//         >
//           <CallParticipantsList onClose={() => setShowParticipants(false)} />
//         </div>
//         <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
//           <CallControls />

//           <DropdownMenu>
//             <div className="flex items-center">
//               <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19323d] px-4 py-2 hover:bg-[#4c535b]">
//                 <LayoutList size={20} className="text-white " />
//               </DropdownMenuTrigger>
//             </div>

//             <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
//               {["grid", "Speaker-left", "Speaker-right"].map((item, index) => (
//                 <div
//                   key={index}
//                   onClick={() => handleLayoutChange(item as CallLayoutType)}
//                 >
//                   <DropdownMenuItem>{item}</DropdownMenuItem>
//                 </div>
//               ))}
//               <DropdownMenuSeparator />
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <CallStatsButton />
//           <button onClick={() => setShowParticipants((prev) => !prev)}>
//             <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
//               <Users size={20} className="text-white" />
//             </div>
//           </button>
//           {!isPersonalRoom && <EndCallButton />}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MeetingRoom;

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutList, Loader, Users } from "lucide-react";
import { useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";

type CallLayoutType = "grid" | "Speaker-left" | "Speaker-right";

const MeetingRoom = () => {
  const SearchParams = useSearchParams();
  const isPersonalRoom = !!SearchParams.get("personal");
  const [layout, setLayout] = useState<CallLayoutType>("Speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();

  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const handleLayoutChange = (layoutType: CallLayoutType) => {
    setLayout(layoutType);
  };

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "Speaker-left":
        return <SpeakerLayout participantsBarPosition="right" />;
      case "Speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return null; // Return null or default layout component if needed
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "show-block": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
        <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
          <CallControls />

          <DropdownMenu>
            <div className="flex items-center">
              <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19323d] px-4 py-2 hover:bg-[#4c535b]">
                <LayoutList size={20} className="text-white " />
              </DropdownMenuTrigger>
            </div>

            <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
              {["grid", "Speaker-left", "Speaker-right"].map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleLayoutChange(item as CallLayoutType)}
                >
                  <DropdownMenuItem>{item}</DropdownMenuItem>
                </div>
              ))}
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>

          <CallStatsButton />
          <button onClick={() => setShowParticipants((prev) => !prev)}>
            <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              <Users size={20} className="text-white" />
            </div>
          </button>
          {!isPersonalRoom && <EndCallButton />}
        </div>
      </div>
    </section>
  );
};

export default MeetingRoom;
