"use client";

import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Blob class
    class Blob {
      x: number;
      y: number;
      size: number;
      color: string;
      vx: number;
      vy: number;

      constructor(x: number, y: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;

        // ! Change end number to adjust speed
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (!canvas) return;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.filter = "blur(100px)";
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create blobs with smaller sizes
    const blobs = [
      new Blob(
        canvas.width * 0.3,
        canvas.height * 0.3,
        200,
        "oklch(0.65 0.25 70.08)"
      ), // Deep Amber
      new Blob(
        canvas.width * 0.6,
        canvas.height * 0.6,
        200,
        "oklch(0.55 0.25 184.704)"
      ), // Deep Blue
      new Blob(
        canvas.width * 0.5,
        canvas.height * 0.5,
        200,
        "oklch(0.65 0.25 350)"
      ), // Deep Pink
    ];

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob) => {
        blob.update();
        blob.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 bg-neutral-300/60 dark:bg-neutral-900/90 transition-opacity from-0% to-100% ease-in-out"
      style={{ opacity: 0.5 }}
    />
  );
};

export default AnimatedBackground;
