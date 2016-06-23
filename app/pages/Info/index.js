module.exports = {
  path: 'Info',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Info'))
    })
  }
}
