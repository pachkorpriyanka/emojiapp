import React, { PureComponent } from "react";
import Header from "./Header";
import Search from "./Search";
//import Emojiresult from "./Emojiresult";
import filterEmoji from "./filterEmoji";
import EmojiResultRow from "./EmojiResultRow";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20),
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Search textChange={this.handleSearchChange} />
        <Emojiresult emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
