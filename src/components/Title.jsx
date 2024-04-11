import React from "react";

export default function Title({ title }) {
  return (
    <div className="text-center bg-black/60 py-20 text-2xl xl:text-3xl font-semibold">
      {title}
    </div>
  );
}
