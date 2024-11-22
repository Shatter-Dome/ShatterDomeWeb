"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Adjust for high-DPI screens
    mountRef.current.appendChild(renderer.domElement);

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(-8, 3, 4);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth interaction
    controls.dampingFactor = 0.1;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(1, 1, 1).normalize();
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight2.position.set(-1, -1, -1).normalize();
    scene.add(directionalLight2);

    // Load the GLB model
    const loader = new GLTFLoader();
    loader.load(
      "/models/model.glb",
      (gltf: { scene: any; }) => {
        const model = gltf.scene;

        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        scene.add(model);
        setLoading(false); // Model is loaded
      },
      undefined,
      (error: any) => {
        console.error("Error loading GLB model:", error);
        setLoading(false); // Stop loading indicator if there's an error
      }
    );

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
      camera.aspect = mountRef.current!.clientWidth / mountRef.current!.clientHeight;
      camera.updateProjectionMatrix();
    };

    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedResize);

    // Render the scene
    const renderScene = () => {
      controls.update();
      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(renderScene);
    };

    renderScene();

    return () => {
      window.removeEventListener("resize", debouncedResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // Debounce function to limit the rate of function calls
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
      }}
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.8)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <p>Loading 3D Model...</p>
        </div>
      )}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          color: "white",
          fontSize: "14px",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "5px 10px",
          borderRadius: "5px",
        }}
      >
        <p>Use mouse to rotate, zoom, and pan</p>
      </div>
    </div>
  );
};

export default ThreeScene;
