// 发布环境
import FSUI from 'future_screen'
import 'future_screen/release/css/index.css'

// //开发环境
// import FSUI from './../../../release/FSUI.umd'
// import './../../../release/css/index.css'
export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    Vue.use(FSUI);
};