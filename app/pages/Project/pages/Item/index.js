module.exports = {
  path: ':id',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Item'))
    })
  }
}
