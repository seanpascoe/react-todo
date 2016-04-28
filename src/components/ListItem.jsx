var React = require('react');

var ListItem = React.createClass({
  propTypes: {
    text: React.PropTypes.node
  },
  render: function() {
    return (
      <li>
        <h4>{this.props.text}</h4>
      </li>
    );
  }
});

module.exports = ListItem;
