const canvas = document.getElementById('particle-canvas');
const context = canvas.getContext('2d');
const particleCount = 100;
const connectionThreshold = 100; // 连接的阈值距离

const computerStyle = getComputedStyle(canvas);
const height = computerStyle.height;

const canvasHeight = parseInt(height, 10);

const minScreenSize = 600;
const reducedParticleCount = 25;

let particles = [];

function Particle(x, y, speedX, speedY, size, color) {
  this.x = x;
  this.y = y;
  this.speedX = speedX;
  this.speedY = speedY;
  this.size = size;
  this.color = color;
}

Particle.prototype.draw = function() {
  context.fillStyle = this.color;
  context.beginPath();
  context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  context.closePath();
  context.fill();
}

Particle.prototype.update = function() {
  this.x += this.speedX;
  this.y += this.speedY;

  // 边界碰撞检测
  if (this.x + this.size > canvas.width || this.x - this.size < 0) {
    this.speedX = -this.speedX;
  }
  if (this.y + this.size > canvas.height || this.y - this.size < 0) {
    this.speedY = -this.speedY;
  }
}

function createParticles() {
  const particleCount = window.innerWidth < minScreenSize ? reducedParticleCount:100;

  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speedX = (Math.random() - 0.5) * 2;
    const speedY = (Math.random() - 0.5) * 2;
    const size = Math.random() * 3 + 1;
    const color = '#ffffff';

    const particle = new Particle(x, y, speedX, speedY, size, color);
    particles.push(particle);
  }
}

function drawParticles() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.draw();
  });
}

function updateParticles() {
  particles.forEach(particle => {
    particle.update();
  });
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    const particleA = particles[i];

    for (let j = i + 1; j < particles.length; j++) {
      const particleB = particles[j];
      const distance = getDistance(particleA, particleB);

      if (distance < connectionThreshold) {
        context.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(particleA.x, particleA.y);
        context.lineTo(particleB.x, particleB.y);
        context.stroke();
        context.closePath();
      }
    }
  }
}

function getDistance(particleA, particleB) {
  const dx = particleA.x - particleB.x;
  const dy = particleA.y - particleB.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function animate() {
  drawParticles();
  updateParticles();
  connectParticles();

  if(window.innerWidth < minScreenSize && particles.length !== reducedParticleCount){
    particles = [];
    createParticles();
  }

  requestAnimationFrame(animate);
}

canvas.width = window.innerWidth;
canvas.height = canvasHeight;

createParticles();
animate();