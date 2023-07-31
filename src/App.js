import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "송민석",
    content: "더미 리스트1",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "장대희",
    content: "더미 리스트2",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "엄홍식",
    content: "더미 리스트3",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "윤영석",
    content: "더미 리스트4",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "이윤기",
    content: "더미 리스트5",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
