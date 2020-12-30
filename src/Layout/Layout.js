import React from "react";
import "../styles.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Member from "../components/member/Member";
import MemberError from "../components/member-error/MemberError";
import AccountCancelPopup from "../components/account-cancel-popup/AccountCancelPopup";
import AccountConfirm from "../components/account-confirm/AccountConfirm";
import AccountSelectAll from "../components/account-select-all/AccountSelectAll";
import AccountSelectError from "../components/account-select-error/AccountSelectError";
import AccountSelectOne from "../components/account-select-one/AccountSelectOne";
import OtpError from "../components/otp-error/OtpError";
import OtpExpired from "../components/otp-expired/OtpExpired";
import OtpWillExpire from "../components/otp-will-expire/OtpWillExpire";
import SelectAccount from "../components/select-account/SelectAccount";

export default function Layout() {
  return (
    <div className="cua-wrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={Member} />
        <Route path="/member-error" component={MemberError} />
        <Route
          exact
          path="/account-cancel-popup"
          component={AccountCancelPopup}
        />
        <Route exact path="/account-confirm" component={AccountConfirm} />
        <Route exact path="/account-select-all" component={AccountSelectAll} />
        <Route
          exact
          path="/account-select-error"
          component={AccountSelectError}
        />
        <Route exact path="/account-select-one" component={AccountSelectOne} />
        <Route exact path="/otp-error" component={OtpError} />
        <Route exact path="/otp-expired" component={OtpExpired} />
        <Route exact path="/otp-will-expire" component={OtpWillExpire} />
        <Route exact path="/select-account" component={SelectAccount} />
      </Switch>
    </div>
  );
}
