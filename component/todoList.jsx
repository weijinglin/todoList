import React, { Component, useRef } from 'react';
import { Floot } from './todo';
import { List } from './List';

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      count: 0,
      dolist: new Array(0),
      isdo: new Array(0),
      which: 0,
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

  selectall() {
    const copy1 = this.state.isdo.slice();
    const copy2 = this.state.dolist.slice();
    let num = this.state.count;
    for (let i = 0; i < this.state.count; ++i) {
      if (copy1[i] === true) {
        copy1.splice(i, 1);
        copy2.splice(i, 1);
        i--;
        num -= 1;
      }
    }
    const arr = document.getElementsByClassName('toggle');
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i].checked) {
        arr[i].checked = false;
      }
    }
    this.setState({
      dolist: copy2,
      isdo: copy1,
      count: num,
    });
  }

  alltrue() {
    const arr = document.getElementsByClassName('toggle');
    const copy1 = this.state.isdo.slice();
    for (let i = 0; i < arr.length; ++i) {
      arr[i].checked = true;
    }
    for (let i = 0; i < this.state.count; i++) {
      copy1[i] = true;
    }
    this.setState({
      isdo: copy1,
    });
  }

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
              <input type="checkbox" id="toggle-all" className="toggle-all" />
              <label htmlFor="toggle-all" onClick={this.alltrue.bind(this)}>
                ::before
              </label>
              <ul className="todo-list">
                {this.state.dolist.map((item, index) => (
                  <li
                    key={index}
                    className={this.state.isdo[index] ? 'completed' : ''}>
                    <input
                      type="checkbox"
                      className="toggle"
                      id={`box${index}`}
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
            <Floot
              count={this.state.count}
              what={this.state.which}
              selall={this.selectall.bind(this)}
            />
          </div>
        </section>
      </div>
    );
  }
}
