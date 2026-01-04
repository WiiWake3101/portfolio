'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const clubRoles = [
	{
		title: 'Creatives Head',
		period: 'Jul 2025 - Present',
		duration: '7 months',
		type: 'Full-time',
		location: 'Chennai, Tamil Nadu, India',
		description:
			'Leading the Design, Content, and VFX efforts for all club initiatives. Head of the Organising committee of AlexaVerse 2.0.',
		skills: ['Team Leadership', 'Event Management', 'Design Direction', 'VFX'],
		isCurrent: true,
	},
	{
		title: 'Creatives Lead',
		period: 'Oct 2024 - Jul 2025',
		duration: '10 months',
		type: 'Part-time',
		location: 'Chengalpattu, Tamil Nadu, India',
		description:
			'Guided creative vision, mentored design team members, and oversaw website UI/UX redesign.',
		skills: ['Figma', 'Team Leadership', 'UI/UX', 'Mentoring'],
		isCurrent: false,
	},
	{
		title: 'Creative Executive',
		period: 'Jul 2024 - Oct 2024',
		duration: '4 months',
		type: 'Part-time',
		location: 'Chennai, Tamil Nadu, India',
		description:
			'Shaped creative direction and fostered collaborative environment for all members.',
		skills: ['Figma', 'UI/UX', 'Collaboration'],
		isCurrent: false,
	},
];

export default function ClubExperienceSection() {
	return (
		<motion.section
			id="club-experience"
			className="py-10 px-4 sm:px-6 lg:px-20 text-white"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, delay: 0.35 }}
		>
			<h2 className="text-3xl font-semibold mb-10 text-center">
				Club Experience
			</h2>

			<div className="max-w-4xl mx-auto">
				{/* Club Header */}
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="flex items-center justify-center gap-4 mb-10"
				>
					<Image
						src="/Alexa Developers SRM.png"
						alt="Alexa Developers SRM"
						width={80}
						height={80}
						className="w-20 h-20 object-contain rounded-lg bg-white/5 p-2 border-2 border-cyan-500/30"
					/>
					<div>
						<h3 className="text-2xl font-bold text-cyan-300">
							Alexa Developers SRM
						</h3>
						<p className="text-sm text-gray-400">
							Total Experience: 2 yrs 5 mos
						</p>
					</div>
				</motion.div>

				{/* Timeline */}
				<div className="space-y-6">
					{clubRoles.map((role, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.15 }}
							whileHover={{ scale: 1.02, x: 10 }}
							className="relative group"
						>
							{/* Subtle glow */}
							<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500" />

							{/* Card */}
							<div className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6">
								{/* Header */}
								<div className="flex items-start justify-between mb-4">
									<div className="flex-1">
										<div className="flex items-center gap-3 mb-2">
											<h4 className="text-xl font-bold group-hover:text-cyan-300 transition-colors">
												{role.title}
											</h4>
											{role.isCurrent && (
												<span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/50 animate-pulse">
													● Current
												</span>
											)}
										</div>
										<div className="flex items-center gap-2 flex-wrap text-sm text-gray-400">
											<span className="font-medium text-cyan-400">
												{role.period}
											</span>
											<span>•</span>
											<span>{role.duration}</span>
											<span>•</span>
											<span className="px-2 py-0.5 bg-indigo-700/30 text-indigo-300 rounded-full text-xs border border-indigo-500/30">
												{role.type}
											</span>
										</div>
									</div>
								</div>

								{/* Location */}
								<p className="text-sm text-gray-400 mb-3">
									📍 {role.location}
								</p>

								{/* Description */}
								<p className="text-gray-300 mb-4 leading-relaxed">
									{role.description}
								</p>

								{/* Skills */}
								<div className="flex flex-wrap gap-2">
									{role.skills.map((skill, skillIdx) => (
										<span
											key={skillIdx}
											className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-full text-xs font-medium"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
