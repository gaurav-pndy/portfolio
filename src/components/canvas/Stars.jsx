import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    const positions = new Float32Array(5000 * 3);
    random.inSphere(positions, { radius: 1.5 });
    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="hidden md:block">
      <div className="w-full h-[60%] absolute bottom-0   -z-20">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>

          <Preload all />
        </Canvas>
      </div>
      <div className="w-full h-[65%] absolute bottom-0 bg-gradient-to-t from-transparent via-[#0508164a]  to-primary -z-10 pointer-events-none"></div>
    </div>
  );
};

export default StarsCanvas;
