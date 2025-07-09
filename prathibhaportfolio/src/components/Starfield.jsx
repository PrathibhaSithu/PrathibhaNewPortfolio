import { useEffect, useRef } from "react";
import * as THREE from "three";

const Starfield = () => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null); // to track the renderer

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    rendererRef.current = renderer;

    mount.appendChild(renderer.domElement);

    // Stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const starVertices = [];

    for (let i = 0; i < starCount; i++) {
      starVertices.push(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      );
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 50;

    const animate = () => {
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mount && rendererRef.current?.domElement) {
        try {
          mount.removeChild(rendererRef.current.domElement);
        } catch (err) {
          console.warn("Error during unmount cleanup:", err);
        }
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0"
      style={{ width: "100%", height: "100%", position: "absolute" }}
    />
  );
};

export default Starfield;
