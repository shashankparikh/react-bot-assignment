import React, { Component } from "react";
import axios from "axios";
import {
  List,
  MainWrapper,
  TopSection,
  Training,
  Chats,
  ListContent,
  TrainingContent
} from "./style";
import { connect } from "react-redux";
import { getConversationAction } from "../../../../actions/getConversationAction";
import Chat from "../Chat/chat";

let retrievedObject;

class list extends Component {
  state = {
    sessionArr: ""
  };

  componentDidMount() {
    retrievedObject = JSON.parse(sessionStorage.getItem("sessionObject"));
    this.getSessions(retrievedObject);
  }

  getSessions = data => {
    const headers = {
      Authorization: data
    };
    axios
      .get(
        `https://test-lbadmin-m.enterprisebot.co/api/v2/botsessions?filter=%7B%22limit%22%3A20%2C%22skip%22%3A0%2C%22order%22%3A%22id%20DESC%22%2C%22where%22%3A%7B%22agentId%22%3A%225bcee5bafe751a289f6154cf%22%7D%7D`,
        { headers: headers }
      )
      .then(res => {
        this.setState({ sessionArr: res.data }, () =>
          this.fetchConversation(this.state.sessionArr[0])
        );
      });
  };

  fetchConversation = data => {
    const messageData = {
      token: retrievedObject,
      messageId: data.id
    };

    this.props.getConversationAction(messageData);
  };

  render() {
    const { sessionArr } = this.state;
    const { getMessagesData } = this.props;
    return (
      <div>
        <TopSection>
          <Training>
            <TrainingContent>Last Message</TrainingContent>
            <TrainingContent>Date</TrainingContent>
          </Training>
          <Chats>Chats Section</Chats>
        </TopSection>
        <MainWrapper>
          <div>
            {sessionArr ? (
              sessionArr.map(item => {
                return (
                  <List onClick={() => this.fetchConversation(item)}>
                    <ListContent> {item.userSays}</ListContent>
                    <ListContent>{item.updatedOn}</ListContent>
                  </List>
                );
              })
            ) : (
              <div>loading</div>
            )}
          </div>
          {getMessagesData.length > 0 ? (
            <Chat getMessagesData={getMessagesData} />
          ) : (
            <div />
          )}
        </MainWrapper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getConversationAction: data => dispatch(getConversationAction(data))
});

const mapStateToProps = state => ({
  getData: state.simpleReducer.FirstData,
  isLoading: state.simpleReducer.isLoading,
  getMessagesData: state.simpleReducer.messageData,
  messageLoader: state.simpleReducer.messageLoader
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(list);
