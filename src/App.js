import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useState, useRef, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  //일기 배열(data)에 새로운 일기를 추가할 수 있는 함수

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
      res.json()
    );

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]); // 새로운 일기(newItem) 추가하고 이후에 기존 일기를 붙임.
    // 이렇게 해야 새로 추가한 일기가 맨 위에 렌더링됨
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
    console.log(`${targetId}가 삭제되었습니다.`);
  };

  const onEdit = (targetId, newContent) => {
    setData(data.map((it) => (it.id === targetId ? { ...it, content: newContent } : it)));
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList
        onEdit={onEdit}
        onRemove={onRemove}
        diaryList={data}
      />
    </div>
  );
}

export default App;
