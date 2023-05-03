import * as THREE from 'three';
import { initOrbitControls } from './orbitControls';
import { initLighting } from './initLightning';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { autoResize } from '../util/autoResize';

interface IInitSceneOptions {
  canvas: HTMLCanvasElement;
  backgroundColor: THREE.ColorRepresentation;
  fogColor: THREE.ColorRepresentation;
  disableShadows?: boolean;
  disableLights?: boolean;
  disableDefaultControls?: boolean;
}

interface IRenderSceneOptions {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.Renderer;
  orbitControls?: OrbitControls;
}

export const initScene = ({
  canvas,
  backgroundColor,
  fogColor,
  disableShadows,
  disableLights,
  disableDefaultControls,
}: IInitSceneOptions) => {
  const init = (fn: (options: IRenderSceneOptions) => void) => {
    // basic scene setup
    const scene = new THREE.Scene();
    if (backgroundColor) {
      scene.background = new THREE.Color(backgroundColor);
    }

    if (fogColor) {
      scene.fog = new THREE.Fog(fogColor, 0.0025, 50);
    }

    // setup camera and basic renderer
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;
    renderer.setClearColor(backgroundColor);

    autoResize(camera, renderer);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // initialize orbit controls
    let orbitControls;
    if (!disableDefaultControls) {
      orbitControls = initOrbitControls(camera, renderer);
    }

    // add some basic lighting to the scene
    if (!disableLights ?? false) {
      initLighting(scene, { disableShadows });
    }

    fn({ scene, camera, renderer, orbitControls });
  };

  return init;
};
