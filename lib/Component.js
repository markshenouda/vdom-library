export class Component {
  constructor(props) {
    this.props = props || {};
    this.state = {};
    this._updateCallback = () => null;
  }
  setState(state) {
    const newState = Object.assign({}, this.state, state);
    this.state = newState;
    console.log(this.state);

    // Callback the update callback
    this._updateCallback();
  }

  update(callback) {
    this._updateCallback = callback;
  }

  render() {}
}
