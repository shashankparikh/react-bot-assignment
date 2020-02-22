import axios from "axios";

export const getConversationAction = data => dispatch => {
  const headers = {
    Authorization: data.token
  };
  //  dispatch({ type: "GET_LOADING_STATUS" });
  return axios
    .get(
      `https://test-lbadmin-m.enterprisebot.co/api/v2/botsessions/${data.messageId}/botmessage`,
      { headers: headers }
    )
    .then(res => {
      return dispatch({
        type: "MESSAGE_ID",
        value: res.data
      });
    })
    .catch(err => {
      console.log(err, "err");
      // return dispatch({
      //   type: "ACCOUNT_SUMMARY_BALANCE_DATA_ERROR",
      //   value: "error"
      // });
    });
};
