'use client';

import { useState } from "react";
import { toast } from "sonner";

export function GenerateKeyModal({ apiKey , label }: { apiKey: string, label:string }) {
  const [seen,setseen]=useState(false);
  const [show,setshow]=useState(false);
  return (<>{(<div className="space-y-4 mb-2">
      <h2 className="text-lg font-semibold">
        New API Key Generated
      </h2>

      <p className="text-sm text-slate-600">
        This key will only be shown once. Copy and store it securely.
      </p>

      <div className="border flex gap-1 justify-between items-center rounded p-3 font-mono bg-slate-50">
        <p className="text-sm font-sans bg-purple-300 rounded px-2 py-1"><span className="text-slate-500">key:</span>{" "+label}</p>
        <p>{(show)?apiKey:''}</p>
        <button onClick={() =>{ navigator.clipboard.writeText(apiKey);toast.info('copied to clipboard')}} className="rounded hover:cursor-copy text-sm font-normal hover:bg-gray-400 p-2">copy</button>
        {<button onClick={()=>setshow(true)} className="btn-primary">Show</button>}
      </div>

      <button onClick={()=>{setshow(false);setseen(true);}} className="btn-primary">
        I have saved this key
      </button>
    </div>)}</>
  );
}

// {copy && typeof value === "string" && (
//           <button
//             onClick={() => navigator.clipboard.writeText(value)}
//             className="text-xs text-blue-600 hover:underline"
//           >
//             Copy
//           </button>
//         )}
