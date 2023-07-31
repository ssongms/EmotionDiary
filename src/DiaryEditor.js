import styled from "styled-components";
import { useState, useRef } from "react";

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef(); // useRef를 호출해서 반환값을 authorInput에 저장
  const contentInput = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      //focus
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      //focus
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("일기를 저장했습니다!");
    console.log(state);
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>Today's Diary</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>

      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>

      <div>
        Today's emotion score :
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>

      <div>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
