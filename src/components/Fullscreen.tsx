import * as React from "react";
import { ReactNode } from "react";

interface FullScreenProps {
  children: ReactNode;
  isDarkBackground?: boolean;
  backgroundColor?: string;
  [key: string]: any;
}

const FullScreen: React.FC<FullScreenProps> = ({
  children,
  isDarkBackground,
  backgroundColor,
}) => {
  return (
    <div
      className={`p-d-flex p-ai-center p-jc-center ${
        isDarkBackground ? "p-text-white" : "p-text-black"
      }`}
      style={{ backgroundColor, minHeight: "100vh" }}
    >
      <div
        className="p-d-flex p-flex-column p-ai-center"
        style={{ maxWidth: "1280px", width: "100%" }}
      >
        {children}
      </div>
    </div>
  );
};

export default FullScreen;
