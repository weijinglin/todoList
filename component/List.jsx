// export function List(props) {
//   const { children } = props;
//   return (
//     <div>
//       <header className="header">
//         <h1>{children}</h1>
//         <input
//           type="text"
//           className="new-todo"
//           placeholder="what need to be?"
//         />
//       </header>
//     </div>
//   );
// }

export function List(props) {
  const { dolist, isdo, binggo, handleDesory } = props;
  return (
    <ul className="todo-list">
      {dolist.map((item, index) => (
        <li key={index} className={isdo[index] ? 'completed' : ''}>
          <input
            type="checkbox"
            className="toggle"
            onClick={binggo.bind(index)}
          />
          <label>{item}</label>
          <button
            className="destroy"
            onClick={handleDesory.bind(index)}></button>
        </li>
      ))}
    </ul>
  );
}
