import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 heatmapColor;
  uniform float heatmapIntensity;
  uniform vec3 heatmapCenter;
  uniform float heatmapRadius;
  uniform sampler2D baseColorMap;
  uniform float opacity;

  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vec4 baseColor = texture2D(baseColorMap, vUv);
    
    // Calculate distance from heatmap center
    float distance = length(vPosition - heatmapCenter);
    float heatFactor = 1.0 - smoothstep(0.0, heatmapRadius, distance);
    
    // Apply heat intensity, ensuring that heatmap only affects when heatFactor > 0
    heatFactor *= heatmapIntensity;
    
    // Mix base color with heatmap color, ensuring the base color is preserved when heatFactor is 0
    vec3 finalColor = mix(baseColor.rgb, heatmapColor, heatFactor * 0.6);
    
    gl_FragColor = vec4(finalColor, baseColor.a * opacity);
  }
`;

export const createHeatmapMaterial = (baseColorTexture: THREE.Texture) => {
	return new THREE.ShaderMaterial({
		uniforms: {
			baseColorMap: { value: baseColorTexture },
			heatmapColor: { value: new THREE.Color(1.0, 0.4, 0.0) }, // Orange color
			heatmapIntensity: { value: 1.0 }, // Default intensity
			heatmapCenter: { value: new THREE.Vector3(0, 50, 0) }, // Raise heatmap center to higher y-axis
			heatmapRadius: { value: 50.0 }, // Heatmap radius
			opacity: { value: 1.0 }, // Default opacity
		},
		vertexShader,
		fragmentShader,
		transparent: true,
	});
};
