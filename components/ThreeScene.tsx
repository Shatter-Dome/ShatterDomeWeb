// components/ThreeScene.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'dat.gui';

const ThreeScene: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>();

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

        // Set up the camera with initial position and rotation
        const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        camera.position.set(-8, 3, 4);

        // Add orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.minDistance = 2;
        controls.maxDistance = 50;
        controls.maxPolarAngle = Math.PI / 2;

        // Create a GUI for orbit controls
        const gui = new GUI({ autoPlace: false });
        const controlsFolder = gui.addFolder('OrbitControls');
        controlsFolder.add(controls, 'enabled').name('Enable Controls');
        controlsFolder.add(controls, 'enableDamping').name('Enable Damping');
        controlsFolder.add(controls, 'dampingFactor', 0, 1).name('Damping Factor');
        controlsFolder.add(controls, 'screenSpacePanning').name('Screen Space Panning');
        controlsFolder.add(controls, 'minDistance', 0, 100).name('Min Distance');
        controlsFolder.add(controls, 'maxDistance', 0, 100).name('Max Distance');
        controlsFolder.add(controls, 'maxPolarAngle', 0, Math.PI).name('Max Polar Angle');
        controlsFolder.add({ reset: () => controls.reset() }, 'reset').name('Reset Controls');
        controlsFolder.open();

        // Append the GUI to the mountRef
        mountRef.current.appendChild(gui.domElement);
        gui.domElement.style.position = 'absolute';
        gui.domElement.style.top = '10px';
        gui.domElement.style.right = '10px';

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
            '/models/model.glb',
            (gltf: { scene: any; }) => {
                const model = gltf.scene;

                // Center the model
                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                model.position.sub(center);

                scene.add(model);
            },
            undefined,
            (error: any) => {
                console.error(error);
            }
        );

        // Handle window resize
        const handleResize = () => {
            renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
            camera.aspect = mountRef.current!.clientWidth / mountRef.current!.clientHeight;
            camera.updateProjectionMatrix();
        };

        // Debounce the resize event
        const debouncedResize = debounce(handleResize, 100);
        window.addEventListener('resize', debouncedResize);

        // Render the scene
        const renderScene = () => {
            controls.update();
            renderer.render(scene, camera);
            requestRef.current = requestAnimationFrame(renderScene);
        };

        renderScene();

        return () => {
            window.removeEventListener('resize', debouncedResize);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            mountRef.current?.removeChild(renderer.domElement);
            gui.destroy();
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

    return <div ref={mountRef} style={{ width: '100%', height: '500px', position: 'relative', borderRadius: '10px', overflow: 'hidden' }} />;
};

export default ThreeScene;
