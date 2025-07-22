import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from './ContactForm';
import {
  FaReact, FaPython, FaNodeJs, FaGithub, FaJava, FaHtml5, FaCss3Alt, FaNetworkWired,
} from "react-icons/fa";
import {
  SiJavascript, SiPostman, SiTailwindcss, SiCplusplus, SiMysql,
  SiMongodb, SiOpencv, SiTensorflow, SiFlask, SiExpress,
} from "react-icons/si";

const PortfolioPage = () => {
  const [selectedSection, setSelectedSection] = useState("Projects");

  const renderContent = () => {
    switch (selectedSection) {
      case "Projects":
        return (
          <div className="bg-[#fbfdff] relative overflow-x-auto no-scrollbar max-h-[calc(120vh-200px)]">
            <div className="flex gap-6 py-4 whitespace-nowrap overflow-x-auto no-scrollbar px-2">

              {[
                {
                  title: "WatchWise – AI Monitoring",
                  features: [
                    "Real-time employee tracking with OpenCV & CNN",
                    "Interactive dashboard & role-based access",
                    "Anomaly detection and cloud logging"
                  ],
                  tags: ["React", "Flask", "MongoDB", "CNN", "WebSocket"],
                  github: "https://github.com/ayeshakousar-work/watchwise",
                  demo: "https://your-demo-link.com",
                },
                {
                  title: "Sports Management App",
                  features: [
                    "Team coordination, event scheduling",
                    "Role-based access and real-time updates",
                    "Interactive dashboard for teams"
                  ],
                  tags: ["React", "Node.js", "Express", "MongoDB"],
                  github: "https://github.com/ayeshakousar-work/MERN",
                  demo: "https://your-demo-link.com",
                },
                {
                  title: "Traffic Flow Analysis",
                  features: [
                    "YOLO-based vehicle detection in real-time",
                    "Analytics dashboard with charts",
                    "Supports 15 vehicle classes, ~89% accuracy"
                  ],
                  tags: ["YOLO", "React", "Flask", "Pandas"],
                  github: "https://github.com/ayeshakousar-work/Traffic_Flow_Analysis",
                  demo: "https://your-demo-link.com",
                },
              ].map((proj, idx) => (
                <div
                  key={idx}
                  className="inline-block min-w-[380px] max-w-[200px] bg-[#fbfdff] rounded-xl shadow-md hover:shadow-xl p-5 transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{proj.title}</h3>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                    {proj.features.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-gray-100 border rounded px-2 py-0.5 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-3 text-sm">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:underline"
                    >
                      Code
                    </a>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Experience & Education":
        return (
          <div className="bg-[#fbfdff] relative overflow-x-auto no-scrollbar max-h-[calc(100vh-200px)]">
            <div className="flex gap-6  whitespace-nowrap overflow-x-auto no-scrollbar px-2">

              <div className="inline-block w-full max-w-sm bg-[#fbfdff] rounded-2xl shadow-sm hover:shadow-md p-2 transition-all border border-gray-100">
  <h3 className="text-xl font-bold text-gray-900 mb-2"> Education</h3>

  <p className="text-base font-semibold text-gray-800">Riphah International University</p>
  <p className="text-sm text-gray-500 italic">BS in Computer Science</p>
  <p className="text-sm text-gray-600">
    GPA: <span className="font-medium text-gray-800">3.98 / 4.00</span>
  </p>
  <p className="text-sm text-gray-400 mb-4">Islamabad, Pakistan • 2021–2025</p>

  <div>
    <p className="text-sm text-gray-900 font-semibold mb-2"> Coursework</p>
    <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
      {[
        "Artificial Intelligence", "Computer Vision", "Data Structures",
        "Database", "Web And App Development"
      ].map((course, i) => (
        <li key={i}>{course}</li>
      ))}
    </ul>
  </div>
</div>

              

              {/* Experience Card */}
              <div className="inline-block w-full max-w-sm bg-[#fbfdff] rounded-2xl shadow-sm hover:shadow-md p-6 transition-all border border-gray-100">
  <h3 className="text-xl font-bold text-gray-900 mb-2">Experience</h3>
  
  <p className="text-base font-semibold text-gray-800">Teacher’s Assistant</p>
  <p className="text-sm text-gray-500">Riphah International University</p>
  <p className="text-sm text-gray-500">Islamabad, Pakistan</p>
  <p className="text-sm text-gray-400 mb-4">Sep 2024 – May 2025</p>
  
  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
    <li>Assisted lead teachers with class schedules.</li>
    <li>Graded assignments and tracked student progress.</li>
    <li>Provided individual student support for learning.</li>
  </ul>
</div>

            </div>
          </div>
        );
      case "Certifications":
        const certificates = [
          {
            title: "AI For Everyone",
            provider: "DeepLearning.AI",
            location: "Rawalpindi, Pakistan",
            date: "2018–2020",
          },
          {
            title: "Machine Learning with Python",
            provider: "IBM",
            location: "Rawalpindi, Pakistan",
            date: "2018–2020",
          },
          {
            title: "Web Development in React.js",
            provider: "Coursera Project Network",
            location: "Rawalpindi, Pakistan",
            date: "2018–2020",
          },
          {
            title: "Android Programming for Beginners",
            provider: "Coursera Project Network",
            location: "Rawalpindi, Pakistan",
            date: "2018–2020",
          },
        ];

        return (
          <div className="bg-[#fbfdff] relative overflow-y-auto max-h-[calc(100vh-200px)] px-4 py-2">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {certificates.map((cert, idx) => (
      <div
        key={idx}
        className="bg-[#fbfdff] rounded-xl shadow-md hover:shadow-lg p-5 transition-all"
      >
        <h3 className="text-lg font-semibold text-gray-900 ">{cert.title}</h3>
        <p className="text-sm text-gray-700 font-medium mt-1">{cert.provider}</p>
        <p className="text-xs text-gray-500 mt-1">{cert.location}</p>
        <p className="text-xs text-gray-500">{cert.date}</p>
      </div>
    ))}
  </div>
</div>

        );
     // Skills Section
// Skills Section
case "Skills":
  const skills = {
    "Languages": [
      { icon: <FaPython size={24} className="text-yellow-500" />, name: "Python" },
      { icon: <FaJava size={24} className="text-red-600" />, name: "Java" },
      { icon: <SiJavascript size={24} className="text-yellow-400" />, name: "JavaScript" },
      { icon: <SiCplusplus size={24} className="text-blue-500" />, name: "C++" },
      { icon: <FaHtml5 size={24} className="text-orange-600" />, name: "HTML" },
      { icon: <FaCss3Alt size={24} className="text-blue-600" />, name: "CSS" },
      { icon: <SiMysql size={24} className="text-blue-700" />, name: "MySQL" },
    ],
    "Frameworks & Libraries": [
      { icon: <FaReact size={24} className="text-cyan-500" />, name: "React" },
      { icon: <FaNodeJs size={24} className="text-green-600" />, name: "Node.js" },
      { icon: <SiExpress size={24} className="text-gray-700" />, name: "Express" },
      { icon: <SiFlask size={24} className="text-black" />, name: "Flask" },
      { icon: <SiTailwindcss size={24} className="text-sky-500" />, name: "Tailwind CSS" },
      { icon: <SiMongodb size={24} className="text-green-500" />, name: "MongoDB" },
      { icon: <SiOpencv size={24} className="text-red-400" />, name: "OpenCV" },
      { icon: <SiTensorflow size={24} className="text-orange-500" />, name: "TensorFlow" },
     { icon: <FaNetworkWired size={24} className="text-purple-600" />, name: "WebSocket" },

    ],
    "Tools": [
      { icon: <FaGithub size={24} className="text-black" />, name: "GitHub" },
      { icon: <img src="/vs-code.svg" alt="VS Code" className="w-6 h-6" />, name: "VS Code" },
      { icon: <SiPostman size={24} className="text-orange-600" />, name: "Postman" },
    ],
    
  };
return (
  <div className="overflow-x-auto pb-2 no-scrollbar ">
    <div className="flex gap-6 flex-nowrap w-max no-scrollbar ">
      {Object.entries(skills).map(([category, items], idx) => (
        <div key={idx} className="bg-[#fbfdff] rounded-2xl shadow-md hover:shadow-lg p-5 transition-all  flex flex-col gap-3 w-[400px] shrink-0">
          <h3 className="text-md font-semibold text-gray-800">{category}</h3>
          <div className="flex flex-wrap gap-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-[#fbfdff] px-3 py-2 rounded-lg shadow-sm">
                {item.icon}
                <span className="text-sm text-gray-800">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);





      default:
        return null;
    }
  };

return (
    <div className="min-h-screen flex flex-col  bg-gradient-to-br from-[#fbfdff] to-[#fbfdff]">
      {/* Main layout with sidebar and right panel */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
<div className="flex-[1] ml-8 flex-shrink-0 bg-gradient-to-br from-[#0e2e2e] to-[#074141] text-white relative z-10 h-[500px]">
          <div className="p-6 flex flex-col items-center space-y-6">
            <img
              src="/new.PNG"
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-cyan-400 shadow-lg"
            />
            <div className="space-y-6 w-full">
              {["Projects", "Certifications", "Experience & Education", "Skills"].map((text, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedSection(text)}
                  className={`bg-[#134949] hover:bg-[#1d6161] text-center text-sm p-4 rounded-2xl border ${
                    selectedSection === text ? "border-white" : "border-cyan-500"
                  } shadow-cyan-500/20 shadow-md cursor-pointer`}
                >
                  {text}
                </motion.div>
              ))}
            </div>
            <div className="text-xs text-gray-400 pt-8 text-center">
              <p>Web Developer & AI</p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-[2]  bg-gradient-to-br from-[#fbfdff] to-[#fbfdff] relative ml-4 z-0 p-12 overflow-hidden">
          <h1 className="text-2xl font-bold">Ayesha Kousar</h1>
          <p className="mt-2 text-sm text-gray-800">
I’m Ayesha Kousar
Full Stack Web Developer & AI Engineer (in the making)

I'm beginning my journey in tech with a solid foundation in web development and AI. Eager to learn, build real-world solutions, and grow into a developer who creates with purpose and precision.        </p>

          {/* Dynamic Section */}
          <div className="mt-10">
            {renderContent()}
          </div>
        </div>
      </div>

     
     


      {/* Footer: Apply flex-col to make it vertical */}
      <footer className="bg-[#0e2e2e] text-white py-6 mt-2 px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-center md:text-left space-y-1">
          <p>Email</p>
          <a href="mailto:ayeshakousar.work@gmail.com" className="hover:underline">ayeshakousar.work@gmail.com</a>
        </div>
        
        {/* Links */}
        <div className="flex space-x-6 items-center">
          <a href="https://github.com/ayeshakousar-work" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ayesha-kousar-/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
        <a href="/Ayesha Kousar CV.pdf" download className="bg-white text-[#0e2e2e] px-3 py-1 rounded hover:bg-gray-200 text-sm font-medium">
  Get Resume
</a>

        </div>
      </footer>
    </div>



  );
};

export default PortfolioPage;