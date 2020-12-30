import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function Member() {
  return (
    <div className="cua-wrapper">
      <div className="cua-space">
        <div className="cua-title">
          <h2>Connect to CUA</h2>
          <p>
            Please Provide your member number to connect budgetguide to CUA
            online banking
          </p>
        </div>
        <div className="cumember">
          <div className="member-info">
            <h4 className="m-0">Member number</h4>
            <p>Please note this</p>
            <div>
              <input type="text" placeholder="your member number" />
            </div>
            <p>forgot your memeber...</p>
            <div className="cua-btns">
              <Button className="btn btn-cancel"> cancel</Button>
              <Button className="btn btn-continue"> continue</Button>
            </div>
          </div>
          <div className="cu-ftr-info">
            <p>your member number will not be shared with budgetguide....</p>
          </div>
        </div>
      </div>
    </div>
  );
}
