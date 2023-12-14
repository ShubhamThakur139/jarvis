import React, { useEffect, useState } from "react";
import {
  DownOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import PersonIcon from "@mui/icons-material/Person";

// eslint-disable-next-line react/prop-types
const DropDownItem = ({ setPaxCount, paxType, cap }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setPaxCount(count);
  }, [count]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ color: "#666669", fontSize: "16px", fontWeight: "700" }}>
          {paxType}
        </span>
        <span style={{ color: "gray", fontSize: "12px", fontWeight: "500" }}>
          {`(${cap})`}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <MinusCircleOutlined
          onClick={(e) => {
            e.stopPropagation();
            setCount((prevState) => {
              if (prevState > 0) {
                return prevState - 1;
              }
              return prevState;
            });
          }}
          style={{ fontSize: "24px", color: "gray" }}
        />
        <span
          style={{ color: "black", fontSize: "21px", fontWeight: "normal" }}
        >
          {count}
        </span>
        <PlusCircleOutlined
          onClick={(e) => {
            e.stopPropagation();
            setCount((prevState) => prevState + 1);
          }}
          style={{ fontSize: "24px", color: "blue" }}
        />
      </div>
    </div>
  );
};

const DropDown = ({ paxType, setPaxType, paxCount, setPaxCount }) => {
  const [open, setOpen] = useState(false);
  console.log("paxType", paxType);
  const items = [
    {
      key: "Adults",
      label: (
        <DropDownItem
          setPaxCount={setPaxCount}
          paxType={"Adults"}
          cap={"12+ Years"}
        />
      ),
      onClick: ({ key }) => {
        setPaxType(key);
      },
    },
    {
      key: "Children",
      label: (
        <DropDownItem
          setPaxCount={setPaxCount}
          paxType={"Children"}
          cap={"2 - 12 yrs"}
        />
      ),
      onClick: ({ key }) => {
        setPaxType(key);
      },
    },
    {
      key: "Infants",
      label: (
        <DropDownItem
          setPaxCount={setPaxCount}
          paxType={"Infants"}
          cap={"Below 2 yrs"}
        />
      ),
      onClick: ({ key }) => {
        setPaxType(key);
      },
    },
  ];

  React.useEffect(() => {
    window.addEventListener("click", () => {
      setOpen(false);
    });
  }, []);

  return (
    <Dropdown
      open={open}
      menu={{
        items,
      }}
      trigger={"click"}
    >
      <div
        style={{
          width: "300px",
        }}
      >
        <Space>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "white",
              padding: "10px",
              width: "300px",
              border: "1px solid #C4C4C4",
              borderRadius: "5px",
              cursor: "pointer",
              height: "56px",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setOpen((prevState) => !prevState);
            }}
          >
            <div
              style={{
                gap: "7px",
                display: "flex",
                alignItems: "center",
                fontWeight: "300",
                color: "#666666",
              }}
            >
              <PersonIcon sx={{ marginBottom: "3px" }} />
              {paxType ? (
                <>
                  <span>{paxCount > 0 && paxCount}</span> <span>{paxType}</span>
                </>
              ) : (
                "Please select"
              )}
            </div>
            <DownOutlined />
          </div>
        </Space>
      </div>
    </Dropdown>
  );
};
export default DropDown;
