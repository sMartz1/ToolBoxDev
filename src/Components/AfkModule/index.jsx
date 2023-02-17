import React from "react";
import gandalf from "../../assets/images/afk.gif";
import { Button } from "antd";
import { useIPC } from "../../utils/hooks/Ipc";
import "./index.scss";
export default function AfkModule(props) {
  const { start, stop, isAfk } = useIPC();
   
  return (
    <div className="AfkModule">
      {isAfk ? (
        <>
          <Button type="primary" onClick={start} disabled>
            Start
          </Button>
          <img className="image-afk" src={gandalf} />
        </>
      ) : (
        <Button type="primary" onClick={start}>
          Start
        </Button>
      )}
      <Button type="primary" onClick={stop} danger>
        Stop
      </Button>
    </div>
  );
}
