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
  const { count, which, selall } = props;
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
          <li className={which === 0 ? 'selected' : ''}>
            <a href="#/">All</a>
          </li>
          <span> </span>
          <li className={which === 1 ? 'selected' : ''}>
            <a href="#/active">Active</a>
          </li>
          <span> </span>
          <li className={which === 2 ? 'selected' : ''}>
            <a href="#/completed">Completed</a>
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
