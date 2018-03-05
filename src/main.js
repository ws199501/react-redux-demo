import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUser, changeUser } from './redux/actions/user'

console.log('connect -->', connect)
class Home extends Component {
  constructor(props) {
    super(props)
    this.message = '我是默认的修改内容！'
  }

  componentDidMount() {
    //发送action,经过reducers派发,改变state
    this.props.actions.getUser()
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.user !== nextProps.user) {
      //console.log(nextProps.user)
    }
  }
  handleChange() {
    this.props.actions.changeUser(this.message)
  }
  render() {
    return (
      <div>
        我是得到的话：{this.props.user.message}
        <div style={{marginTop: 20}}>输入你要变成的话：<input onChange={(e) => this.message = e.target.value}/></div>
        <div style={{marginTop: 20}}><button onClick={() => this.handleChange()}>点击我改变内容！</button></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps -->', state)
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  console.log('mapDispatchToProps -->',dispatch)
  return {
    actions: bindActionCreators({
      getUser,
      changeUser,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
