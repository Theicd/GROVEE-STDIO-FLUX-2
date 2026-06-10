import { useEffect, useRef } from "react";
import * as THREE from "three";

export function JervCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const palette = [
      new THREE.Color(0xff2a2a),
      new THREE.Color(0xff5533),
      new THREE.Color(0xff7a3d),
      new THREE.Color(0x00e5ff),
      new THREE.Color(0x2dd4bf),
      new THREE.Color(0x10b981),
      new THREE.Color(0x38bdf8),
    ];

    const core = new THREE.IcosahedronGeometry(0.95, 1);
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(core),
      new THREE.LineBasicMaterial({ color: palette[0], transparent: true, opacity: 0.55 }),
    );
    scene.add(wire);

    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.35 + i * 0.28, 0.012, 8, 96),
        new THREE.MeshBasicMaterial({
          color: palette[i % palette.length],
          transparent: true,
          opacity: 0.22 - i * 0.05,
        }),
      );
      ring.rotation.x = Math.PI / 2 + i * 0.18;
      ring.rotation.y = i * 0.4;
      scene.add(ring);
      rings.push(ring);
    }

    let raf = 0;
    let colorPhase = 0;
    const wireMat = wire.material as THREE.LineBasicMaterial;
    const tempColor = new THREE.Color();

    const animate = () => {
      colorPhase += 0.0035;
      const idx = Math.floor(colorPhase) % palette.length;
      const next = (idx + 1) % palette.length;
      const blend = colorPhase - Math.floor(colorPhase);
      tempColor.copy(palette[idx]).lerp(palette[next], blend);
      wireMat.color.copy(tempColor);

      rings.forEach((ring, i) => {
        ring.rotation.z += 0.0018 + i * 0.0006;
        const ringMat = ring.material as THREE.MeshBasicMaterial;
        const ringIdx = (idx + i) % palette.length;
        const ringNext = (ringIdx + 1) % palette.length;
        tempColor.copy(palette[ringIdx]).lerp(palette[ringNext], blend);
        ringMat.color.copy(tempColor);
      });

      wire.rotation.x += 0.0032;
      wire.rotation.y += 0.0048;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      core.dispose();
      wire.geometry.dispose();
      (wire.material as THREE.Material).dispose();
      rings.forEach((ring) => {
        ring.geometry.dispose();
        (ring.material as THREE.Material).dispose();
      });
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="jerv-canvas" aria-hidden="true" />;
}
