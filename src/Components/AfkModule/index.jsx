import React from "react";
import gandalf from "../../assets/images/afk.gif";
import { Button } from "antd";
import { useIPC } from "../../utils/hooks/Ipc";
import { RocketOutlined }from "@ant-design/icons";
import "./index.scss";
export const AfkModule = (props) => {
  const { start, stop, isAfk } = useIPC();

  return (
    <div className="AfkModule">
      {isAfk ? (
        <>
          <img className="image-afk" src={gandalf} />
          <Button type="primary" size="big" onClick={stop} danger>
            Im BACK!!!
          </Button>
        </>
      ) : (
        <Button type="primary" onClick={start} icon={<RocketOutlined />}>
          Going AFK!
        </Button>
      )}
    </div>
  );
};
