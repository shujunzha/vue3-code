<template>
  <div class="container" id="container"></div>
</template>
  <script lang="ts" setup>
let scene = null as any, //场景
  camera = null as any, //相机
  renderer = null as any, //渲染器
  controls = null as any; //轨道控制器
import { onMounted, reactive } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//设置three的方法
const render = async () => {
  //1.创建场景
  scene = new THREE.Scene();
  //2.创建相机
  camera = new THREE.PerspectiveCamera(
    105,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  //3.设置相机位置
  camera.position.set(0, 0, 4);
  scene.add(camera);
  //4.建立3个坐标轴
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  //   const geometry = new THREE.BoxGeometry(100, 100, 100);

  //   //创建一个材质对象Material
  //   const material = new THREE.MeshBasicMaterial({
  //     color: 0xff0000 //0xff0000设置材质颜色为红色
  //   });
  //   // 两个参数分别为几何体geometry、材质material
  //   const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  //   mesh.position.set(0, 10, 0);
  //   scene.add(mesh);

  //6.设置环境光，要不然模型没有颜色
  let ambientLight = new THREE.AmbientLight(); //设置环境光
  scene.add(ambientLight); //将环境光添加到场景中
  let pointLight = new THREE.PointLight();
  pointLight.position.set(200, 200, 200); //设置点光源位置
  scene.add(pointLight); //将点光源添加至场景

  //7.初始化渲染器
  //渲染器透明
  renderer = new THREE.WebGLRenderer({
    alpha: true, //渲染器透明
    antialias: true, //抗锯齿
    precision: "highp" //着色器开启高精度
  });

  //开启HiDPI设置
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  //设置渲染器尺寸大小
  renderer.setClearColor(0x228b22, 0.1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  //将webgl渲染的canvas内容添加到div
  let container = document.getElementById("container") as any;
  container.appendChild(renderer.domElement);
  //使用渲染器 通过相机将场景渲染出来
  renderer.render(scene, camera);
  controls = new OrbitControls(camera, renderer.domElement);
};
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
onMounted(() => {
  render();
  animate();
});
</script>
  <style scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
  