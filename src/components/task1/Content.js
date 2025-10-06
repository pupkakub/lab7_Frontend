import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAltStyle1: false,
      isAltStyle2: false,
    };
  }

  toggleAltStyle1 = () => {
    this.setState({ isAltStyle1: !this.state.isAltStyle1 });
  };

  toggleAltStyle2 = () => {
    this.setState({ isAltStyle2: !this.state.isAltStyle2 });
  };

  render() {
    const { isAltStyle1, isAltStyle2 } = this.state;
    return (
      <main>
        <h3
          id="fourth"
          className={isAltStyle1 ? "alt-style-1" : ""}
          onClick={this.toggleAltStyle1}
        >
          Мої хобі:
        </h3>
        <ul
          id="fifth"
          className={isAltStyle2 ? "alt-style-2" : ""}
          onClick={this.toggleAltStyle2}
        >
          <li>Фортепіано</li>
          <li>Малювання</li>
          <li>Гітара</li>
          <li>Баскетбол</li>
        </ul>

        <h3>Мої улюблені фільми:</h3>
        <ol>
          <li>Втеча з Шоушенка (1994)</li>
          <li>Кораліна у світі кошмарів (2009)</li>
          <li>Острів скарбів (1989)</li>
          <li>Нікчемний Я (2010)</li>
        </ol>

        <p>
          Вижниця - найгарніше місто Чернівецької області, в якому мені
          пощастило побувати. Початок Карпат, з неймовірною природою та
          унікально багатою спадщиною.
        </p>
      </main>
    );
  }
}

export default Content;
