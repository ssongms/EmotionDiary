import { useState, useRef } from "react";

const DiaryItem = ({ onEdit, onRemove, id, author, content, emotion, created_date }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const toggleIsEdit = () => setIsEdit(!isEdit); //toggle : (isEdit을 반전시킴)

  const handleRemove = () => {
    if (window.confirm(`${id} 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id} 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          Author : {author} || Emotion Score : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>

      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => {
                setLocalContent(e.target.value);
              }}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>

      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>Cancel</button>
          <button onClick={handleEdit}>Modify</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>Remove</button>
          <button onClick={toggleIsEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
