import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { handleAuth, theme } from 'react-saasify'

import { BackgroundSlideshow, LoginForm, Paper, NavHeader } from 'components'

import styles from './styles.module.css'

@inject('auth')
@withRouter
@observer
export class LoginPage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  }

  render() {
    if (this.props.auth.isAuthenticated) {
      return handleAuth(this.props)
    }

    return (
      <div className={theme(styles, 'login-page')}>
        <BackgroundSlideshow />

        <NavHeader fixed />

        <Paper className={theme(styles, 'content')}>
          <LoginForm onAuth={this._onAuth} />
        </Paper>
      </div>
    )
  }

  _onAuth = () => {
    handleAuth(this.props)
  }
}
