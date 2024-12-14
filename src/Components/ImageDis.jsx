import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import MyPic from '../assets/Profile-pic.jpg';
import '../Components/image.css';

const ImageDis = () => {
  const imageContainerRef = useRef(null);
  const imageElementRef = useRef(null);

  useEffect(() => {
    let easeFactor = 0.02;
    let scene, camera, renderer, planeMesh;
    let mousePosition = { x: 0.5, y: 0.5 };
    let targetMousePosition = { x: 0.5, y: 0.5 };
    let prevPosition = { x: 0.5, y: 0.5 };
    let aberrationIntensity = 0.0;

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform sampler2D u_texture;    
      uniform vec2 u_mouse;
      uniform vec2 u_prevMouse;
      uniform float u_aberrationIntensity;

      void main() {
          vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
          vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
          
          vec2 mouseDirection = u_mouse - u_prevMouse;
          vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
          float pixelDistanceToMouse = length(pixelToMouseDirection);
          float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);

          vec2 uvOffset = strength * -mouseDirection * 0.2;
          vec2 uv = vUv - uvOffset;

          vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
          vec4 colorG = texture2D(u_texture, uv);
          vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

          gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
      }
    `;

    const initializeScene = (texture) => {
      // Scene creation
      scene = new THREE.Scene();

      // Camera setup
      camera = new THREE.PerspectiveCamera(
        80,
        imageElementRef.current.offsetWidth / imageElementRef.current.offsetHeight,
        0.01,
        10
      );
      camera.position.z = 1;

      // Uniforms
      const shaderUniforms = {
        u_mouse: { type: "v2", value: new THREE.Vector2() },
        u_prevMouse: { type: "v2", value: new THREE.Vector2() },
        u_aberrationIntensity: { type: "f", value: 0.0 },
        u_texture: { type: "t", value: texture },
      };

      // Creating a plane mesh with materials
      planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader,
        })
      );

      // Add mesh to scene
      scene.add(planeMesh);

      // Renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(
        imageElementRef.current.offsetWidth,
        imageElementRef.current.offsetHeight
      );

      // Append canvas
      imageContainerRef.current.appendChild(renderer.domElement);
    };

    const animateScene = () => {
      requestAnimationFrame(animateScene);

      mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
      mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

      planeMesh.material.uniforms.u_mouse.value.set(
        mousePosition.x,
        1.0 - mousePosition.y
      );

      planeMesh.material.uniforms.u_prevMouse.value.set(
        prevPosition.x,
        1.0 - prevPosition.y
      );

      aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);

      planeMesh.material.uniforms.u_aberrationIntensity.value =
        aberrationIntensity;

      renderer.render(scene, camera);
    };

    const handleMouseMove = (event) => {
      easeFactor = 0.02;
      const rect = imageContainerRef.current.getBoundingClientRect();
      prevPosition = { ...targetMousePosition };

      targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      targetMousePosition.y = (event.clientY - rect.top) / rect.height;

      aberrationIntensity = 1;
    };

    const handleMouseEnter = (event) => {
      easeFactor = 0.02;
      const rect = imageContainerRef.current.getBoundingClientRect();

      mousePosition.x = targetMousePosition.x =
        (event.clientX - rect.left) / rect.width;
      mousePosition.y = targetMousePosition.y =
        (event.clientY - rect.top) / rect.height;
    };

    const handleMouseLeave = () => {
      easeFactor = 0.05;
      targetMousePosition = { ...prevPosition };
    };

    // Initialize scene using the image texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageElementRef.current.src);
    initializeScene(texture);

    // Animate scene
    animateScene();

    // Add event listeners
    const imageContainer = imageContainerRef.current;
    imageContainer.addEventListener("mousemove", handleMouseMove);
    imageContainer.addEventListener("mouseenter", handleMouseEnter);
    imageContainer.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      imageContainer.removeEventListener("mousemove", handleMouseMove);
      imageContainer.removeEventListener("mouseenter", handleMouseEnter);
      imageContainer.removeEventListener("mouseleave", handleMouseLeave);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div id="imageContainer" ref={imageContainerRef}>
        <img
          id="myImage"
          ref={imageElementRef}
          src={MyPic}
          alt="Profile Picture"
          style={{ opacity: 0, position: "absolute", zIndex: -1  }}
        />
      </div>
    </>
  );
};

export default ImageDis;
