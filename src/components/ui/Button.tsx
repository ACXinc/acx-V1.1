import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "px-8 py-4 rounded-full bg-yellow-500 text-black font-semibold transition duration-300 hover:bg-yellow-400",
        className
      )}
    >
      {children}
    </button>
  );
}