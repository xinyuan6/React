// <!-- // 1 创建虚拟dom元素对象  -->
// <!-- // 2 将虚拟dom渲染到页面真实dom容器中 -->



var vDom = < h1 > Hello React! < /h1>; 
ReactDom.render(vDom, document.getElementById('test'));