import { motion } from 'framer-motion'
import { useInView } from './useInView'

function SkillBar({ name, percentage }) {
  const { ref, inView } = useInView()

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-white">{name}</span>
        <span className="text-primary font-semibold">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default SkillBar
