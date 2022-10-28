import { Component, h } from 'vdom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = () => {
      console.log(this.state.count);
      this.setState({
        count: this.state.count + 1,
      });
    };
  }

  render() {
    return h('div', null, [
      h(
        'h1',
        {
          style: 'color: purple;',
        },
        `Hello Mark 👋`
      ),
      h('h2', null, `Counter ${this.state.count}`),
      h(
        'button',
        {
          onclick: this.handleClick,
        },
        'Incerement'
      ),
    ]);
  }
}

export default App;
