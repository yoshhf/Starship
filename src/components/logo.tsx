import React from "react";
import { Sparkles } from "lucide-react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Sparkles className="stroke h-11 w-11 stroke-blue-900 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">Starship</p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">Starship</p>
    </a>
  );
}

export default Logo;