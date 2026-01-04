'use client';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaHandsHelping, FaMedal, FaStar } from 'react-icons/fa';

const awards = [
	{
		icon: FaTrophy,
		iconColor: 'text-yellow-400',
		bgGradient: 'from-yellow-600 via-orange-600 to-red-600',
		title: "Placed 3rd among 6 teams",
		subtitle: "Enduraverse'25 Hackathon",
		org: "Endurance Technologies Ltd",
		date: "Feb 2025",
		description: "Competed in hardware innovation challenge, developing IoT telematics solution",
		badge: "🥉 Bronze"
	},
	{
		icon: FaUsers,
		iconColor: 'text-cyan-400',
		bgGradient: 'from-cyan-600 via-blue-600 to-indigo-600',
		title: "Led 4-member design team",
		subtitle: "AlexaVerse 2.0",
		org: "Alexa Developers SRM",
		date: "2024-2025",
		description: "Directed poster design & branding for flagship technical event",
		badge: "👥 Leadership"
	},
	{
		icon: FaHandsHelping,
		iconColor: 'text-green-400',
		bgGradient: 'from-green-600 via-emerald-600 to-teal-600',
		title: "Logistics Volunteer",
		subtitle: "GIT101 Tech Conference",
		org: "SRMIST",
		date: "Nov 2023",
		description: "Coordinated event logistics and participant management",
		badge: "🤝 Service"
	}
];

export default function AwardsSection({ sectionRef }) {
	return (
		<motion.section
			ref={sectionRef}
			id="awards"
			className="pt-4 pb-10 px-4 sm:px-6 lg:px-20 text-white"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, delay: 0.7 }}
		>
			<h2 className="text-3xl font-semibold mb-10 text-center">Awards & Activities</h2>

			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{awards.map((item, idx) => {
					const IconComponent = item.icon;
					return (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.2 }}
							whileHover={{ y: -10, scale: 1.02 }}
							className="relative group"
						>
							{/* Glowing background effect */}
							<div className={`absolute -inset-0.5 bg-gradient-to-r ${item.bgGradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500`} />

							{/* Card content */}
							<div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 h-full overflow-hidden">
								{/* Decorative corner */}
								<div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.bgGradient} opacity-10 blur-2xl`} />

								{/* Badge */}
								<div className="absolute top-4 right-4">
									<span className="text-xs bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
										{item.badge}
									</span>
								</div>

								{/* Icon */}
								<motion.div
									whileHover={{ rotate: 360, scale: 1.2 }}
									transition={{ duration: 0.6 }}
									className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center shadow-lg`}
								>
									<IconComponent className={`${item.iconColor} w-8 h-8`} />
								</motion.div>

								{/* Title */}
								<h3 className="text-lg font-bold mb-1 group-hover:text-cyan-300 transition-colors">
									{item.title}
								</h3>

								{/* Subtitle */}
								<p className={`text-sm font-semibold mb-2 bg-gradient-to-r ${item.bgGradient} bg-clip-text text-transparent`}>
									{item.subtitle}
								</p>

								{/* Description */}
								<p className="text-xs text-gray-400 mb-3 line-clamp-2">
									{item.description}
								</p>

								{/* Divider */}
								<div className={`h-1 w-full bg-gradient-to-r ${item.bgGradient} rounded-full mb-3 opacity-50`} />

								{/* Org and Date */}
								<div className="space-y-1">
									<p className="text-xs text-gray-300 font-medium">
										📍 {item.org}
									</p>
									<p className="text-xs text-gray-500">
										📅 {item.date}
									</p>
								</div>

								{/* Floating stars decoration */}
								<motion.div
									animate={{
										rotate: [0, 360],
										scale: [1, 1.2, 1]
									}}
									transition={{
										duration: 20,
										repeat: Infinity,
										ease: "linear"
									}}
									className="absolute -bottom-4 -right-4 opacity-10"
								>
									<FaStar className="w-16 h-16 text-yellow-400" />
								</motion.div>
							</div>
						</motion.div>
					);
				})}
			</div>

			{/* Stats summary */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.8 }}
				className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
			>
				{[
					{ label: 'Awards', value: '1', icon: FaMedal },
					{ label: 'Leadership Roles', value: '1', icon: FaUsers },
					{ label: 'Community Service', value: '1', icon: FaHandsHelping }
				].map((stat, idx) => {
					const StatIcon = stat.icon;
					return (
						<motion.div
							key={idx}
							whileHover={{ scale: 1.05 }}
							className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
						>
							<StatIcon className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
							<div className="text-2xl font-bold text-cyan-300">{stat.value}</div>
							<div className="text-xs text-gray-400">{stat.label}</div>
						</motion.div>
					);
				})}
			</motion.div>
		</motion.section>
	);
}
