module.exports = {
  path: 'Home',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Home'))
    })
  }
}
