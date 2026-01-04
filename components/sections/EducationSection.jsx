'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const educationData = [
	{
		degree: 'B.Tech in Computer Science and Engineering',
		institution: 'SRMIST, Kattankulathur',
		logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyYOZllJlZZM8VeKPrGcCWtjc6nBW1sg5mQ&s',
		cgpa: 'CGPA: 9.22 / 10',
		date: 'May 2026*',
		link: 'https://www.srmist.edu.in/',
		status: 'Pursuing'
	},
	{
		degree: '12th Grade',
		institution: 'Kola Perumal Chetty Vaishnav Senior Secondary School, Chennai',
		logo: 'https://www.chennaischooldirectory.com/assets/upload/profileimg/PRFIMGUSR11581671789372.png',
		cgpa: 'Score: 70.4%',
		date: 'July 2022',
		link: 'https://www.kpcvs.ac.in/',
		status: 'Completed'
	},
	{
		degree: '10th Grade',
		institution: 'National Public School, Chennai',
		logo: 'https://www.nps.acadamis.in/assets/school_logos/national-public-school-gopalapuram_logo_1634878530.png',
		cgpa: 'Score: 78.8%',
		date: 'June 2020',
		link: 'https://www.npschennai.com/',
		status: 'Completed'
	}
];

export default function EducationSection({ sectionRef }) {
	return (
		<motion.section
			ref={sectionRef}
			id="education"
			className="py-12 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, delay: 0.2 }}
		>
			<h2 className="text-3xl font-semibold mb-10 text-center">Education</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{educationData.map((edu, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: idx * 0.15 }}
						whileHover={{ scale: 1.05, y: -5 }}
						className="relative group"
					>
						{/* Subtle glow on hover */}
						<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

						{/* Card */}
						<div className="relative flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 text-center">
							{/* Status badge */}
							{edu.status === 'Pursuing' && (
								<div className="absolute top-3 right-3">
									<span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded-full border border-green-500/50">
										• Pursuing
									</span>
								</div>
							)}

							{/* Logo */}
							<a href={edu.link} target="_blank" rel="noopener noreferrer">
								<motion.div
									whileHover={{ rotate: 360 }}
									transition={{ duration: 0.6 }}
								>
									<Image
										src={edu.logo}
										alt={`${edu.institution} Logo`}
										width={64}
										height={64}
										className="w-16 h-16 object-contain mx-auto mb-4 rounded-full bg-white/10 p-2"
										unoptimized
									/>
								</motion.div>
							</a>

							{/* Content */}
							<h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
								{edu.degree}
							</h3>
							<p className="text-sm text-gray-200 mb-3">
								{edu.institution}
							</p>
							<div className="flex justify-center gap-4 text-sm text-gray-300">
								<span className="font-medium text-cyan-400">{edu.cgpa}</span>
								<span>•</span>
								<span>{edu.date}</span>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
