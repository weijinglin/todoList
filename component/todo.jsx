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
            <a onClick={zero} href="#/">
              {' '}
              All{' '}
            </a>
          </li>
          <span> </span>
          <li className={props.which === 1 ? 'selected' : ''}>
            <a onClick={one} href="#/">
              {' '}
              Active{' '}
            </a>
          </li>
          <span> </span>
          <li className={props.which === 2 ? 'selected' : ''}>
            <a onClick={two} href="#/">
              {' '}
              Completed{' '}
            </a>
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
