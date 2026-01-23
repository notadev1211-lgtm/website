<script>
const snowCount = 60; // number of snowflakes
const container = document.querySelector('.animated-bg');

for (let i = 0; i < snowCount; i++) {
    const snow = document.createElement('div');
    snow.classList.add('snowflake');
    snow.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 4 + 2; // 2px to 6px
    snow.style.width = snow.style.height = size + 'px';
    snow.style.animationDuration = (Math.random() * 8 + 5) + 's'; // 5s to 13s
    snow.style.animationDelay = Math.random() * 10 + 's';
    container.appendChild(snow);
}
</script>
