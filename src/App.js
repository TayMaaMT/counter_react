import React, { Component } from "react";
import Button from "./components/Button.js";
import "./App.css";
import {
  faPlusCircle,
  faMinusCircle,
  faShoppingCart,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { id: 0, count: 0, disabled: true },
        { id: 1, count: 0, disabled: true },
        { id: 2, count: 0, disabled: true },
        { id: 3, count: 0, disabled: true },
      ],
      count_item: 0,
    };
  }

  incrementCount = (id) => {
    const update = this.state.buttons.map((item) => {
      if (item.id === id) {
        item.count++;
        item.disabled = false;
        if (item.count === 1)
          this.setState((prevState) => ({
            count_item: prevState.count_item + 1,
          }));
      }
      return item;
    });
    this.setState({ buttons: update });
  };

  decrementCount = (id) => {
    const update = this.state.buttons.map((item) => {
      if (item.id === id) {
        item.count--;
        if (item.count <= 0) {
          item.disabled = true;
          this.setState((prevState) => ({
            count_item: prevState.count_item - 1,
          }));
        }
      }
      return item;
    });
    this.setState({ buttons: update });
  };

  reset = () => {
    const update = this.state.buttons.map((item) => {
      item.count = 0;
      return item;
    });
    this.setState({ buttons: update, count_item: 0 });
  };

  render() {
    const plusItem = <FontAwesomeIcon icon={faPlusCircle} />;
    const minusItem = <FontAwesomeIcon icon={faMinusCircle} />;
    const reset = <FontAwesomeIcon icon={faSyncAlt} />;
    const element = (
      <div className="App">
        <div className="header">
          <div class="icon">
            {" "}
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          <div className="count_items">{this.state.count_item}</div>
          <div className="text">items</div>
        </div>
        <div className="container_btns">
          <Button className="reset" title={reset} action={() => this.reset()} />
          {this.state.buttons.map((item) => (
            <div class="buttons">
              <div className="count_button">{item.count}</div>
              <Button
                className="plusItem"
                title={plusItem}
                action={() => this.incrementCount(item.id)}
              />
              <Button
                className="minusItem"
                title={minusItem}
                action={() => this.decrementCount(item.id)}
                disabled={item.disabled}
              />
            </div>
          ))}
        </div>
      </div>
    );
    return element;
  }
}

export default App;
