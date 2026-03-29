import Link from "next/link";

 export default function Banner() {
  return (
      
      <div>
        <img
          src="/banner.png"
          alt="Banner de Nextflix por OPQ"
          width={500}
          height={300}
          className="w-full h-auto rounded-lg shadow-lg"
        />  
      </div>
    
  );
}
