import { motion } from "framer-motion";
import { FaPaintBrush, FaCode, FaCamera, FaFont, FaPalette, FaDesktop, FaWindows, FaLinux, FaServer } from "react-icons/fa";

const services = [
    { title: "Web Design", icon: <FaPaintBrush />, description: "The designer will start by creating a layout for your website, which includes the placement of various elements such as the logo, navigation menu, and content areas." },
    { title: "Web Development", icon: <FaCode />, description: "The developer will also ensure that your website is responsive, meaning it is easily accessible on all devices, including desktops, laptops, tablets, and mobile phones." },
    { title: "Photoshop", icon: <FaCamera />, description: "Photoshop is a powerful software used for editing and manipulating digital images. It provides a wide range of tools and features that allow users to enhance, transform." },
    { title: "Canva", icon: <FaFont />, description: "Canva is a user-friendly graphic design platform that allows anyone to create professional-quality designs without any prior design experience." },
    { title: "Graphic Design", icon: <FaPalette />, description: "Graphic design is the art of creating visual content to communicate information or ideas to a specific audience. It involves a combination of artistic and technical skills" },
    { title: "Computer Hardware", icon: <FaDesktop />, description: "The specific hardware components needed by a client will depend on their specific needs and requirements, such as whether they will be using demanding software." },
    { title: "Windows", icon: <FaWindows />, description: "Windows is a family of operating systems developed by Microsoft Corporation. It is the most widely used operating system for personal computers worldwide." },
    { title: "Linux", icon: <FaLinux />, description: "Red Hat Linux is a popular distribution of the Linux operating system developed by Red Hat, Inc. It is a powerful and reliable platform designed for use in servers." },
    { title: "Ansible", icon: <FaServer />, description: "Ansible is an open-source configuration management tool that automates software provisioning, configuration management, and application deployment." }
];

const Services = () => {
    return (
        <section className="py-16" id="services">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="text-center text-3xl font-bold mb-10 text-white"
            >
                Services
            </motion.h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 ">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className=" border-2 border-gray-700 shadow-lg rounded-xl p-6 flex flex-col items-center h-80 cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-2 bg-white/10"
                    >
                        <div className="relative flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-colors hover:bg-blue-500">
                            <div className="text-3xl text-white hover:text-white">
                                {service.icon}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-center text-white mb-2">{service.title}</h3>
                        <p className="text-white text-center">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
