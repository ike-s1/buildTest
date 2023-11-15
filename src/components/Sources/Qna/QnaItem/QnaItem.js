import React from "react";
import "./QnaItem.scss";
import deleteIcon from "../../../../resources/icons/delete-icon.svg";

export const QnaItem = ({ qna, onDeleteIconClick }) => {
  return (
    <div className={"qna-item"}>
      <img
        src={deleteIcon}
        className="delete-qna"
        onClick={onDeleteIconClick}
      />
      <p className="qna-question">{qna.question}</p>
      <p className="qna-answer">{qna.answer}</p>
    </div>
  );
};
