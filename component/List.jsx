export function List(props) {
  const { children } = props;
  return (
    <div>
      <header className="header">
        <h1>{children}</h1>
        <input
          type="text"
          className="new-todo"
          placeholder="what need to be?"
        />
      </header>
    </div>
  );
}
