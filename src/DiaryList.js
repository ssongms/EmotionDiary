import DiaryItem from "./DiaryItem";

const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem
            onEdit={onEdit}
            onRemove={onRemove}
            key={it.id}
            {...it}
          />
        ))}
      </div>
    </div>
  );
};

//prop으로 undefined를 내려줄 때 예외처리를 하기 위해 default prop을 설정
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
