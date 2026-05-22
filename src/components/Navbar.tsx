function Navbar() {
  return (
    <div className="grid grid-cols-6 gap-2 w-[calc(100%-1rem)] border text-(--primary) border-(--primary) mt-4 mb-2 mx-4 py-1 text-xl">
      <span className="text-center place-content-center">SUMMARY</span>
      <span className="text-center place-content-center">PROJECTS</span>
      <span className="text-center place-content-center">SKILLS</span>
      <span className="text-center place-content-center">EXPERIENCE</span>
      <span className="text-center place-content-center">CONTACT</span>
      <span className="text-right text-xl pr-2 place-content-center text-shadow-2xs text-shadow-sky-300">
        {">_TERMINAL"}
      </span>
    </div>
  );
}

export default Navbar;
