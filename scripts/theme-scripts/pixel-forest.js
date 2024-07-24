window.onload = function() {
    console.log('Script initialized!');
    setTimeout(function() {
        const svgNS = "http://www.w3.org/2000/svg";
        const content = document.getElementById('content');
        if (!content) {
            console.error('#content element not found.');
            return;
        }

        const pixelSize = 4;
        const spreadDistance = 44;

        function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function calculateDensity(distance) {
            return Math.max(0.1, 1 - (Math.pow(distance, 3) / Math.pow(spreadDistance, 3)));
        }

        function generateFuzzyOutline() {
            const rect = content.getBoundingClientRect();
            const rectX = rect.left;
            const rectY = rect.top;
            const rectWidth = rect.width;
            const rectHeight = rect.height;

            const svgCanvas = document.createElementNS(svgNS, 'svg');
            svgCanvas.setAttribute('width', rectWidth + 2 * spreadDistance);
            svgCanvas.setAttribute('height', rectHeight + 2 * spreadDistance);
            svgCanvas.setAttribute('class', 'svg-background');
            svgCanvas.style.position = 'absolute';
            svgCanvas.style.left = `${rectX - spreadDistance}px`;
            svgCanvas.style.top = `${rectY - spreadDistance}px`;
            document.body.appendChild(svgCanvas);

            for (let x = rectX - spreadDistance; x <= rectX + rectWidth + spreadDistance; x += pixelSize) {
                for (let y = rectY - spreadDistance; y <= rectY + rectHeight + spreadDistance; y += pixelSize) {
                    if (x >= rectX && x <= rectX + rectWidth - pixelSize && y >= rectY && y <= rectY + rectHeight - pixelSize) {
                        continue;
                    }

                    const closestX = Math.max(rectX, Math.min(x, rectX + rectWidth));
                    const closestY = Math.max(rectY, Math.min(y, rectY + rectHeight));
                    const distance = Math.sqrt(Math.pow(x - closestX, 2) + Math.pow(y - closestY, 2));
                    const density = calculateDensity(distance);

                    if (Math.random() < density) {
                        const pixel = document.createElementNS(svgNS, 'rect');
                        pixel.setAttribute('class', 'pixel');
                        pixel.setAttribute('fill', '#343F44');
                        pixel.setAttribute('x', x - rectX + spreadDistance);
                        pixel.setAttribute('y', y - rectY + spreadDistance);
                        pixel.setAttribute('width', pixelSize);
                        pixel.setAttribute('height', pixelSize);
                        svgCanvas.appendChild(pixel);
                    }
                }
            }
        }

        generateFuzzyOutline();
    }, 100);
};
