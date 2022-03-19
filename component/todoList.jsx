import React, { Component, useRef } from 'react';
import { Floot } from './todo';
// export function TodoList(props) {
//   const { children } = props;
//   const { count, setCount } = useState(0);
//   return (
//     <div className="all">
//       <section className="todoapp">
//         <List>{children}</List>
//       </section>
//     </div>
//   );
// }

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      count: 0,
      dolist: new Array(0),
      isdo: new Array(0),
    };
    this.handleKey = this.handleKey.bind(this);
  }

  handleDesory(index) {
    const copy = this.state.dolist.slice();
    let num = this.state.count;
    num -= 1;
    copy.splice(index, 1);
    this.setState({
      count: num,
      dolist: copy,
    });
  }

  binggo(index) {
    const copy = this.state.isdo.slice();
    copy[index] = !copy[index];
    this.setState({
      isdo: copy,
    });
  }

  handleKey(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      const jug = this.state.inputVal;
      if (jug == '') {
      } else {
        let num = this.state.count;
        num += 1;
        const doli = this.state.dolist.slice();
        const xisdo = this.state.isdo.slice();
        const word = this.state.inputVal;
        doli.push(word);
        xisdo.push(false);
        this.setState({
          inputVal: '',
          count: num,
          dolist: doli,
          isdo: xisdo,
        });
      }
    }
  }

  handleChange = e => {
    this.setState({
      inputVal: e.target.value,
    });
  };

  render() {
    const disPlay = {
      display: 'none',
    };
    return (
      <div className="all">
        <section className="todoapp">
          <div>
            <header className="header">
              <h1>{this.props.children}</h1>
              <input
                type="text"
                className="new-todo"
                placeholder="what need to be?"
                onKeyDown={this.handleKey}
                onChange={this.handleChange}
                value={this.state.inputVal}
              />
            </header>
            <section className="main">
              <ul className="todo-list">
                {this.state.dolist.map((item, index) => (
                  <li
                    key={index}
                    className={this.state.isdo[index] ? 'completed' : ''}>
                    <input
                      type="checkbox"
                      className="toggle"
                      onClick={this.binggo.bind(this, index)}
                    />
                    <label>{item}</label>
                    <button
                      className="destroy"
                      onClick={this.handleDesory.bind(this, index)}></button>
                  </li>
                ))}
              </ul>
            </section>
            <Floot count={this.state.count} />
          </div>
        </section>
      </div>
    );
  }
}
