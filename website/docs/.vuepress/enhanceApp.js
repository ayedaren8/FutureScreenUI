// 发布环境
// import FSUI from 'future_screen'
// import 'future_screen/release/css/index.css'

//开发环境
import FSUI from './../../../release/FSUI.umd';
import './../../../release/style/index.css';
export default ({ Vue }) => {
	Vue.use(FSUI);
};
