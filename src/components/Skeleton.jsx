export default function Skeleton() {
   const cardStyles = {
     width: "20rem",
     height: "35rem",
   };
 
   const textStyles = {
     width: "100%",
     borderRadius: "0.25rem",
     backgroundColor: "#6B7280",
   };
 
   return (
     <div className="relative border border-spacing-9 rounded-lg flex flex-col items-start gap-3 px-2 py-2 bg-gray-500 text-white animate-pulse" style={cardStyles}>
       <div className="rounded-lg w-full h-[15rem] bg-gray-400" />
       <div className="font-bold text-[1.5rem] w-full max-w-[12rem] h-[2rem]" style={textStyles} />
       <div className="font-bold text-[1.5rem] w-full max-w-[7rem] h-[1.4rem]" style={textStyles} />
       <div className="font-bold text-[1.5rem] w-full max-w-[7rem] h-[1.4rem]" style={textStyles} />
       <button className="absolute bottom-0 px-3 py-2 mb-2 w-[12rem] rounded-md bg-cyan-950 hover:w-[19rem] min-h-[2rem] transition-all duration-500 font-semibold" />
     </div>
   );
 }
 