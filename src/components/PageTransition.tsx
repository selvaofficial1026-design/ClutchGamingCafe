"use client";

import React from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full flex-1">
      {children}
    </div>
  );
}
