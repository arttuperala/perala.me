function calculateColorValue(value) {
    let sRGB = value / 255;
    return sRGB <= 0.04045 ? sRGB / 12.92 : ((sRGB + 0.055) / 1.055) ** 2.4;
}

function getForegroundColor(backgroundColor) {
    let colors = backgroundColor.map(calculateColorValue);
    let luminance = 0.2126 * colors[0] + 0.7152 * colors[1] + 0.0722 * colors[2];
    return luminance > 0.179 ? "#000" : "#fff";
}

function changeColors() {
    const color = Array.from({length: 3}, () => Math.floor(Math.random() * 256));
    const body = document.body;
    body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    body.style.color = getForegroundColor(color);
}

export default changeColors;
