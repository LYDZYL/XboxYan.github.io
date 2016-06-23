module.exports = {
  path: 'Project',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Project'))
    })
  }
}
