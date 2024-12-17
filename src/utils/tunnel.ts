interface Rotation {
  x: number;
  y: number;
}

export function setupTunnelInteractivity() {
  const container = document.querySelector('.tunnel-container');
  const cards = document.querySelectorAll('.hologram-card');

  if (!container) return;

  let isHovering = false;
  let rafId: number | null = null;
  let targetRotation: Rotation = { x: 0, y: 0 };
  let currentRotation: Rotation = { x: 0, y: 0 };

  const lerp = (start: number, end: number, factor: number) => {
    return start + (factor * (end - start));
  };

  const updateMousePosition = (e: MouseEvent) => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
    });
  };

  const animate = () => {
    if (!isHovering) {
      currentRotation.x = lerp(currentRotation.x, targetRotation.x, 0.05);
      currentRotation.y = lerp(currentRotation.y, targetRotation.y, 0.05);
      
      container.style.transform = `
        rotateY(${currentRotation.y}deg)
        rotateX(${currentRotation.x}deg)
        translateZ(-500px)
      `;
    }
    rafId = requestAnimationFrame(animate);
  };

  document.addEventListener('mousemove', (e) => {
    updateMousePosition(e);
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    targetRotation.y = ((clientX / innerWidth) - 0.5) * 20;
    targetRotation.x = ((clientY / innerHeight) - 0.5) * -20;
  });

  container.addEventListener('mouseenter', () => {
    isHovering = true;
  });

  container.addEventListener('mouseleave', () => {
    isHovering = false;
  });

  animate();

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
  };
}