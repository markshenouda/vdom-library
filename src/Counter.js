import { Component, h } from 'vdom';

class Counter extends Component {
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

    // setInterval(() => {
    //   this.setState({ count: this.state.count + 1 });
    // }, 1000);
  }

  render() {
    return h('div', null, [
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

export default Counter;
