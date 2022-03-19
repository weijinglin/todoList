// export function Inputs(props) {
//   const { classs, place } = props;

//   return (
//     <input
//       type="text"
//       className={classs}
//       placeholder={place}
//       fontStyle="italic"
//       fontWeight="300"
//       color="#e6e6e6"
//     />
//   );
// }

export function Floot(props) {
  const { count } = props;
  if (count !== 0) {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{props.count}</strong>
          <span> </span>
          <span>item</span>
          <span> left</span>
        </span>
      </footer>
    );
  } else {
    return <footer></footer>;
  }
}
