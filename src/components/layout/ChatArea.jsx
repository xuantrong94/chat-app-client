import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ChatArea = ({ data }) => {
  return (
    <div className="m-2.5 flex basis-2/3 flex-col">
      <div className="header flex items-center gap-2.5 rounded-2xl bg-white p-2.5">
        <p className="">{data.name[0]}</p>
        <div className="">
          <p className="">{data.name}</p>
          <p className="">{data.lastMessage}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="messages grow bg-sky-300">messages</div>
      <div className="input bg-amber-300">input</div>
    </div>
  );
};

ChatArea.propTypes = {};

export default ChatArea;
