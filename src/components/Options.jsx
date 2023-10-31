function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;

  //////////////////////////
  return (
    <div>
      <div className="options">
        {questions?.options.map((option, index) => {
          const isCorrectAnswer = index === answer ? "answer" : "";

          const isCorrectOption = hasAnswered
            ? index === questions.correctOption
              ? "correct"
              : "wrong"
            : "";

          //////////////////////////
          return (
            <button
              className={`btn btn-option ${isCorrectAnswer} ${isCorrectOption}`}
              key={option}
              disabled={hasAnswered}
              onClick={() => dispatch({ type: "newAnswer", payload: index })}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Options;
