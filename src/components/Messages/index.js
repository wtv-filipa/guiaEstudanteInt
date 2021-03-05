import React, { useState, useEffect } from "react";
import "../../styles/messages.css";

const Messages = (props) => {
  const [isShow, setIsShow] = useState(false);

  const close = () => {
    setIsShow(false);
  };

  const loadData = () => {
    setIsShow(true);
    setTimeout(() => setIsShow(false), 6000);
  };
  useEffect(loadData, []);

  return (
    <>
      {isShow && (
        <div className="container messages">
          <div className={props.changeClass}>
            <span className="row">
              <span className="col-10 text-start">
                <i className="fa fa-times-circle me-3"></i>
                {props.message}
              </span>
              <span className="col-2 text-end">
                <button
                  type="button"
                  data-dismiss="alert"
                  aria-label="Close"
                  onClick={close}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </span>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

const Messages2 = (props) => {
  const [isShow, setIsShow] = useState(false);

  const loadData = () => {
    setIsShow(true);
    setTimeout(() => setIsShow(props.onDismiss), 6000);
  };
  useEffect(loadData, [props.onDismiss]);

  return (
    <>
      {isShow && (
        <div className="container messages">
          <div className={props.changeClass}>
            <span className="row">
              <span className="col-10 text-start">
                <i className="fa fa-times-circle me-3"></i>
                {props.message}
              </span>
              <span className="col-2 text-end">
                <button
                  type="button"
                  data-dismiss="alert"
                  aria-label="Close"
                  onClick={props.onDismiss}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </span>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export {Messages, Messages2};
