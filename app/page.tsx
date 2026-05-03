import { Navbar } from "@/components/Navbar";
import { profileNameAscii } from "@/static/profileNameAscii";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center justify-center">

      <div className="border border-primary my-2 rounded-xs w-[calc(100%-1rem)] flex flex-col justify-center items-center py-2">  
        {/* HEADER */}
        <div className="border-b border-primary text-sm w-full grid grid-cols-3 gap-2 px-4 py-1">
          <div className="grid grid-cols-4 gap-2 text-sm w-full col-span-2">
            <span>FERAL BIOS (TM)</span>
            <span>© 2026 FERAL</span>
            <span>VER 1.0.0</span>
            <span>SYS: ONLINE</span>
          </div>
          <div className="grid grid-cols-2 text-sm ml-auto text-right gap-6">
            <span>PORT: 8080</span>
            <span>← LANG: EN →</span>
          </div>
        </div>
        {/* NAV */}
        <div className="grid grid-cols-6 gap-2 w-[calc(100%-1rem)] border text-(--primary) border-(--primary) mt-4 mb-2 mx-4 py-1 text-xl">
          <span className="text-center place-content-center">SUMMARY</span>
          <span className="text-center place-content-center">PROJECTS</span>
          <span className="text-center place-content-center">SKILLS</span>
          <span className="text-center place-content-center">EXPERIENCE</span>
          <span className="text-center place-content-center">CONTACT</span>
          <span className="text-right text-xl pr-2 place-content-center text-shadow-2xs text-shadow-sky-300">{'>_TERMINAL'}</span>
        </div>

        {/* TERMINAL & ASCII IMG */}
        <div className="grid grid-cols-5 gap-1 w-[calc(100%-1rem)] text-(--primary) mx-4 pt-1">
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
          <div className="col-span-3 border border-(--primary)">
            
          </div>
        </div>
      </div>
    </div>
  );
}
