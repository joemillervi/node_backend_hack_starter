export const apiGETRoutes = (req, res) => {
  if (req.params.cmd === 'test') {
    res.send({data: 'test response'})
  }
  if (req.params.cmd === 'auth-check-username-exists') {
    res.send({data: 'test response'})
  }
}

export const apiPOSTRoutes = (req, res) => {
  // AUTH
  if (req.params.cmd === '/auth-signup', 
    routes.signup
  )
  if (req.params.cmd === '/auth-login', 
    routes.login
  )
  if (req.params.cmd === '/auth-logout', 
    routes.logout
  )
  if (req.params.cmd === '/auth-send-username-reminder', 
    routes.sendUsernameReminder
  )
  if (req.params.cmd === '/auth-send-email-verify-reminder', 
    routes.sendEmailVerifyReminder
  )
  if (req.params.cmd === '/auth-request-password-reset', 
    // request to send an email to reset pwd
    routes.handleRequestPasswordReset
  )
  if (req.params.cmd === '/auth-reset-password', 
    routes.handleResetPassword                 
  )
  app.get('/:username',
    routes.handleCheckUsernameExists
  )
}
