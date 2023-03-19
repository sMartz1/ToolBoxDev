import React, { useEffect, useState } from "react";
import gandalf from "../../../../assets/images/afk.gif";
import { Button } from "antd";
import { useIPC } from "../../../../utils/IPC/Ipc";
import { RocketOutlined } from "@ant-design/icons";
import "./index.scss";
import ModuleCard from "../ModuleCard";

const title = "Away Module";

export const AfkModule = (props) => {
  const { start, stop, isAfk } = useIPC();
  const { isSelected, setSelectedModule, setButtonDisabled } = props;

  const handleStart = () => {
    setButtonDisabled(true);
    start();
  };

  const handleStop = () => {
    setButtonDisabled(false);
    stop();
  };

  //Manage button moving while afk
  const [x, setX] = useState();
  const [y, setY] = useState();
  //get mouse pos
  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);

  if (isSelected) {
    return (
      <div className="AfkModule">
        {isAfk ? (
          <>
            <img className="image-afk" src={gandalf} />
            <Button
              type="primary"
              size="large"
              shape="rounded"
              onClick={handleStop}
              rootClassName="stop-afk"
              danger
              style={{
                top:y-40,
                left:x-40              }}
            >
              STOP
            </Button>
          </>
        ) : (
          <Button
            type="primary"
            onClick={handleStart}
            icon={<RocketOutlined />}
          >
            Going AFK!
          </Button>
        )}
      </div>
    );
  } else {
    return <ModuleCard title={title} onClick={setSelectedModule} />;
  }
};
