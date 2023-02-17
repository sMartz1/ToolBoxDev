import { useState, useEffect } from "react";
import { CheckCircleFilled } from "@ant-design/icons";
export default function ElectronStatus() {
  const [isElectron, setIsElectron] = useState(false);
  useEffect(() => {
    if (window.isElectron) {
      setIsElectron(true);
    }
  }, []);

  return (
    <>
      <CheckCircleFilled
        style={{ fontSize: "16px", color: isElectron ? "green" : "red" }}
      />
    </>
  );
}
