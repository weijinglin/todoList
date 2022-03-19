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
  const { count, which, selall, zero, one, two } = props;
  if (count !== 0) {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{props.count}</strong>
          <span> </span>
          <span>item</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li className={props.which === 0 ? 'selected' : ''}>
            <button onClick={zero}> All </button>
          </li>
          <span> </span>
          <li className={props.which === 1 ? 'selected' : ''}>
            <button onClick={one}> Active </button>
          </li>
          <span> </span>
          <li className={props.which === 2 ? 'selected' : ''}>
            <button onClick={two}> Completed </button>
          </li>
        </ul>
        <button className="clear-completed" onClick={selall}>
          Clear completed
        </button>
      </footer>
    );
  } else {
    return <footer></footer>;
  }
}
