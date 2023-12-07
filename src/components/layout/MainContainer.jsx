import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";

const MainContainer = (props) => {
  return (
    <main className="flex h-v-90 w-v-90 rounded-3xl bg-subBg">
      <Sidebar />
      <ChatArea />
    </main>
  );
};

MainContainer.propTypes = {};

export default MainContainer;
