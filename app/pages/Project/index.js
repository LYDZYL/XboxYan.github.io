module.exports = {
  path: 'Project',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./pages/Item'),
      ])
    })
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Project'))
    })
  }
}
