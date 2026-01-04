'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaMicrochip, FaUpload } from 'react-icons/fa';

const skillCategories = [
	{
		category: 'Programming Languages',
		icon: '💻',
		skills: [
			{ name: 'C++', level: 85, color: 'from-blue-500 to-blue-700' },
			{ name: 'Python', level: 90, color: 'from-yellow-500 to-blue-500' },
			{ name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-600' },
		]
	},
	{
		category: 'Web Technologies',
		icon: '🌐',
		skills: [
			{ name: 'React JS', level: 85, color: 'from-cyan-500 to-blue-600' },
			{ name: 'Next JS', level: 80, color: 'from-gray-800 to-gray-900' },
			{ name: 'React Native', level: 75, color: 'from-blue-400 to-blue-600' },
			{ name: 'Tailwind CSS', level: 90, color: 'from-cyan-400 to-teal-500' }
		]
	},
	{
		category: 'Design & Tools',
		icon: '🎨',
		skills: [
			{ name: 'Figma', level: 95, color: 'from-purple-500 to-pink-500' },
			{ name: 'UI/UX Design', level: 90, color: 'from-pink-500 to-red-500' },
			{ name: 'Git & GitHub', level: 85, color: 'from-gray-700 to-gray-900' },
			{ name: 'VS Code', level: 90, color: 'from-blue-500 to-blue-700' }
		]
	},
	{
		category: 'Embedded Systems',
		icon: '⚡',
		skills: [
			{ name: 'Arduino', level: 90, color: 'from-teal-500 to-cyan-600' },
			{ name: 'Raspberry Pi', level: 85, color: 'from-red-500 to-pink-600' },
			{ name: 'ESP32', level: 80, color: 'from-blue-500 to-indigo-600' },
			{ name: 'Nvidia Jetson Nano', level: 75, color: 'from-green-500 to-emerald-600' },
			{ name: 'Embedded C', level: 80, color: 'from-orange-500 to-red-600' },
			{ name: 'IoT Development', level: 90, color: 'from-purple-500 to-violet-600' },
			{ name: 'Sensor Integration', level: 100, color: 'from-yellow-500 to-orange-600' }
		]
	}
];

export default function SkillsProficiencySection({ sectionRef }) {
	const [selectedCategory, setSelectedCategory] = useState(0);
	const [isCompiling, setIsCompiling] = useState(false);
	const [uploadProgress, setUploadProgress] = useState(0);
	const [typedCode, setTypedCode] = useState('');
	const [currentCharIndex, setCurrentCharIndex] = useState(0);
	const [compileStatus, setCompileStatus] = useState('idle'); // idle, compiling, checking, linking, uploading, success, error
	const [consoleOutput, setConsoleOutput] = useState([]);
	const codeScrollRef = useRef(null);

	const arduinoCode = `// Skills Proficiency Monitor
// Category: ${skillCategories[selectedCategory].category}

void setup() {
  Serial.begin(9600);
  initializeSkills();
}

void loop() {
  displaySkills();
  delay(1000);
}

void initializeSkills() {
${skillCategories[selectedCategory].skills.map((skill, idx) => `  int s${idx + 1} = ${skill.level}; // ${skill.name}`).join('\n')}
}

void displaySkills() {
${skillCategories[selectedCategory].skills.map((skill, idx) => `  Serial.print("${skill.name}: ");
  Serial.println(s${idx + 1});`).join('\n')}
}`;

	// Auto-type code effect
	useEffect(() => {
		setTypedCode('');
		setCurrentCharIndex(0);
		setCompileStatus('idle');
		setConsoleOutput([{ text: 'Ready to compile.', type: 'idle' }]);
	}, [selectedCategory]);

	useEffect(() => {
		if (currentCharIndex < arduinoCode.length && compileStatus === 'idle') {
			const timer = setTimeout(() => {
				setTypedCode(arduinoCode.slice(0, currentCharIndex + 1));
				setCurrentCharIndex(prev => prev + 1);
				
				// Auto-scroll to bottom
				if (codeScrollRef.current) {
					codeScrollRef.current.scrollTop = codeScrollRef.current.scrollHeight;
				}
			}, 20); // Typing speed
			return () => clearTimeout(timer);
		}
	}, [currentCharIndex, arduinoCode, compileStatus]);

	const handleCompile = async () => {
		if (compileStatus !== 'idle') return;
		
		// Stage 1: Compiling
		setCompileStatus('compiling');
		setConsoleOutput([{ text: 'Compiling sketch...', type: 'info' }]);
		
		await new Promise(resolve => setTimeout(resolve, 1000));
		
		// Stage 2: Checking syntax
		setCompileStatus('checking');
		setConsoleOutput(prev => [...prev, { text: 'Checking syntax...', type: 'info' }]);
		
		await new Promise(resolve => setTimeout(resolve, 800));
		
		// Simulate a warning (optional)
		const hasWarning = Math.random() > 0.7;
		if (hasWarning) {
			setConsoleOutput(prev => [...prev, { text: '⚠ Warning: Variable s1 may be unused', type: 'warning' }]);
			await new Promise(resolve => setTimeout(resolve, 600));
			setConsoleOutput(prev => [...prev, { text: '✓ Warning resolved - variable is used', type: 'success' }]);
			await new Promise(resolve => setTimeout(resolve, 400));
		}
		
		// Stage 3: Linking
		setCompileStatus('linking');
		setConsoleOutput(prev => [...prev, { text: 'Linking libraries...', type: 'info' }]);
		
		await new Promise(resolve => setTimeout(resolve, 600));
		setConsoleOutput(prev => [...prev, { text: '✓ Sketch compiled successfully', type: 'success' }]);
		
		await new Promise(resolve => setTimeout(resolve, 400));
		
		// Stage 4: Uploading
		setCompileStatus('uploading');
		setIsCompiling(true);
		setUploadProgress(0);
		setConsoleOutput(prev => [...prev, { text: 'Uploading to Arduino Uno...', type: 'upload' }]);
		
		const interval = setInterval(() => {
			setUploadProgress(prev => {
				if (prev >= 100) {
					clearInterval(interval);
					setCompileStatus('success');
					setConsoleOutput(prevOut => [...prevOut, 
						{ text: '✓ Sketch: 2,344 bytes (7%) storage', type: 'success' },
						{ text: '✓ Variables: 234 bytes (11%) memory', type: 'success' },
						{ text: '✓ Upload complete!', type: 'complete' }
					]);
					setTimeout(() => {
						setIsCompiling(false);
						setUploadProgress(0);
						setCompileStatus('idle');
						// Reset after a while
						setTimeout(() => {
							setConsoleOutput([{ text: 'Ready to compile.', type: 'idle' }]);
						}, 3000);
					}, 1000);
					return 100;
				}
				return prev + 5;
			});
		}, 50);
	};

	// Syntax highlighting function
	const getSyntaxColor = (text, index) => {
		const line = typedCode.slice(0, index + 1).split('\n').pop() || '';
		
		if (text.match(/^\/\//)) return 'text-gray-500'; // Comments
		if (['void', 'int', 'unsigned', 'long', 'float', 'char'].some(k => line.includes(k))) {
			if (text.match(/void|int|unsigned|long|float|char/)) return 'text-[#D19A66]';
		}
		if (['Serial', 'pinMode', 'digitalWrite', 'delay', 'begin', 'print', 'println'].some(k => text.includes(k))) {
			return 'text-[#56B6C2]';
		}
		if (text.match(/["']/)) return 'text-[#98C379]';
		if (text.match(/\d+/)) return 'text-[#D19A66]';
		if (['setup', 'loop', 'initializeSkills', 'displaySkills'].some(k => text.includes(k))) {
			return 'text-[#C678DD]';
		}
		return 'text-gray-300';
	};

	return (
		<motion.section
			ref={sectionRef}
			id="skills-proficiency"
			className="pt-4 pb-10 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, delay: 0.55 }}
		>
			<h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10 text-center">
				Skills Proficiency
			</h2>

			<div className="max-w-7xl mx-auto">
				{/* Category Tabs - ONLY ONE SET */}
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
					{skillCategories.map((cat, idx) => (
						<motion.button
							key={idx}
							onClick={() => setSelectedCategory(idx)}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className={`p-4 rounded-xl border-2 transition-all ${
								selectedCategory === idx
									? 'bg-[#00979D]/20 border-[#00979D] shadow-lg shadow-[#00979D]/20'
									: 'bg-white/5 border-white/10 hover:border-white/30'
							}`}
						>
							<div className="text-3xl mb-2">{cat.icon}</div>
							<div className="text-xs font-semibold">{cat.category}</div>
						</motion.button>
					))}
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{/* Arduino IDE Interface */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<div className="bg-[#2C3E50] rounded-lg overflow-hidden shadow-2xl border border-gray-700 flex flex-col" style={{ height: '550px' }}>
							{/* Arduino IDE Toolbar */}
							<div className="bg-[#1E2D3D] px-3 py-2 flex items-center justify-between border-b border-gray-700">
								<div className="flex items-center gap-2">
									<FaMicrochip className="w-4 h-4 text-[#00979D]" />
									<span className="text-xs text-gray-300 font-medium">Arduino IDE 2.3.7</span>
								</div>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={handleCompile}
									disabled={compileStatus !== 'idle' || currentCharIndex < arduinoCode.length}
									className={`flex items-center gap-1 px-3 py-1 rounded text-xs font-medium transition-colors ${
										compileStatus === 'idle' && currentCharIndex >= arduinoCode.length
											? 'bg-[#00979D] hover:bg-[#00868C] text-white cursor-pointer'
											: 'bg-gray-600 text-gray-400 cursor-not-allowed'
									}`}
								>
									<FaUpload className="w-3 h-3" />
									{compileStatus === 'idle' ? 'Upload' : compileStatus === 'uploading' ? 'Uploading...' : 'Compiling...'}
								</motion.button>
							</div>

							{/* Tab Bar */}
							<div className="bg-[#1E2D3D] px-2 py-1 border-b border-gray-700">
								<div className="px-3 py-1 bg-[#2C3E50] text-xs text-white rounded-t inline-block">
									SkillsMonitor.ino {currentCharIndex < arduinoCode.length && '●'}
								</div>
							</div>

							{/* Code Editor with Auto-typing */}
							<div 
								ref={codeScrollRef}
								className="flex-1 p-3 font-mono text-[11px] leading-[18px] overflow-y-auto bg-[#1E2D3D]"
							>
								<pre className="text-gray-300">
									{typedCode.split('\n').map((line, idx) => (
										<div key={idx}>
											<span className={getSyntaxColor(line, idx)}>
												{line}
											</span>
										</div>
									))}
									{currentCharIndex < arduinoCode.length && (
										<span className="inline-block w-2 h-4 bg-white animate-pulse ml-1" />
									)}
								</pre>
							</div>

							{/* Upload Progress Bar */}
							{isCompiling && (
								<div className="bg-[#1E2D3D] px-3 py-2 border-t border-gray-700">
									<div className="flex items-center gap-2">
										<div className="flex-1 h-2 bg-[#263238] rounded-full overflow-hidden">
											<motion.div
												initial={{ width: 0 }}
												animate={{ width: `${uploadProgress}%` }}
												className="h-full bg-[#00979D] rounded-full"
											/>
										</div>
										<span className="text-xs text-gray-400">{uploadProgress}%</span>
									</div>
								</div>
							)}

							{/* Console Output */}
							<div className="bg-black px-3 py-2 border-t border-gray-700 h-[100px] overflow-y-auto">
								<div className="text-xs text-gray-500 mb-1">Output</div>
								<div className="font-mono text-[10px] space-y-0.5">
									{consoleOutput.map((line, idx) => (
										<div
											key={idx}
											className={
												line.type === 'success' ? 'text-green-400' :
												line.type === 'warning' ? 'text-yellow-400' :
												line.type === 'error' ? 'text-red-400' :
												line.type === 'upload' ? 'text-orange-400' :
												line.type === 'complete' ? 'text-cyan-400 font-semibold' :
												'text-gray-500'
											}
										>
											{line.text}
										</div>
									))}
								</div>
							</div>

							{/* Status Bar */}
							<div className="bg-[#00979D] px-3 py-1 flex items-center justify-between text-[10px] text-white">
								<span>Arduino Uno</span>
								<span>COM3 | 9600 baud</span>
							</div>
						</div>
					</motion.div>

					{/* Skills Progress Bars */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 h-full flex flex-col">
							<h3 className="text-xl font-bold mb-6 flex items-center gap-2">
								<span className="text-2xl">{skillCategories[selectedCategory].icon}</span>
								{skillCategories[selectedCategory].category}
							</h3>

							<div className="space-y-5 flex-1">
								{skillCategories[selectedCategory].skills.map((skill, idx) => (
									<motion.div
										key={idx}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: idx * 0.1 }}
									>
										<div className="flex items-center justify-between mb-2">
											<span className="font-semibold text-gray-200">{skill.name}</span>
											<span className="text-sm font-mono text-cyan-400">{skill.level}%</span>
										</div>

										<div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
											<motion.div
												initial={{ width: 0 }}
												animate={{ width: `${skill.level}%` }}
												transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
												className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
											>
												<motion.div
													animate={{ x: ['-100%', '200%'] }}
													transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
													className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
												/>
											</motion.div>
										</div>
									</motion.div>
								))}
							</div>

							{/* Stats */}
							<div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
								<div className="text-center">
									<div className="text-2xl font-bold text-[#00979D]">
										{Math.round(skillCategories[selectedCategory].skills.reduce((acc, s) => acc + s.level, 0) / skillCategories[selectedCategory].skills.length)}%
									</div>
									<div className="text-xs text-gray-400">Average Proficiency</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-green-400">
										{skillCategories[selectedCategory].skills.length}
									</div>
									<div className="text-xs text-gray-400">Skills Mastered</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
