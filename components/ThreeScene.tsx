"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Play, Pause } from "lucide-react";

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const requestRef = useRef<number>();
  const modelRef = useRef<THREE.Object3D | null>(null);
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sceneInitialized, setSceneInitialized] = useState(false);
  const [tooltipText, setTooltipText] = useState("Use mouse to rotate, zoom, and pan");
  const controlsRef = useRef<OrbitControls | null>(null);

  // Initialize basic scene elements
  const initializeScene = () => {
    if (!mountRef.current || sceneInitialized) return;

    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    sceneRef.current = scene;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(-8, 3, 4);
    cameraRef.current = camera;

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enabled = true;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(1, 1, 1).normalize();
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight2.position.set(-1, -1, -1).normalize();
    scene.add(directionalLight2);

    setSceneInitialized(true);
  };

  // Load the 3D model
  const loadModel = () => {
    if (!sceneRef.current) return;

    setLoading(true);
    const loader = new GLTFLoader();

    loader.load(
      "/models/model.glb",
      (gltf: { scene: any }) => {
        const model = gltf.scene;
        modelRef.current = model;

        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        sceneRef.current?.add(model);
        setLoading(false);
        startAnimation();
      },
      undefined,
      (error: any) => {
        console.error("Error loading GLB model:", error);
        setLoading(false);
      }
    );
  };

  // Start animation loop
  const startAnimation = () => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;

    const animate = () => {
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  // Clean up scene
  const cleanupScene = () => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }

    if (modelRef.current && sceneRef.current) {
      sceneRef.current.remove(modelRef.current);
      modelRef.current = null;
    }

    if (rendererRef.current) {
      if (mountRef.current?.contains(rendererRef.current.domElement)) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current.dispose();
      rendererRef.current = null;
    }

    if (controlsRef.current) {
      controlsRef.current.dispose();
      controlsRef.current = null;
    }

    if (sceneRef.current) {
      sceneRef.current.clear();
      sceneRef.current = null;
    }

    cameraRef.current = null;

    setSceneInitialized(false);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;

      rendererRef.current.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
      cameraRef.current.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
    };

    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      cleanupScene();
    };
  }, []);

  // Update tooltip text based on viewport size
  useEffect(() => {
    const updateTooltipText = () => {
      const isMobile = window.innerWidth <= 768;
      setTooltipText(
        isMobile
          ? "Tap and drag to rotate, pinch to zoom"
          : "Use mouse to rotate, zoom, and pan"
      );
    };

    updateTooltipText(); // Set initial value
    const debouncedUpdate = debounce(updateTooltipText, 100);
    window.addEventListener("resize", debouncedUpdate);

    return () => {
      window.removeEventListener("resize", debouncedUpdate);
    };
  }, []);

  // Toggle controls and scene initialization
  const toggleControls = () => {
    if (isPlaying) {
      cleanupScene();
      setIsPlaying(false);
    } else {
      initializeScene();
      loadModel();
      setIsPlaying(true);
    };
  };

  // Debounce function
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "500px",
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        background: "#000000",
      }}
    >
      {loading && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/80 rounded-md"
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className="w-16 h-16 text-white"
              >
                <rect x="50" y="50" width="100" height="100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="animate-[pulse_1.5s_infinite]"
                />
                <circle cx="60" cy="70" r="5" fill="currentColor" className="animate-ping" />
                <circle cx="140" cy="70" r="5" fill="currentColor" className="animate-ping delay-300" />
                <circle cx="60" cy="130" r="5" fill="currentColor" className="animate-ping delay-600" />
                <circle cx="140" cy="130" r="5" fill="currentColor" className="animate-ping delay-900" />
              </svg>
            </div>
            <div className="text-white text-sm font-bold animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2">
              Initializing Robot Systems...
            </div>
          </div>
        </div>
      )}

      {!isPlaying && (
        <button
          onClick={toggleControls}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-20 p-6 rounded-full hover:bg-opacity-30 transition-all duration-300"
          aria-label="Play 3D Scene"
        >
          <Play className="w-12 h-12 text-white" />
        </button>
      )}

      {isPlaying && (
        <button
          onClick={toggleControls}
          className="absolute top-4 right-4 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
          aria-label="Pause 3D Scene"
        >
          <Pause className="w-6 h-6 text-white" />
        </button>
      )}

      {isPlaying && sceneInitialized && (
        <div
          className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-3 py-2 rounded-lg"
          role="tooltip"
        >
          <p>{tooltipText}</p>
        </div>
      )}
    </div>
  );
};

export default ThreeScene;
