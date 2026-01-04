'use client';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const languages = [
	{
		flag: '🇬🇧',
		name: 'English',
		level: 'Fluent',
		percentage: 95,
		gradient: 'from-blue-600 via-indigo-600 to-purple-600',
	},
	{
		flag: '🇮🇳',
		name: 'Tamil',
		level: 'Native',
		percentage: 80,
		gradient: 'from-orange-600 via-red-600 to-pink-600',
	},
];

export default function LanguagesSection({ sectionRef }) {
	return (
		<motion.section
			ref={sectionRef}
			id="languages"
			className="pt-4 pb-10 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-40"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, delay: 0.8 }}
		>
			<h2 className="text-3xl font-semibold mb-10 text-center">Languages</h2>

			<div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
				{languages.map((lang, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: idx * 0.2 }}
						whileHover={{ y: -5, scale: 1.02 }}
						className="relative group"
					>
						{/* Glowing background on hover */}
						<div
							className={`absolute -inset-0.5 bg-gradient-to-r ${lang.gradient} rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition duration-500`}
						/>

						{/* Card content */}
						<div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 overflow-hidden">
							{/* Decorative gradient */}
							<div
								className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${lang.gradient} opacity-10 blur-2xl`}
							/>

							{/* Flag and Name */}
							<div className="flex items-center justify-between mb-4 relative z-10">
								<div className="flex items-center gap-3">
									<motion.div
										whileHover={{ rotate: 360 }}
										transition={{ duration: 0.5 }}
										className="text-5xl"
									>
										{lang.flag}
									</motion.div>
									<div>
										<h3 className="text-xl font-bold">{lang.name}</h3>
										<span
											className={`inline-block px-2 py-0.5 bg-gradient-to-r ${lang.gradient} rounded-full text-xs font-semibold mt-1`}
										>
											{lang.level}
										</span>
									</div>
								</div>

								{/* Star rating */}
								<div className="flex gap-1">
									{[...Array(5)].map((_, i) => (
										<FaStar
											key={i}
											className={`w-4 h-4 ${
												i < Math.floor(lang.percentage / 20)
													? 'text-yellow-400'
													: 'text-gray-600'
											}`}
										/>
									))}
								</div>
							</div>

							{/* Proficiency bar */}
							<div className="relative z-10">
								<div className="flex justify-between items-center mb-2">
									<span className="text-xs text-gray-400">Proficiency</span>
									<span className="text-xs font-semibold text-cyan-300">
										{lang.percentage}%
									</span>
								</div>
								<div className="h-2 bg-gray-800 rounded-full overflow-hidden">
									<motion.div
										initial={{ width: 0 }}
										whileInView={{ width: `${lang.percentage}%` }}
										viewport={{ once: true }}
										transition={{ duration: 1, delay: idx * 0.3 }}
										className={`h-full bg-gradient-to-r ${lang.gradient} rounded-full`}
									/>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>

			{/* Simple summary */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.5 }}
				className="mt-8 text-center"
			>
			</motion.div>
		</motion.section>
	);
}
