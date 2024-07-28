// src/three-externals.d.ts
declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, EventDispatcher, MOUSE, Vector3 } from 'three';

    class OrbitControls extends EventDispatcher {
        constructor(object: Camera, domElement?: HTMLElement);

        object: Camera;
        domElement: HTMLElement | Document;

        enabled: boolean;
        target: Vector3;

        minDistance: number;
        maxDistance: number;

        minZoom: number;
        maxZoom: number;

        minPolarAngle: number;
        maxPolarAngle: number;

        minAzimuthAngle: number;
        maxAzimuthAngle: number;

        enableDamping: boolean;
        dampingFactor: number;

        enableZoom: boolean;
        zoomSpeed: number;

        enableRotate: boolean;
        rotateSpeed: number;

        enablePan: boolean;
        panSpeed: number;
        screenSpacePanning: boolean;
        keyPanSpeed: number;

        autoRotate: boolean;
        autoRotateSpeed: number;

        keys: { LEFT: number; UP: number; RIGHT: number; BOTTOM: number };
        mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };

        update(): boolean;
        saveState(): void;
        reset(): void;
        dispose(): void;
        getPolarAngle(): number;
        getAzimuthalAngle(): number;
        addEventListener(type: string, listener: (event: any) => void): void;
        hasEventListener(type: string, listener: (event: any) => void): boolean;
        removeEventListener(type: string, listener: (event: any) => void): void;
        dispatchEvent(event: { type: string; target: any }): void;
    }

    export { OrbitControls };
}

declare module 'three/examples/jsm/loaders/GLTFLoader' {
    import { Loader, LoadingManager, Group, AnimationClip } from 'three';

    export class GLTFLoader extends Loader {
        constructor(manager?: LoadingManager);

        load(
            url: string,
            onLoad: (gltf: GLTF) => void,
            onProgress?: (event: ProgressEvent) => void,
            onError?: (event: ErrorEvent) => void
        ): void;

        parse(
            data: ArrayBuffer | string,
            path: string,
            onLoad: (gltf: GLTF) => void,
            onError?: (event: ErrorEvent) => void
        ): void;
    }

    export interface GLTF {
        animations: AnimationClip[];
        scene: Group;
        scenes: Group[];
        cameras: Array<any>;
        asset: object;
    }
}
