import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Button } from "antd";
import { Heading, InputContainer, InputBox } from "./style";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmail = e => {
    let val = e.target.value;
    this.setState({ email: val });
  };

  handlePassword = e => {
    let val = e.target.value;
    this.setState({ password: val });
  };

  login = () => {
    const data = {
      email: this.state.email,
      password: this.state.password
    };

    const headers = {
      "Content-Type": "application/json"
    };

    axios
      .post(
        `https://test-lbadmin-m.enterprisebot.co/api/v2/adminusers/login?include=user`,
        data,
        {
          headers: headers
        }
      )
      .then(res => {
        sessionStorage.setItem("sessionObject", JSON.stringify(res.data.id));
        this.props.history.push("/chat");
      })
      .catch(err => {
        alert("Incorrect Password or email");
      });
  };

  render() {
    return (
      <>
        <InputContainer>
          <Heading>Login Page</Heading>
          <InputBox placeholder="Enter Email" onChange={this.handleEmail} />
          <InputBox
            placeholder="Enter Password"
            type="password"
            onChange={this.handlePassword}
          />
          <Button type="primary" shape="round" onClick={this.login}>
            Submit
          </Button>
        </InputContainer>
      </>
    );
  }
}

export default Login;
