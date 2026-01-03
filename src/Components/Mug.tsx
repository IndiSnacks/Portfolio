import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function Mug() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const existingCanvas = containerRef.current.querySelector('canvas');
    if (existingCanvas) {
      containerRef.current.removeChild(existingCanvas);
    }

    let mounted = true;
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000);

    const render = new THREE.WebGLRenderer({alpha: true});
    render.setSize(width, height);
    render.setPixelRatio(window.devicePixelRatio);
    render.setClearColor(0x000000, 0);

    render.domElement.style.width = '100%';
    render.domElement.style.height = '100%';
    render.domElement.style.display = 'block';
    render.domElement.style.maxWidth = '100%';
    render.domElement.style.maxHeight = '100%';

    containerRef.current.appendChild(render.domElement);

    const ambientLight = new THREE.AmbientLight(0xFFFAF0, 0.75); // Soft overall light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xFFFAF0, 5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight); 

    const loader = new GLTFLoader();
    let mug: THREE.Group | null = null;
    let mugGroup: THREE.Group | null = null;

    loader.load('/models/Mug V2.gltf', (gltf) => {
      if(!mounted) return;

      mug = gltf.scene;
      mug.rotation.x = -.15;
      mug.rotation.z = -0.3;     
      mug.updateMatrixWorld(true);

      const box = new THREE.Box3().setFromObject(mug);
      const center = box.getCenter(new THREE.Vector3());
      
      mugGroup = new THREE.Group();
      mug.position.sub(center);
      mugGroup.add(mug); 
      mugGroup.scale.set(0,0,0);
      
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      
      camera.position.set(center.x + 4.5, center.y + 2, center.z + maxDim * -1);
      camera.lookAt(center);

      scene.add(mugGroup); 

      animate();
      render.render(scene, camera);
    }, undefined, (error) => {
      console.error('error rendering 3JS: ', error);
    })

    let isScaled = false;
    const initAnimation = () => {
      if(!mugGroup || !mounted) return; 
     
      mugGroup.scale.set(1,1,1);
      isScaled = true;

    }

    let animationFrameId: number | null = null;
    let count = 1;
    const originalYPosition = 0;

    const animate = () => {
      //TODO: check mounting and then animate 
      if(!mounted) return;

      if(!isScaled) initAnimation();

      animationFrameId = requestAnimationFrame(animate);
      
      if(mug){
        mug.rotation.y -= 0.01;
        
        const amplitude = 0.2; 
        const speed = 1.2; 
        
        mug.position.y = originalYPosition + Math.sin(count * speed) * amplitude;
        count+=0.01;
      }

      render.render(scene, camera);
    };

    const handleResize = () => {
      if(!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      render.setSize(newWidth, newHeight);
      render.render(scene, camera);
    };
    window.addEventListener('resize', handleResize);

    // ==== Cleanup ====
    //TODO: Add animation clean-up
    return () => {
      mounted = false;
      window.removeEventListener('resize', handleResize);

      // ==== Render cleanup ====
      if (rendererRef.current) {
        const canvas = rendererRef.current.domElement;
        if (canvas && canvas.parentNode) {
          canvas.parentNode.removeChild(canvas);
        }
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
      render.dispose();

      // ==== Scene Cleanup ====
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry?.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material?.dispose();
            }
          }
        });
        sceneRef.current = null;
      }

      // ==== Animation Cleanup
      if(animationFrameId != null){
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className='w-3/4 h-full px-5'
      style={{ aspectRatio: '1/1', overflow: 'visible'}} 
    />
  )
}