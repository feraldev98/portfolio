'use client'
import Terminal from "@/components/Terminal";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState({
    lang: "en",
    flag: "🇪🇸",
  });
  return (
    <Terminal lang={lang}>

      wasaaa
      
    </Terminal>
  );
}




/*

<div className="col-span-2 border border-(--primary) flex flex-col gap-1 px-2 py-1">
            <span className="text-base">{'> SYSTEM.frl'}</span>
            <span className="text-sm">Initializing developer profile...</span>
            <div className="flex flex-col">
              <pre className="text-xs w-full text-center">
                {profileNameAscii}
              </pre>
              <span className="text-center uppercase"> engineer / programmer / teacher </span>
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-base">{'> INFO.TXT'}</span>
              <span className="pl-4 pt-1">{'> Name: John Doe'}</span>
              <span className="pl-4">{'> Location: Cajamarca, Perú'}</span>
              <span className="pl-4">{'> Availability: Available for work'}</span>
              <span className="pl-4">{'> Focus: Full-Stack Development'}</span>
              <span className="pl-4">{'> Status: Building cool things'}</span>
            </div>
            <div className="flex flex-col mt-4">
              <span>{'> ABOUT_ME.TXT'}</span>
              <span className="pl-4 py-1">{'I am a passionate developer with experience in full-stack development. I love creating innovative solutions and teaching others.'}</span>
              <span className="pl-4 py-1">{'Tech enthusiast and lifelong learner.'}</span>
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-base">{'> CURRENT_STACK.TXT'}</span>
              <div className="flex flex-wrap gap-2 items-center justify-center px-2 py-2 text-sm">
                <span className="px-1">{'> NextJS'}</span>
                <span className="px-1">{'> TypeScript'}</span>
                <span className="px-1">{'> TailwindCSS'}</span>
                <span className="px-1">{'> ReactJS'}</span>
                <span className="px-1">{'> FramerMotion'}</span>
                <span className="px-1">{'> Git & Github'}</span>
              </div>
            </div>
          </div>

          izquierda parte. terminal izquierda




          <div className="col-span-3 border border-(--primary)">
            
          </div>


          terminal derecha






        <div className="grid grid-cols-5 gap-1 w-[calc(100%-1rem)] text-(--primary) mx-4 pt-1">
          
          
        </div>
      marco de la terminal completa



<div className="border border-primary my-2 rounded-xs w-[calc(100%-1rem)] flex flex-col justify-center items-center py-2">  
        
        

        
      </div>
      marco suoerior
*/