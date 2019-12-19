import hatechDialog from './component/Hatech-Dialog.vue'
const dialog = {
    install(Vue, options) {
        Vue.component('hatechDialog', hatechDialog);//'component-name'这就是后面可以使用的组件的名字，install是默认的一个方法
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(dialog);
}
export default dialog