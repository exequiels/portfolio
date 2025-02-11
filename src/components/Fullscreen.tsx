import { ReactNode } from "react";

interface FullScreenProps {
  children: ReactNode;
  isDarkBackground?: boolean;
  backgroundColor?: string;
}

const FullScreen = ({
  children,
  isDarkBackground,
  backgroundColor,
}: FullScreenProps) => {
  return (
    <div
      className={`flex align-items-center justify-content-center ${
        isDarkBackground ? "text-white" : "text-black"
      }`}
      style={{ backgroundColor, minHeight: "100vh", width: "100%" }}
    >
      {children}
    </div>
  );
};

export default FullScreen;
