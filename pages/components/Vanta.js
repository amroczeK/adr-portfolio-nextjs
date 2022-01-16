import { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export default function Vanta({}) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x464749,
          //backgroundAlpha: 0,
          backgroundColor: 0x1d1e26,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          points: 10.0,
          maxDistance: 20.0,
          spacing: 15.0,
        })
      );
    }

    return () => {
      if (vantaEffect && vantaEffect.destroy()) {
        vantaEffect?.destory();
      }
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 -z-10" />;
}
