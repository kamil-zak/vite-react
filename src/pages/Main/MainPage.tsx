import GUI from 'lil-gui';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { initScene } from '../../three/bootstrap/bootstrap';

export const MainPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const config = {
      canvas: canvasRef.current,
      backgroundColor: 0xffffff,
      fogColor: 0xffffff,
    };
    const gui = new GUI();

    initScene(config)(({ scene, camera, renderer, orbitControls }) => {
      camera.position.set(-7, 2, 5);

      // floatingFloor(scene, 10);

      const cubeGeometry = new THREE.BoxGeometry();
      const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.x = -1;
      cube.castShadow = true;
      scene.add(cube);

      const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 100);
      const torusKnotMat = new THREE.MeshStandardMaterial({
        color: 0x00ff88,
        roughness: 0.1,
      });
      const torusKnotMesh = new THREE.Mesh(torusKnotGeometry, torusKnotMat);
      torusKnotMesh.castShadow = true;
      torusKnotMesh.position.x = 2;
      scene.add(torusKnotMesh);

      const groundGeometry = new THREE.PlaneGeometry(10000, 10000);
      const groundMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
      });
      const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
      groundMesh.position.set(0, -2, 0);
      groundMesh.rotation.set(Math.PI / -2, 0, 0);
      groundMesh.receiveShadow = true;
      scene.add(groundMesh);

      const props = {
        cubeSpeed: 0.01,
        torusSpeed: 0.01,
      };
      gui.add(props, 'cubeSpeed', -0.2, 0.2, 0.01);
      gui.add(props, 'torusSpeed', -0.2, 0.2, 0.01);

      function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += props.cubeSpeed;
        cube.rotation.y += props.cubeSpeed;
        cube.rotation.z += props.cubeSpeed;

        torusKnotMesh.rotation.x -= props.torusSpeed;
        torusKnotMesh.rotation.y += props.torusSpeed;
        torusKnotMesh.rotation.z -= props.torusSpeed;

        renderer.render(scene, camera);
        orbitControls?.update();
      }
      animate();

      // intializeRendererControls(gui, renderer);
      // initializeHelperControls(gui, scene);
      // initializeSceneControls(gui, scene, true);
      // initializeAddRemoveCubeControls(gui, scene);
    });

    // const geometry = new THREE.BoxGeometry();
    // const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, basicMaterial);
    // scene.add(cube);

    return () => {
      // gui.destroy();
      // window.removeEventListener('resize', onWindowResize, false);
      // if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};
