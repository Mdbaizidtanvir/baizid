"use client";

import React, { useEffect, useState } from "react";

export default function CodingLoader() {
  const [showBoot, setShowBoot] = useState(true);

  useEffect(() => {
    // Show "Booting system..." for 0.8s
    const bootTimeout = setTimeout(() => {
      setShowBoot(false);
    }, 800);

    return () => clearTimeout(bootTimeout);
  }, []);

  if (!showBoot) return null;

  return (
    <div className="fixed inset-0 bg-[#111] flex items-center justify-center z-50 font-mono text-green-400 text-2xl">
      <div>
        Booting system<span className="animate-blink">.</span>
        <span className="animate-blink delay-200">.</span>
        <span className="animate-blink delay-400">.</span>
      </div>

      <style jsx>{`
        .animate-blink {
          display: inline-block;
          width: 1ch;
          animation: blink 1s step-start infinite;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
