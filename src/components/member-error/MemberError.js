import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function MemberError() {
  return (
    <div className="cua-wrapper">
      <div className="cua-space">
        <div className="cua-title">
          <h2>Connect to CUA</h2>
          <p>Please Provide</p>
        </div>
        <div className="cumember">
          <div className="member-info">
            <h4 className="m-0">Member number</h4>
            <p>Please note this</p>
            <div>
              <input type="text" placeholder="your member number" />
            </div>
            <span>This is the error</span>
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

    // <div className="cua-wrapper">
    //   <div className="cua-space">
    //     <div className="cua-title">
    //       <h2>Connect to CUA</h2>
    //       <p>Please enter your one time password(security code)</p>
    //     </div>
    //     <div className="cumember">
    //       <div className="member-info">
    //         <p>
    //           one time password(security code) are used to share CDR data.Your
    //         </p>
    //         <p>
    //           A one time password(security code) are used to share CDR data.Your
    //         </p>
    //         <div className="codeexpire-wrap ">
    //           <div className="codeexpire">
    //             <span>
    //               the code will expire in <strong>09:54</strong>
    //             </span>
    //           </div>
    //           <Button className="btn btn-newcode">Send a new code </Button>
    //         </div>
    //         <div className="otpwrap">
    //           <Form>
    //             <FormGroup>
    //               <Label for="otp">one time password(security code)</Label>
    //               <Input
    //                 type="email"
    //                 name="email"
    //                 id="otp"
    //                 placeholder="your 6digit one time password"
    //               />
    //             </FormGroup>
    //           </Form>
    //         </div>
    //         <p>
    //           Didn't get the code ? <a href=" ">Send again code </a> or goto the
    //           cua online{" "}
    //         </p>

    //         <div className="cua-btns">
    //           <Button className="btn btn-cancel"> cancel</Button>
    //           <Button className="btn btn-continue"> continue</Button>
    //         </div>
    //       </div>
    //       <div className="cu-ftr-info">
    //         <p>your member number will not be shared with budgetguide....</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
