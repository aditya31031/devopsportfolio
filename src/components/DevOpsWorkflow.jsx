import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// --- Custom Animated Components ---

const AnimatedPlan = ({ isActive, color }) => (
    <svg viewBox="0 0 100 100" width="40" height="40" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="55" y="20" width="40" height="60" rx="4" />
        <line x1="75" y1="20" x2="75" y2="80" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="20" cy="35" r="8" />
        <path d="M5 65 Q20 50 35 65 V 80 H 5 Z" />
        <motion.rect
            width="12" height="8" rx="2" fill={color} opacity="0.8"
            initial={{ x: 20, y: 50, opacity: 0 }}
            animate={isActive ? { x: [20, 60], y: [50, 30], opacity: [1, 1, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, delay: 0.5 }}
        />
    </svg>
);

const AnimatedCode = ({ isActive, color }) => (
    <svg viewBox="0 0 100 100" width="40" height="40" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="15" width="80" height="70" rx="4" />
        <line x1="10" y1="30" x2="90" y2="30" />
        <circle cx="20" cy="22.5" r="2" fill={color} stroke="none" />
        <circle cx="28" cy="22.5" r="2" fill={color} stroke="none" />
        <circle cx="36" cy="22.5" r="2" fill={color} stroke="none" />
        <motion.line x1="20" y1="45" x2="50" y2="45" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: [0, 1] } : {}} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1, delay: 0.5 }} />
        <motion.line x1="20" y1="55" x2="70" y2="55" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: [0, 1] } : {}} transition={{ duration: 0.8, delay: 0.7, repeat: Infinity, repeatDelay: 1 }} />
        <motion.line x1="20" y1="65" x2="60" y2="65" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: [0, 1] } : {}} transition={{ duration: 0.6, delay: 0.9, repeat: Infinity, repeatDelay: 1 }} />
    </svg>
);

const AnimatedBuild = ({ isActive, color }) => (
    <svg viewBox="0 0 100 100" width="40" height="40" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <motion.rect x="30" y="55" width="40" height="25" rx="2" initial={{ y: -50, opacity: 0 }} animate={isActive ? { y: 55, opacity: 1 } : { y: 55, opacity: 1 }} transition={{ duration: 0.5, ease: "bounceOut", delay: 0.5 }} />
        <motion.rect x="30" y="30" width="40" height="25" rx="2" initial={{ y: -50, opacity: 0 }} animate={isActive ? { y: 30, opacity: 1 } : { y: 30, opacity: 1 }} transition={{ duration: 0.5, delay: 0.7, ease: "bounceOut" }} />
        <motion.rect x="30" y="5" width="40" height="25" rx="2" initial={{ y: -50, opacity: 0 }} animate={isActive ? { y: 5, opacity: 1 } : { y: 5, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9, ease: "bounceOut" }} />
    </svg>
);

const AnimatedTest = ({ isActive, color }) => (
    <svg viewBox="0 0 100 100" width="40" height="40" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10 H80 V90 H20 Z" />
        <line x1="35" y1="30" x2="70" y2="30" />
        <line x1="35" y1="50" x2="70" y2="50" />
        <line x1="35" y1="70" x2="70" y2="70" />
        <motion.path d="M25 30 L30 35 L40 25" stroke={color} strokeWidth="3" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.3, delay: 0.5 }} />
        <motion.path d="M25 50 L30 55 L40 45" stroke={color} strokeWidth="3" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.3, delay: 0.8 }} />
        <motion.path d="M25 70 L30 75 L40 65" stroke={color} strokeWidth="3" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.3, delay: 1.1 }} />
    </svg>
);

const AnimatedRelease = ({ isActive, color }) => (
    <svg viewBox="0 0 100 100" width="40" height="40" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 30 L50 15 L80 30 V70 L50 85 L20 70 Z" />
        <path d="M20 30 L50 45 L80 30" />
        <line x1="50" y1="45" x2="50" y2="85" />
        <motion.path d="M50 15 V 45" initial={{ scaleY: 0 }} animate={isActive ? { scaleY: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }} />
        <motion.rect x="35" y="55" width="30" height="20" rx="2" fill={color} initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 1.0, type: "spring" }} />
    </svg>
);

const AnimatedDeploy = ({ isActive, color }) => (
    <svg viewBox="0 0 100 100" width="40" height="40" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
            d="M50 20 L30 50 H40 V80 H60 V50 H70 Z"
            initial={{ y: 20 }}
            animate={isActive ? { y: [20, -10, -100] } : { y: 20 }}
            transition={isActive ? { duration: 1, times: [0, 0.4, 1], delay: 0.5 } : {}}
        />
        <path d="M20 80 H80" strokeWidth="4" />
    </svg>
);

const AnimatedOperate = ({ isActive, color }) => (
    <svg viewBox="0 0 100 100" width="40" height="40" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <motion.circle cx="35" cy="35" r="20" strokeDasharray="8 8" animate={isActive ? { rotate: 360 } : {}} transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 0.5 }} />
        <motion.circle cx="65" cy="65" r="20" strokeDasharray="8 8" animate={isActive ? { rotate: -360 } : {}} transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 0.5 }} />
        <circle cx="35" cy="35" r="5" fill={color} />
        <circle cx="65" cy="65" r="5" fill={color} />
    </svg>
);

const AnimatedMonitor = ({ isActive, color }) => (
    <svg viewBox="0 0 100 100" width="40" height="40" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="20" width="80" height="60" rx="4" />
        <motion.polyline
            points="15,50 30,50 40,30 50,70 60,50 85,50"
            fill="none"
            stroke={color}
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isActive ? { pathLength: 1, opacity: 1 } : { opacity: 0.3 }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        />
    </svg>
);

const AnimatedFeedback = ({ isActive, color }) => (
    <svg viewBox="0 0 100 100" width="40" height="40" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
            d="M20 20 H80 V60 H50 L30 80 V60 H20 Z"
            initial={{ scale: 0 }}
            animate={isActive ? { scale: 1 } : { scale: 1 }}
            transition={{ type: "spring", delay: 0.5 }}
        />
        <motion.circle cx="35" cy="40" r="3" fill={color} initial={{ opacity: 0 }} animate={isActive ? { opacity: [0, 1, 1, 0] } : {}} transition={{ delay: 0.7, repeat: Infinity, duration: 1.5 }} />
        <motion.circle cx="50" cy="40" r="3" fill={color} initial={{ opacity: 0 }} animate={isActive ? { opacity: [0, 1, 1, 0] } : {}} transition={{ delay: 0.9, repeat: Infinity, duration: 1.5 }} />
        <motion.circle cx="65" cy="40" r="3" fill={color} initial={{ opacity: 0 }} animate={isActive ? { opacity: [0, 1, 1, 0] } : {}} transition={{ delay: 1.1, repeat: Infinity, duration: 1.5 }} />
    </svg>
);

const steps = [
    { name: 'Plan', component: AnimatedPlan, color: '#6366f1' }, // Indigo
    { name: 'Code', component: AnimatedCode, color: '#a855f7' }, // Purple
    { name: 'Build', component: AnimatedBuild, color: '#ec4899' }, // Pink
    { name: 'Test', component: AnimatedTest, color: '#22c55e' }, // Green
    { name: 'Release', component: AnimatedRelease, color: '#f97316' }, // Orange
    { name: 'Deploy', component: AnimatedDeploy, color: '#ef4444' }, // Red
    { name: 'Operate', component: AnimatedOperate, color: '#3b82f6' }, // Blue
    { name: 'Monitor', component: AnimatedMonitor, color: '#06b6d4' }, // Cyan
    { name: 'Feedback', component: AnimatedFeedback, color: '#8b5cf6' }, // Violet
];

const DevOpsWorkflow = () => {
    const [activeStep, setActiveStep] = useState(0);

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 3000); // Slower interval to allow for travel + animation
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Auto-scroll logic for mobile
        const container = scrollContainerRef.current;
        const activeStepEl = document.getElementById(`step-${activeStep}`);

        if (container && activeStepEl) {
            const containerWidth = container.offsetWidth;
            const stepLeft = activeStepEl.offsetLeft;
            const stepWidth = activeStepEl.offsetWidth;

            // Calculate center position
            const scrollPos = stepLeft - (containerWidth / 2) + (stepWidth / 2);

            container.scrollTo({
                left: scrollPos,
                behavior: 'smooth'
            });
        }
    }, [activeStep]);

    const activeColor = steps[activeStep].color;

    // Create hard-stop gradient for segmented look
    const segmentWidth = 100 / (steps.length - 1);
    const gradientStops = steps.slice(0, steps.length - 1).map((step, index) => {
        const start = index * segmentWidth;
        const end = (index + 1) * segmentWidth;
        return `${step.color} ${start}%, ${step.color} ${end}%`;
    }).join(', ');
    const fullGradient = `linear-gradient(90deg, ${gradientStops})`;

    return (
        <section className="section devops-workflow-section">
            <div className="container">
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    DevOps Lifecycle
                </motion.h2>

                <div className="workflow-container" ref={scrollContainerRef}>
                    <div className="workflow-track">
                        {/* Connecting Line */}
                        <div className="workflow-line-container">
                            {/* Segmented Gradient Progress Bar */}
                            <motion.div
                                className="workflow-line-progress"
                                style={{
                                    width: '100%',
                                    background: fullGradient,
                                    boxShadow: `0 0 15px ${activeColor}`,
                                    originX: 0
                                }}
                                animate={{
                                    clipPath: `inset(0 ${100 - ((activeStep / (steps.length - 1)) * 100)}% 0 0)`
                                }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        </div>

                        {steps.map((step, index) => {
                            const isPassed = index <= activeStep;
                            const isCurrent = index === activeStep;
                            return (
                                <div key={index} id={`step-${index}`} className="workflow-step">
                                    <div
                                        className="step-icon-wrapper glass-card"
                                        style={{
                                            borderColor: isPassed ? step.color : 'var(--border-color)',
                                            color: isPassed ? step.color : 'var(--text-secondary)',
                                            boxShadow: isPassed ? `0 0 10px ${step.color}40` : 'none',
                                            background: 'var(--surface-1)'
                                        }}
                                    >
                                        <step.component isActive={isCurrent} color={isPassed ? step.color : 'currentColor'} />
                                    </div>
                                    <span
                                        className="step-label"
                                        style={{ color: isPassed ? step.color : 'var(--text-secondary)' }}
                                    >
                                        {step.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div >
        </section >
    );
};

export default DevOpsWorkflow;
