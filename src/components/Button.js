import React from "react";

export default function Button({ text }) {
  return (
    <button className="rounded border-2 border-slate-800 bg-gradient-to-r from-slate-800 to-slate-800 bg-[length:100%_0] bg-no-repeat py-2 px-8 duration-200 hover:bg-[length:100%_100%] hover:text-white">
      {text}
    </button>
  );
}
