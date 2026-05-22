import { ReactNode } from "react";
import TerminalHeader from "./TerminalHeader";

function Terminal({ children }: { children: ReactNode; }) {
  return (
    <div className="border border-primary rounded-xs w-[calc(100%-1rem)] h-full my-2">
      <TerminalHeader />
      {children}
    </div>
  );
}

export default Terminal;
