import createGlobe from "cobe";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { useSpring } from "react-spring";

import styles from "./globe.module.scss";

export default function Cobe() {
  const { theme } = useTheme();
  const canvasRef =
    useRef<HTMLCanvasElement>() as React.MutableRefObject<HTMLCanvasElement>;
  const pointerInteracting = useRef(0);
  const pointerInteractionMovement = useRef(0);
  const interactionTimeout = useRef(5);
  const locationToAngles = (lat: number, long: number) => {
    interactionTimeout.current = 0;
    return [
      Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
      (lat * Math.PI) / 180,
    ];
  };
  const focusRef = useRef([0, 0]);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));
  useEffect(() => {
    let width = 0;
    let currentPhi = 0;
    let currentTheta = 0.2;
    const doublePi = Math.PI * 2;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.2,
      dark: theme === "dark" ? 1 : 0.1,
      diffuse: 1,
      mapSamples: 16000,
      mapBrightness: 3,
      mapBaseBrightness: 0.05,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor:
        theme === "dark"
          ? [55 / 255, 55 / 255, 55 / 255]
          : [173 / 255, 173 / 255, 173 / 255],
      markers: [
        { location: [31.574, -17.879], size: 0.1 }, // Madère
        { location: [48.856, 2.351], size: 0.05 }, // Paris
        { location: [52.52, 13.405], size: 0.05 }, // Berlin
        { location: [51.507, -0.128], size: 0.05 }, // London
        { location: [41.91, 12.371], size: 0.05 }, // Rome
        { location: [50.85, 4.35], size: 0.05 }, // Brussels
        { location: [37.99, 23.697], size: 0.05 }, // Athènes
        { location: [35.508, 139.11], size: 0.05 }, // Tokyo
        { location: [37.757, -122.478], size: 0.05 }, // San Francisco
      ],
      opacity: 0.85,
      onRender: (state) => {
        interactionTimeout.current += 0.005;

        if (interactionTimeout.current > 1.5) {
          // resume auto rotation
          const thetaDiff = Math.abs(currentTheta - 0.2);
          currentTheta += thetaDiff > 0.001 ? (0.2 - currentTheta) * 0.005 : 0;
          currentPhi += 0.004;
          focusRef.current = [0, 0];
        } else if (focusRef.current[0] !== 0 && focusRef.current[1] !== 0) {
          // focus movement
          const [focusPhi, focusTheta] = focusRef.current;
          const distPositive =
            (focusPhi - (currentPhi + r.get()) + doublePi) % doublePi;
          const distNegative =
            (currentPhi + r.get() - focusPhi + doublePi) % doublePi;

          if (distPositive < distNegative) {
            currentPhi += distPositive * 0.05;
          } else {
            currentPhi -= distNegative * 0.05;
          }
          currentTheta = currentTheta * 0.92 + focusTheta * 0.08;
        }

        state.phi = currentPhi + r.get();
        state.theta = currentTheta;
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    setTimeout(() => (canvasRef.current.style.opacity = "1"));
    return () => globe.destroy();
  }, [r, theme]);
  return (
    <div className={styles.globe}>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = 0;
          canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = 0;
          canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== 0) {
            const delta = e.clientX - pointerInteracting.current;
            focusRef.current = [0, 0];
            pointerInteractionMovement.current = delta;
            interactionTimeout.current = 0;
            api.start({
              r: delta / 200,
            });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== 0 && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            focusRef.current = [0, 0];
            pointerInteractionMovement.current = delta;
            interactionTimeout.current = 0;
            api.start({
              r: delta / 15,
            });
          }
        }}
      />
      <div className={styles.destinations}>
        <p>Prochainement :</p>
        <button
          onClick={() => (focusRef.current = locationToAngles(1.314, 103.679))}
        >
          📍 Singapour
        </button>
        <button
          onClick={() =>
            (focusRef.current = locationToAngles(37.757, -122.478))
          }
        >
          📍 San Francisco
        </button>
      </div>
    </div>
  );
}
