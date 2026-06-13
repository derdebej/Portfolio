import { useState } from "react";
import type { ReactNode } from "react";

interface CopyToClipboardProps {
  value: string;
  icon: ReactNode;
  copiedText?: string;
}

const CopyToClipboard = ({ value, icon, copiedText = "Copied!" }: CopyToClipboardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      title={copied ? copiedText : value}
      className="relative hover:text-gray-300 transition-all duration-300 cursor-pointer"
    >
      {icon}
      {copied && (
        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap bg-white px-2 py-1 text-xs text-black rounded-lg z-10">
          {copiedText}
        </span>
      )}
    </button>
  );
};

export default CopyToClipboard;
