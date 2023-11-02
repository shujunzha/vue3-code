import { createRouter, createWebHistory} from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入
const About = () => import("@/view/nameTask/about/index.vue")
const Home = () => import("@/view/nameTask/home/index.vue")
const Search = () => import("@/view/nameTask/index.vue") 

const Father = () => import("@/view/faterSon/faterToSon/index.vue") 
const Test = ()=>import("@/view/testView/test.vue")
const Editor = () => import("@/components/editor/index.vue") 
const MyForm = () => import("@/view/formView/index.vue") 
const Compont = () => import("@/view/commonView/terninal.vue") 
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
//   { path: '/', component:  () => import("@/views/nameTask/home/index.vue") },
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/about', component: About },
  { path: '/fater', component: Father },
  { path: '/test', component: Test },
  { path: '/editor', component: Editor },
  { path: '/compont', component: Compont },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router