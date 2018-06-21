 // 导入组件 和 依赖
    import Vue from 'vue'
    import Router from 'vue-router'
    import home from '@/components/home'
    import page01 from '@/components/page01'
    import page02 from '@/components/page02'
    import page01A from '@/components/page01/page01-A'
    import page01B from '@/components/page01/page01-B'
    import end from '@/components/page01/page01-B/end'

    // 告诉 vue 你要使用 route
    Vue.use(Router)
    // 定义路由配置项并导出
    export default new Router({
      mode: 'history',
      routes: [
       {
        path:'/home',
        name:'home',
        component:home,
       },
       {
        path:'/page01',
        name:'page01',
        component:page01,
        children:[
       {
        path:'page01A',
        name:'page01A',
        component:page01A

       },
       {
        path:'page01B',
        name:'page01B',
        component:page01B,
        children:[
       {
        path:'end',
        name:'end',
        component:end

       }
        ]
       }
       ]
     },
       {
        path:'/page02',
        name:'page02',
        component:page02
       }
       ]
    })
