let hello = resolve => require(['../components/hello.vue'], resolve)

export default [{
  path: '/',
  name: 'hello',
  component: hello
}]
