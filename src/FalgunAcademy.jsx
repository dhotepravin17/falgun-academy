import { motion } from 'framer-motion';

export default function FalgunAcademy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white text-gray-800">
      <header className="bg-blue-800 text-white p-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Falgun Academy</h1>
          <p className="text-sm">Empowering Std 5–10 • Maharashtra & CBSE Boards</p>
        </div>
      </header>

      <motion.section
        className="py-16 px-6 container mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700">About Us</h2>
        <p className="text-lg leading-relaxed">
          At Falgun Academy, we nurture students through interactive classes, weekly tests, and expert mentoring. Trusted by hundreds of parents.
        </p>
      </motion.section>

      <motion.section
        className="bg-blue-50 py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Courses Offered</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg list-disc pl-6">
            <li>Std 5–10 – Maharashtra State Board (All Subjects)</li>
            <li>Std 5–10 – CBSE Board (All Subjects)</li>
            <li>Special focus on Maths, Science, and English</li>
            <li>Weekly Tests and Smart Performance Tracking</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="py-16 px-6 container mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Meet Our Faculty</h2>
        <p className="text-lg leading-relaxed">
          Certified teachers with 10+ years of experience in board exam preparation. They guide students through personalized learning plans.
        </p>
      </motion.section>

      <motion.section
        className="bg-blue-50 py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Admissions & Enquiry</h2>
          <p className="text-lg">
            Admissions open for 2025–26. Contact us for a free counselling session and trial class.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="py-16 px-6 container mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Contact Us</h2>
        <p className="text-lg">📍 Address: 1289, NIT Colony, Nandanvan, Nagpur, Maharashtra</p>
        <p className="text-lg">📞 Phone: +91-9370630029</p>
        <p className="text-lg">📧 Email: falgunacademy@gmail.com</p>
      </motion.section>

      <footer className="bg-blue-800 text-white text-center p-4">
        &copy; {new Date().getFullYear()} Falgun Academy. All rights reserved.
      </footer>
    </div>
  );
}
