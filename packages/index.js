import button from './button/src/fsButton'
(() => {
    console.log("立即执行");

})
const components = [
    button
]
const install = function (Vue) {
    console.log("全局挂载");
    components.forEach((item) => {
        Vue.component(item.name, item)
    })
    if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue);
    }
}

export default {
    install,
};