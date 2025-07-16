const projects = [
  {
    title: "Modern E-commerce Platform",
    description: "A responsive e-commerce site with cart, auth, and Stripe payments.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Task Management Dashboard",
    description: "A productivity app for task tracking and collaboration.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#"
  }
];

const ProjectsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {projects.map((proj, idx) => (
      <div key={idx} className="bg-white p-4 rounded-lg shadow border hover:shadow-lg transition">
        <div className="h-32 bg-gray-200 mb-4" />
        <h2 className="font-semibold text-lg">{proj.title}</h2>
        <p className="text-sm text-gray-600">{proj.description}</p>
        <div className="flex gap-2 flex-wrap mt-2">
          {proj.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-gray-100 border px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <a href={proj.demoLink} className="text-blue-600 text-sm underline">Live Demo</a>
          <a href={proj.codeLink} className="text-blue-600 text-sm underline">Code</a>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectsSection;
