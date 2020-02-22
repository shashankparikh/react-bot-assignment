import React, { Component } from "react";
import {
  UserChat,
  UserResponse,
  MessageDate,
  BotChat,
  BotResponse,
  ChatSection
} from "./style";

class Chat extends Component {
  state = {
    botData: ""
  };

  getMessages = data => {
    this.setState({ botData: data });
  };

  renderCharts = (chatData, i) => (
    <>
      {i % 2 === 0 ? (
        <UserChat>
          <div>
            <UserResponse>{chatData.userSays}</UserResponse>
            <MessageDate>{chatData.createdOn}</MessageDate>
          </div>
        </UserChat>
      ) : (
        <>
          {chatData.response && chatData.response.replies.length > 0 && (
            <BotChat>
              <div>
                <BotResponse>{chatData.response.replies[0]}</BotResponse>
                <MessageDate>{chatData.createdOn}</MessageDate>
              </div>
            </BotChat>
          )}
        </>
      )}
    </>
  );

  render() {
    const { botData } = this.state;
    const { messageLoader, getMessagesData } = this.props;
    console.log(getMessagesData, "getMessagesData");
    return (
      <ChatSection>
        {!messageLoader ? (
          getMessagesData.map((obj, i) => this.renderCharts(obj, i))
        ) : (
          <div>Loading...</div>
        )}
      </ChatSection>
    );
  }
}

export default Chat;
