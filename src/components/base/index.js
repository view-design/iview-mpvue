/**
 * @file 基础库
 */


function Message(ctx, options) {
  const {refs = 'message'} = options
  const vm = ctx.$refs[refs]
  vm && vm.handleShow && vm.handleShow(options)
}

function Toast(ctx, options) {
  const {refs = 'toast'} = options
  const vm = ctx.$refs[refs]
  vm && vm.handleShow && vm.handleShow(options)
}
Toast.hide = function (ctx, refs = 'toast') {
  const vm = ctx.$refs[refs]
  vm && vm.handleHide && vm.handleHide()
}


module.exports = {
  $Message: Message,
  $Toast: Toast
}