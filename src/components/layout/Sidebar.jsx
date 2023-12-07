import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { IconButton } from "@mui/material";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
const Sidebar = (props) => {
  const [conversations, setConversations] = useState([
    {
      name: "test #1",
      lastMessage: "last message #1",
      timeStamp: "today",
    },
    {
      name: "test #2",
      lastMessage: "last message #2",
      timeStamp: "today",
    },
    {
      name: "test #3",
      lastMessage: "last message #3",
      timeStamp: "today",
    },
    {
      name: "test #4",
      lastMessage: "last message #4",
      timeStamp: "today",
    },
    {
      name: "test #5",
      lastMessage: "last message #5",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="flex basis-1/3 flex-col">
      <div className="header m-2.5 flex justify-between rounded-2xl bg-white px-2.5 py-1">
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        <div className="">
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="search m-2.5 flex items-center gap-x-2 rounded-2xl bg-white px-2.5 py-1">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search or start new chat"
          className="border-none bg-transparent outline-none"
        />
      </div>
      <div className="conversations m-2.5 grow gap-x-2 space-y-2 rounded-2xl bg-white px-2.5 py-1">
        {conversations.map((item, index) => (
          <React.Fragment key={index}>
            <ConversationsItem data={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;

export const ConversationsItem = ({ data }) => {
  return (
    <div className="grid-cols-conversationItem grid-rows-conversationItem m-1 grid gap-x-2.5 rounded-2xl">
      <p className="col-start-1 col-end-2 row-start-1 row-end-3 flex h-8 w-8 items-center justify-center self-center justify-self-center rounded-full bg-mainBg p-0.5 text-3xl font-extrabold text-white">
        {data.name[0]}
      </p>
      <p className="col-start-2 col-end-4 row-start-1 row-end-2 font-bold">
        {data.name}
      </p>
      <p className="text-sm text-gray-500">{data.lastMessage}</p>
      <p className="justify-self-end text-sm text-gray-500">{data.timeStamp}</p>
    </div>
  );
};
