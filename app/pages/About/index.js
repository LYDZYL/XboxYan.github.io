module.exports = {
  path: 'About',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/About'))
    })
  }
}
