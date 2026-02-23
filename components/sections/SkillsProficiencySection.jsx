'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaMicrochip, FaUpload } from 'react-icons/fa';

const skillCategories = [
	{
		category: 'Programming Languages',
		icon: '💻',
		accent: '#00fff0',
		skills: [
			{ name: 'C++', level: 85, color: 'from-cyan-400 to-blue-600' },
			{ name: 'Python', level: 90, color: 'from-yellow-400 to-cyan-500' },
			{ name: 'JavaScript', level: 80, color: 'from-yellow-400 to-orange-500' },
		]
	},
	{
		category: 'Web Technologies',
		icon: '🌐',
		accent: '#0066ff',
		skills: [
			{ name: 'React JS', level: 85, color: 'from-cyan-400 to-blue-500' },
			{ name: 'Next JS', level: 80, color: 'from-blue-400 to-indigo-600' },
			{ name: 'React Native', level: 75, color: 'from-blue-300 to-blue-600' },
			{ name: 'Tailwind CSS', level: 90, color: 'from-cyan-300 to-teal-500' }
		]
	},
	{
		category: 'Design & Tools',
		icon: '🎨',
		accent: '#ff00aa',
		skills: [
			{ name: 'Figma', level: 95, color: 'from-purple-400 to-pink-500' },
			{ name: 'UI/UX Design', level: 90, color: 'from-pink-400 to-red-500' },
			{ name: 'Git & GitHub', level: 85, color: 'from-gray-400 to-gray-600' },
			{ name: 'VS Code', level: 90, color: 'from-blue-400 to-blue-700' }
		]
	},
	{
		category: 'Embedded Systems',
		icon: '⚡',
		accent: '#ffaa00',
		skills: [
			{ name: 'Arduino', level: 90, color: 'from-teal-400 to-cyan-600' },
			{ name: 'Raspberry Pi', level: 85, color: 'from-red-400 to-pink-600' },
			{ name: 'ESP32', level: 80, color: 'from-blue-400 to-indigo-600' },
			{ name: 'Nvidia Jetson Nano', level: 75, color: 'from-green-400 to-emerald-600' },
			{ name: 'Embedded C', level: 80, color: 'from-orange-400 to-red-600' },
			{ name: 'IoT Development', level: 90, color: 'from-purple-400 to-violet-600' },
			{ name: 'Sensor Integration', level: 100, color: 'from-yellow-400 to-orange-600' }
		]
	}
];

const corners = [
	{ top: 6, left: 6, bw: '1px 0 0 1px' },
	{ top: 6, right: 6, bw: '1px 1px 0 0' },
	{ bottom: 6, left: 6, bw: '0 0 1px 1px' },
	{ bottom: 6, right: 6, bw: '0 1px 1px 0' },
];

export default function SkillsProficiencySection({ sectionRef }) {
	const [selectedCategory, setSelectedCategory] = useState(0);
	const [isCompiling, setIsCompiling] = useState(false);
	const [uploadProgress, setUploadProgress] = useState(0);
	const [typedCode, setTypedCode] = useState('');
	const [currentCharIndex, setCurrentCharIndex] = useState(0);
	const [compileStatus, setCompileStatus] = useState('idle');
	const [consoleOutput, setConsoleOutput] = useState([{ text: '> SYSTEM READY. Awaiting upload...', type: 'idle' }]);
	const codeScrollRef = useRef(null);

	const activeAccent = skillCategories[selectedCategory].accent;

	const arduinoCode = `// SKILLS_PROFICIENCY_MONITOR.ino
// MODULE: ${skillCategories[selectedCategory].category}
// STATUS: ACTIVE | BAUD: 9600

#include <SkillsLib.h>

void setup() {
  Serial.begin(9600);
  initSkillMatrix();
}

void loop() {
  broadcastSkills();
  delay(1000);
}

void initSkillMatrix() {
${skillCategories[selectedCategory].skills.map((skill, idx) => `  int s${idx + 1} = ${skill.level}; // ${skill.name}`).join('\n')}
}

void broadcastSkills() {
${skillCategories[selectedCategory].skills.map((skill, idx) =>
	`  Serial.print("[${skill.name}]: ");
  Serial.println(s${idx + 1});`).join('\n')}
}`;

	useEffect(() => {
		setTypedCode('');
		setCurrentCharIndex(0);
		setCompileStatus('idle');
		setConsoleOutput([{ text: '> SYSTEM READY. Awaiting upload...', type: 'idle' }]);
	}, [selectedCategory]);

	useEffect(() => {
		if (currentCharIndex < arduinoCode.length && compileStatus === 'idle') {
			const timer = setTimeout(() => {
				setTypedCode(arduinoCode.slice(0, currentCharIndex + 1));
				setCurrentCharIndex(prev => prev + 1);
				if (codeScrollRef.current) {
					codeScrollRef.current.scrollTop = codeScrollRef.current.scrollHeight;
				}
			}, 18);
			return () => clearTimeout(timer);
		}
	}, [currentCharIndex, arduinoCode, compileStatus]);

	const handleCompile = async () => {
		if (compileStatus !== 'idle') return;

		setCompileStatus('compiling');
		setConsoleOutput([{ text: '> Initializing compiler...', type: 'info' }]);
		await new Promise(r => setTimeout(r, 800));

		setCompileStatus('checking');
		setConsoleOutput(prev => [...prev, { text: '> Verifying syntax matrix...', type: 'info' }]);
		await new Promise(r => setTimeout(r, 700));

		if (Math.random() > 0.6) {
			setConsoleOutput(prev => [...prev, { text: '⚠ WARN: Redundant variable detected', type: 'warning' }]);
			await new Promise(r => setTimeout(r, 500));
			setConsoleOutput(prev => [...prev, { text: '✓ Warning patched successfully', type: 'success' }]);
			await new Promise(r => setTimeout(r, 300));
		}

		setCompileStatus('linking');
		setConsoleOutput(prev => [...prev, { text: '> Linking neural libraries...', type: 'info' }]);
		await new Promise(r => setTimeout(r, 600));
		setConsoleOutput(prev => [...prev, { text: '✓ Compilation successful [0 errors]', type: 'success' }]);
		await new Promise(r => setTimeout(r, 400));

		setCompileStatus('uploading');
		setIsCompiling(true);
		setUploadProgress(0);
		setConsoleOutput(prev => [...prev, { text: '> Uploading to Arduino Uno...', type: 'upload' }]);

		const interval = setInterval(() => {
			setUploadProgress(prev => {
				if (prev >= 100) {
					clearInterval(interval);
					setCompileStatus('success');
					setConsoleOutput(prevOut => [...prevOut,
						{ text: '✓ Sketch: 2,344 bytes (7%) of storage', type: 'success' },
						{ text: '✓ Variables: 234 bytes (11%) of memory', type: 'success' },
						{ text: '✓ UPLOAD COMPLETE. Device online.', type: 'complete' }
					]);
					setTimeout(() => {
						setIsCompiling(false);
						setUploadProgress(0);
						setCompileStatus('idle');
						setTimeout(() => {
							setConsoleOutput([{ text: '> SYSTEM READY. Awaiting upload...', type: 'idle' }]);
						}, 3000);
					}, 1200);
					return 100;
				}
				return prev + 4;
			});
		}, 40);
	};

	const renderLine = (line) => {
		const trimmed = line.trim();

		if (trimmed.startsWith('//')) {
			return <span style={{ color: 'rgba(0,255,240,0.35)', fontStyle: 'italic' }}>{line}</span>;
		}
		if (trimmed.startsWith('#')) {
			return <span style={{ color: '#ff00aa' }}>{line}</span>;
		}
		const keywords = ['void', 'int', 'unsigned', 'long', 'float', 'char', 'bool', 'return'];
		const functions = ['setup', 'loop', 'initSkillMatrix', 'broadcastSkills', 'Serial', 'begin', 'print', 'println', 'delay'];

		if (keywords.some(k => new RegExp(`\\b${k}\\b`).test(trimmed))) {
			return <span style={{ color: '#ffaa00' }}>{line}</span>;
		}
		if (functions.some(k => line.includes(k))) {
			return <span style={{ color: '#00fff0' }}>{line}</span>;
		}
		if (trimmed.includes('"') || trimmed.includes("'")) {
			return <span style={{ color: '#00ff88' }}>{line}</span>;
		}
		if (/=\s*\d/.test(line)) {
			return <span style={{ color: '#ff6b6b' }}>{line}</span>;
		}
		return <span style={{ color: 'rgba(160,196,212,0.85)' }}>{line}</span>;
	};

	return (
		<motion.section
			ref={sectionRef}
			id="skills-proficiency"
			className="pt-4 pb-10 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, delay: 0.3 }}
		>
			{/* Section Header */}
			<div className="text-center mb-12">
				<p className="text-xs tracking-[0.3em] mb-2 opacity-50"
					style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
					// SKILLS_PROFICIENCY.DAT
				</p>
				<h2 className="text-3xl font-bold"
					style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
					Skills Proficiency
				</h2>
			</div>

			<div className="max-w-7xl mx-auto">
				{/* Category Tabs */}
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
					{skillCategories.map((cat, idx) => (
						<motion.button
							key={idx}
							onClick={() => setSelectedCategory(idx)}
							whileHover={{ scale: 1.02, y: -2 }}
							whileTap={{ scale: 0.97 }}
							className="relative group overflow-hidden"
						>
							{selectedCategory === idx && (
								<div className="absolute -inset-0.5 rounded-xl blur-md opacity-40"
									style={{ background: cat.accent }} />
							)}
							<div className="relative p-4 rounded-xl transition-all"
								style={{
									background: selectedCategory === idx ? `${cat.accent}10` : 'rgba(4,10,20,0.85)',
									border: `1px solid ${selectedCategory === idx ? cat.accent : 'rgba(0,255,240,0.12)'}`,
									backdropFilter: 'blur(12px)',
									boxShadow: selectedCategory === idx ? `0 0 20px ${cat.accent}20` : 'none',
								}}>
								{selectedCategory === idx && (
									<div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
										style={{ background: cat.accent, boxShadow: `0 0 8px ${cat.accent}` }} />
								)}
								<div className="text-3xl mb-2">{cat.icon}</div>
								<div className="text-[11px] font-semibold tracking-wider"
									style={{
										fontFamily: 'Share Tech Mono, monospace',
										color: selectedCategory === idx ? cat.accent : 'rgba(160,196,212,0.7)',
									}}>
									{cat.category.toUpperCase()}
								</div>
							</div>
						</motion.button>
					))}
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{/* Arduino IDE Panel */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<div className="relative rounded-xl overflow-hidden shadow-2xl flex flex-col"
							style={{
								height: '560px',
								background: 'rgba(2,6,12,0.98)',
								border: '1px solid rgba(0,255,240,0.15)',
							}}>
							{/* Top accent bar */}
							<div className="h-0.5 w-full"
								style={{ background: `linear-gradient(90deg, ${activeAccent}, #0066ff, #ff00aa)`, boxShadow: `0 0 10px ${activeAccent}` }} />

							{/* Toolbar */}
							<div className="px-4 py-2.5 flex items-center justify-between"
								style={{ background: 'rgba(2,6,12,0.98)', borderBottom: '1px solid rgba(0,255,240,0.1)' }}>
								<div className="flex items-center gap-3">
									<div className="flex gap-1.5 mr-1">
										{['#ff5f57', '#ffbd2e', '#28c840'].map((c, i) => (
											<div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
										))}
									</div>
									<FaMicrochip className="w-3.5 h-3.5" style={{ color: activeAccent }} />
									<span className="text-[10px] tracking-widest opacity-60"
										style={{ fontFamily: 'Share Tech Mono, monospace', color: activeAccent }}>
										ARDUINO_IDE v2.3.7
									</span>
								</div>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={handleCompile}
									disabled={compileStatus !== 'idle' || currentCharIndex < arduinoCode.length}
									className="flex items-center gap-1.5 px-3 py-1 rounded text-[10px] font-bold tracking-widest transition-all"
									style={{
										fontFamily: 'Orbitron, monospace',
										background: (compileStatus === 'idle' && currentCharIndex >= arduinoCode.length)
											? `${activeAccent}15` : 'rgba(255,255,255,0.03)',
										border: `1px solid ${(compileStatus === 'idle' && currentCharIndex >= arduinoCode.length) ? activeAccent : 'rgba(255,255,255,0.1)'}`,
										color: (compileStatus === 'idle' && currentCharIndex >= arduinoCode.length)
											? activeAccent : 'rgba(255,255,255,0.25)',
										cursor: (compileStatus === 'idle' && currentCharIndex >= arduinoCode.length) ? 'pointer' : 'not-allowed',
										boxShadow: (compileStatus === 'idle' && currentCharIndex >= arduinoCode.length)
											? `0 0 12px ${activeAccent}20` : 'none',
									}}>
									<FaUpload className="w-2.5 h-2.5" />
									{compileStatus === 'idle' ? 'UPLOAD' : compileStatus === 'uploading' ? 'UPLOADING...' : 'COMPILING...'}
								</motion.button>
							</div>

							{/* File tab */}
							<div className="px-3 py-1"
								style={{ background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid rgba(0,255,240,0.08)' }}>
								<div className="inline-flex items-center gap-2 px-3 py-1 rounded-t text-[10px]"
									style={{ background: 'rgba(0,255,240,0.06)', border: `1px solid ${activeAccent}25`, borderBottom: 'none', color: activeAccent, fontFamily: 'Share Tech Mono, monospace' }}>
									<span>SkillsMonitor.ino</span>
									{currentCharIndex < arduinoCode.length && (
										<motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }}
											className="w-1.5 h-1.5 rounded-full"
											style={{ background: '#ffaa00', boxShadow: '0 0 4px #ffaa00', display: 'inline-block' }} />
									)}
								</div>
							</div>

							{/* Code editor */}
							<div ref={codeScrollRef}
								className="flex-1 overflow-y-auto"
								style={{
									background: 'rgba(2,4,10,0.95)',
									backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 17px,rgba(0,255,240,0.015) 17px,rgba(0,255,240,0.015) 18px)',
								}}>
								<div className="flex min-h-full">
									{/* Line numbers */}
									<div className="flex-shrink-0 px-3 py-3 text-right select-none"
										style={{ minWidth: '40px', borderRight: '1px solid rgba(0,255,240,0.08)', background: 'rgba(0,0,0,0.3)' }}>
										{typedCode.split('\n').map((_, i) => (
											<div key={i} className="text-[10px] leading-[18px]"
												style={{ fontFamily: 'Share Tech Mono, monospace', color: 'rgba(0,255,240,0.2)' }}>
												{i + 1}
											</div>
										))}
									</div>
									{/* Code content */}
									<div className="flex-1 p-3 font-mono text-[11px] leading-[18px]">
										<pre>
											{typedCode.split('\n').map((line, idx) => (
												<div key={idx}>{renderLine(line)}</div>
											))}
											{currentCharIndex < arduinoCode.length && (
												<motion.span
													animate={{ opacity: [1, 0] }}
													transition={{ duration: 0.5, repeat: Infinity }}
													className="inline-block w-2 h-[13px] align-middle"
													style={{ background: activeAccent, boxShadow: `0 0 6px ${activeAccent}`, marginLeft: '1px' }}
												/>
											)}
										</pre>
									</div>
								</div>
							</div>

							{/* Upload progress */}
							{isCompiling && (
								<div className="px-4 py-2" style={{ borderTop: '1px solid rgba(0,255,240,0.08)', background: 'rgba(0,0,0,0.5)' }}>
									<div className="flex items-center gap-3">
										<span className="text-[9px] tracking-widest" style={{ fontFamily: 'Share Tech Mono, monospace', color: activeAccent }}>UPLOADING</span>
										<div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
											<motion.div
												initial={{ width: 0 }}
												animate={{ width: `${uploadProgress}%` }}
												className="h-full rounded-full relative overflow-hidden"
												style={{ background: `linear-gradient(90deg, ${activeAccent}80, ${activeAccent})`, boxShadow: `0 0 8px ${activeAccent}` }}>
												<motion.div
													animate={{ x: ['-100%', '200%'] }}
													transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
													className="absolute inset-0"
													style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}
												/>
											</motion.div>
										</div>
										<span className="text-[9px] tracking-wider" style={{ fontFamily: 'Share Tech Mono, monospace', color: activeAccent }}>{uploadProgress}%</span>
									</div>
								</div>
							)}

							{/* Console output */}
							<div className="px-4 py-2.5 h-[108px] overflow-y-auto"
								style={{ background: 'rgba(0,0,0,0.7)', borderTop: '1px solid rgba(0,255,240,0.1)' }}>
								<div className="text-[9px] tracking-widest mb-1.5 opacity-40"
									style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
									OUTPUT
								</div>
								<div className="space-y-0.5">
									{consoleOutput.map((line, idx) => (
										<motion.div key={idx} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
											className="text-[10px]"
											style={{
												fontFamily: 'Share Tech Mono, monospace',
												color:
													line.type === 'success' ? '#00ff88' :
													line.type === 'warning' ? '#ffaa00' :
													line.type === 'error' ? '#ff3333' :
													line.type === 'upload' ? '#0066ff' :
													line.type === 'complete' ? activeAccent :
													line.type === 'info' ? 'rgba(0,255,240,0.6)' :
													'rgba(160,196,212,0.4)',
												textShadow: line.type === 'complete' ? `0 0 8px ${activeAccent}` : 'none',
											}}>
											{line.text}
										</motion.div>
									))}
								</div>
							</div>

							{/* Status bar */}
							<div className="px-4 py-1 flex items-center justify-between"
								style={{ background: `${activeAccent}12`, borderTop: `1px solid ${activeAccent}25` }}>
								<span className="text-[9px] tracking-widest" style={{ fontFamily: 'Share Tech Mono, monospace', color: activeAccent }}>Arduino Uno</span>
								<motion.span
									animate={{ opacity: [1, 0.5, 1] }}
									transition={{ duration: 2, repeat: Infinity }}
									className="text-[9px] tracking-widest"
									style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00ff88' }}>
									● COM3 | 9600 BAUD
								</motion.span>
							</div>
						</div>
					</motion.div>

					{/* Skills Panel */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<div className="relative rounded-xl overflow-hidden h-full flex flex-col"
							style={{
								background: 'rgba(4,10,20,0.9)',
								border: `1px solid ${activeAccent}22`,
								backdropFilter: 'blur(14px)',
							}}>
							{/* Top accent */}
							<div className="h-0.5"
								style={{ background: `linear-gradient(90deg, ${activeAccent}, transparent)`, boxShadow: `0 0 8px ${activeAccent}` }} />

							{/* Scanlines */}
							<div className="absolute inset-0 pointer-events-none opacity-15"
								style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.012) 3px,rgba(255,255,255,0.012) 4px)' }} />

							{/* Corner brackets */}
							{corners.map((s, i) => (
								<div key={i} className="absolute w-3 h-3"
									style={{ top: s.top, left: s.left, right: s.right, bottom: s.bottom, borderStyle: 'solid', borderWidth: s.bw, borderColor: `${activeAccent}40` }} />
							))}

							<div className="relative p-6 flex flex-col h-full">
								{/* Header */}
								<div className="flex items-center gap-3 mb-6">
									<div className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
										style={{ background: `${activeAccent}10`, border: `1px solid ${activeAccent}30` }}>
										{skillCategories[selectedCategory].icon}
									</div>
									<div>
										<p className="text-[9px] tracking-[0.25em] opacity-50 mb-0.5"
											style={{ fontFamily: 'Share Tech Mono, monospace', color: activeAccent }}>
											// ACTIVE_MODULE
										</p>
										<h3 className="font-bold tracking-wide"
											style={{ fontFamily: 'Orbitron, monospace', fontSize: '13px', color: activeAccent, textShadow: `0 0 12px ${activeAccent}50` }}>
											{skillCategories[selectedCategory].category.toUpperCase()}
										</h3>
									</div>
								</div>

								{/* Skill bars */}
								<div className="space-y-4 flex-1">
									{skillCategories[selectedCategory].skills.map((skill, idx) => (
										<motion.div
											key={`${selectedCategory}-${idx}`}
											initial={{ opacity: 0, x: -15 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: idx * 0.08 }}
										>
											<div className="flex items-center justify-between mb-1.5">
												<span className="text-[11px] tracking-wider"
													style={{ fontFamily: 'Share Tech Mono, monospace', color: 'rgba(160,196,212,0.85)' }}>
													{skill.name}
												</span>
												<span className="text-[11px] font-bold"
													style={{ fontFamily: 'Orbitron, monospace', color: activeAccent }}>
													{skill.level}%
												</span>
											</div>

											<div className="h-2 rounded-full overflow-hidden"
												style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${activeAccent}18` }}>
												<motion.div
													initial={{ width: 0 }}
													animate={{ width: `${skill.level}%` }}
													transition={{ duration: 1, delay: idx * 0.08, ease: 'easeOut' }}
													className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
													style={{ boxShadow: `0 0 6px ${activeAccent}40` }}>
													<motion.div
														animate={{ x: ['-100%', '200%'] }}
														transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
														className="absolute inset-0"
														style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)' }}
													/>
												</motion.div>
											</div>
										</motion.div>
									))}
								</div>

								{/* Stats footer */}
								<div className="mt-6 pt-5 grid grid-cols-2 gap-4"
									style={{ borderTop: `1px solid ${activeAccent}18` }}>
									<motion.div
										whileHover={{ scale: 1.04 }}
										className="text-center p-3 rounded-lg"
										style={{ background: `${activeAccent}06`, border: `1px solid ${activeAccent}18` }}>
										<div className="text-[9px] tracking-widest opacity-50 mb-1"
											style={{ fontFamily: 'Share Tech Mono, monospace', color: activeAccent }}>
											AVG_PROFICIENCY
										</div>
										<div className="text-2xl font-bold"
											style={{ fontFamily: 'Orbitron, monospace', color: activeAccent, textShadow: `0 0 10px ${activeAccent}` }}>
											{Math.round(
												skillCategories[selectedCategory].skills.reduce((acc, s) => acc + s.level, 0) /
												skillCategories[selectedCategory].skills.length
											)}%
										</div>
									</motion.div>
									<motion.div
										whileHover={{ scale: 1.04 }}
										className="text-center p-3 rounded-lg"
										style={{ background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.18)' }}>
										<div className="text-[9px] tracking-widest opacity-50 mb-1"
											style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00ff88' }}>
											SKILLS_LOADED
										</div>
										<div className="text-2xl font-bold"
											style={{ fontFamily: 'Orbitron, monospace', color: '#00ff88', textShadow: '0 0 10px rgba(0,255,136,0.5)' }}>
											{String(skillCategories[selectedCategory].skills.length).padStart(2, '0')}
										</div>
									</motion.div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}