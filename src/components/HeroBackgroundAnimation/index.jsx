import { useEffect } from "react";
import m from "./index.module.scss"

function HeroBackgroundAnimation() {
    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        let dots = [];
        let animationFrameId;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            generateDots();
        }

        function generateDots() {
            dots = [];
            for (let x = 0; x < canvas.width; x += 25) {
                for (let y = 0; y < canvas.height; y += 25) {
                    if (Math.random() > 0.8) {
                        dots.push({ x, y, alpha: Math.random(), speed: Math.random() * 2 });
                    }
                }
            }
        }

        function animateDots(timestamp) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach(dot => {
                dot.alpha = Math.abs(Math.sin(timestamp / (500 + dot.speed * 200)));
                ctx.fillStyle = `rgba(0, 255, 204, ${dot.alpha})`;
                ctx.fillRect(dot.x, dot.y, 2, 2);
            });

            animationFrameId = requestAnimationFrame(animateDots);
        }

        function startAnimation() {
            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(animateDots);
            }
        }

        window.addEventListener("resize", () => {
            resizeCanvas();
            startAnimation();
        });

        resizeCanvas();
        startAnimation();
    }, [])

    return <canvas id="canvas" className={m.canvas}></canvas>
}

export default HeroBackgroundAnimation