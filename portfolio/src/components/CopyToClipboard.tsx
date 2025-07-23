import React, {useState} from "react";

// @ts-ignore
const CopyToClipboard = ({ value, icon, copiedText = "Copied!" }) => {
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
      title={copied ? copiedText : "Copy to clipboard"}
      className="hover:text-gray-300 transition-all duration-300 cursor-pointer"
    >
      {icon}
      {copied && (
        <span className="absolute mt-2 bg-white p-2 text-xs text-black rounded-lg">
          {copiedText}
        </span>
      )}
    </button>
  );
};
export default CopyToClipboard;