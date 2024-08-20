import React, { useEffect, useRef } from "react";
import styles from "./Skillset.module.css";

export const Skillset = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Adjust these values to increase the size of the radar chart
        const canvasWidth = 800;  // Increase canvas width
        const canvasHeight = 800; // Increase canvas height
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 200;  // Increase radius to scale up the radar chart
        const dataPoints = [90, 85, 80, 75, 70, 85, 80];
        const labels = ['HTML & CSS', 'JavaScript', 'Git', 'AWS', 'Database', 'Java', 'Rest API'];
        const labelGap = 20;  // Adjust this value if needed

        // Draw the background grid
        const numGridLines = 5;  // Number of concentric circles (including the outermost one)
        for (let i = 1; i <= numGridLines; i++) {
            const gridRadius = (radius / numGridLines) * i;
            ctx.beginPath();
            ctx.arc(centerX, centerY, gridRadius, 0, 2 * Math.PI);
            ctx.strokeStyle = '#ddd'; // Color for the grid lines
            ctx.lineWidth = 1; // Line width for grid lines
            ctx.stroke();
        }

        // Draw the axes
        for (let i = 0; i < dataPoints.length; i++) {
            const angle = (Math.PI / 2) + (2 * Math.PI * i / dataPoints.length);
            
            // Increase the radius slightly for the label position
            const labelRadius = radius + labelGap;  // Adjust this value as needed
            const x = centerX + labelRadius * Math.cos(angle);
            const y = centerY - labelRadius * Math.sin(angle);
        
            // Draw axis line
            const lineX = centerX + radius * Math.cos(angle);
            const lineY = centerY - radius * Math.sin(angle);
        
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(lineX, lineY);
            ctx.strokeStyle = '#888'; // Color for axis lines
            ctx.lineWidth = 2;  // Increase line width for better visibility
            ctx.stroke();
        
            // Draw label with gap adjustment
            ctx.fillStyle = '#000';
            ctx.font = '14px Arial';  // Increase font size if needed
        
            // Add extra gap for labels on the left side (e.g., from the left half of the chart)
            const isLeftSide = angle > Math.PI;  // This assumes labels on the left side
            const adjustedX = isLeftSide ? x - 30 : x;  // Adjust this value to add gap on left side
        
            ctx.fillText(labels[i], adjustedX, y);
        }

        // Draw the radar chart area
        ctx.beginPath();
        for (let i = 0; i < dataPoints.length; i++) {
            const angle = (Math.PI / 2) + (2 * Math.PI * i / dataPoints.length);
            const x = centerX + (dataPoints[i] / 100) * radius * Math.cos(angle);
            const y = centerY - (dataPoints[i] / 100) * radius * Math.sin(angle);
            ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(104, 43, 215, 0.3)';
        ctx.fill();
        ctx.strokeStyle = '#acb7ae'; // Outline color for the data area
        ctx.lineWidth = 2;  // Ensure outline is visible
        ctx.stroke(); // Draw only the outline without filling

    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Skillset</h2>
            <div className={styles.content}>
                <div style={{ textAlign: 'center' }}>
                    <canvas ref={canvasRef} width="800" height="800" style={{ border: '1px solid #d3d3d3' }}></canvas>
                </div>
            </div>
        </div>
    );
};
