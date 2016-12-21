import Button from './components/button'
import Icon from './components/icon'
import Link from './components/link'
import ListItem from './components/list-item'
import List from './components/list'
import Navbar from './components/navbar'

const install = function(Vue) {
  if (install.installed) return

  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
  Vue.component(Link.name, Link)
  Vue.component(ListItem.name, ListItem)
  Vue.component(List.name, List)
  Vue.component(Navbar.name, Navbar)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  version: '0.0.1',
  Button,
  Icon,
  Link,
  ListItem,
  List,
  Navbar
}
