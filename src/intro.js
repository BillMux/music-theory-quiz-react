class Intro extends React.Component {

  constructor() {
    super();
    this.state = {
      isShow: true
    };
    this.hideIntro = this.hideIntro.bind(this);
  };

  hideIntro() {
    this.setState({ isShow: false });
  };

  introText() {
    return (
      <div>
        <h1>Welcome to my game</h1>
        <h2>The game is designed to introduce the basics of music theory</h2>
        <h2>Ready to begin?</h2>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.introText()}
        <button onClick={this.hideIntro}>Hellz yeah!!</button>
      </div>
    );
  };
};
