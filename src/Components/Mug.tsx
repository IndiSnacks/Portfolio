import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function Mug() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let mounted = true;
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);

    const render = new THREE.WebGLRenderer({alpha: true});
    render.setSize(width, height);
    render.setPixelRatio(window.devicePixelRatio);
    render.setClearColor(0x000000, 0);
    containerRef.current.appendChild(render.domElement);

    const ambientLight = new THREE.AmbientLight(0xFFFAF0, 1); // Soft overall light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xFFFAF0, 4);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight); 

    const loader = new GLTFLoader();
    let mug: THREE.Group | null = null;

    loader.load('/models/Mug V2.gltf', (gltf) => {
      if(!mounted) return;

      mug = gltf.scene;
      scene.add(mug); 

      const box = new THREE.Box3().setFromObject(mug);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      camera.position.set(center.x, center.y, center.z + maxDim * 1.5);
      camera.lookAt(center);

      render.render(scene, camera);
    }, undefined, (error) => {
      console.error('error rendering 3JS: ', error);
    })

    const handleResize = () => {
      if(!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      render.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      mounted = false;
      window.removeEventListener('resize', handleResize);
      if(containerRef.current && render.domElement.parentNode){
        containerRef.current.removeChild(render.domElement);
      }
      render.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className='w-1/4 h-auto max-sm:hidden pt-5 px-5'
      style={{ aspectRatio: '1/1'}} 
    />
  )
}