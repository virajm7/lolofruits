// "use client";
// import { useEffect } from "react";
// import { motion, useMotionValue, animate } from "framer-motion";

// export default function AnimatedLogo() {
//   const y = useMotionValue(0);
//   const scale = useMotionValue(1);

//   useEffect(() => {
//     const onScroll = () => {
//       const heroHeight = window.innerHeight * 0.45;
//       const scrollY = Math.min(window.scrollY, heroHeight);
//       const yTravel = -(window.innerHeight / 2) + 70; // 40px leaves some gap from navbar
//       const progress = scrollY / heroHeight;
//       animate(y, yTravel * progress, { duration: 0.4, ease: [0.65, 0, 0.35, 1] });
//       animate(scale, 1 - 0.47 * progress, { duration: 0.4, ease: [0.65, 0, 0.35, 1] }); // Goes down to ~0.53
//     };
//     window.addEventListener("scroll", onScroll);
//     window.addEventListener("resize", onScroll);
//     onScroll();
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//     };
//   }, [y, scale]);

//   return (
//     <motion.h1
//       style={{
//         position: "fixed",
//         left: "43%",
//         top: "30%",
//         zIndex: 30,
//         transform: "translate(-50%, -50%)",
//         fontFamily: `"Times New Roman", Times, serif`,
//         fontWeight: 400,
//         fontSize: "clamp(2.5rem, 9vw, 6rem)",
//         color: "#fff",
//         letterSpacing: "0.08em",
//         cursor: "default",
//         userSelect: "none",
//         pointerEvents: "none",
//         y,
//         scale,
//         lineHeight: 1,
//         margin: 0,
//         textShadow: "0 2px 16px rgba(34,34,59,0.10), 0 4px 48px rgba(34,34,59,0.07)"
//       }}
//       aria-label="Lolo Home"
//     >
//       LOLO
//     </motion.h1>
//   );
// }