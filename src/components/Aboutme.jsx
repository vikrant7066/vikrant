import { motion } from "framer-motion";
import Profile from "../assets/pass1.png"

const About = () => {
    return (
        <section className="max-w-5xl mx-auto pt-20 text-white" id="about">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="text-center text-3xl lg:text-4xl">
                About Me
            </motion.h2>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="mt-10 flex flex-col md:flex-row gap-12"
            >
                {/* Left Section - Image & Personal Details */}
                <div className="flex flex-col items-center md:items-start md:w-1/3">
                    <img
                        src={Profile}
                        alt="Profile"
                        className="rounded-full w-40 h-40 border-none shadow-lg"
                    />
                    <div className="mt-4 text-center md:text-left">
                        <p><span className="font-bold">Name:</span> Vikrant Mendhe</p>
                        <p><span className="font-bold">DOB:</span> 02/09/1998</p>
                        <p><span className="font-bold">Profile:</span> Linux System Administrator</p>
                        <p><span className="font-bold">Email:</span> vikrant.mendhe123@gmail.com</p>
                        <p><span className="font-bold">Mobile:</span> (+91) 7066656618</p>
                        <p><span className="font-bold">Phone:</span> (+91) 9096537232</p>
                    </div>
                </div>

                {/* Right Section - About Me */}
                <div className="md:w-2/3">
                    <p className="mb-4">
                        To prove myself dedicated, worthy, and energetic in a progressive organization
                        that gives me scope to apply my knowledge and skills and be a member of a team
                        that dynamically works towards the success and growth of the organization.
                    </p>
                    <p className="mb-4">
                        A growth-oriented position in a professionally managed and dynamic
                        organization that provides opportunities for development and responsibilities
                        to contribute towards organizational success.
                    </p>
                    <p>
                        Seeking an assignment in Blow Molding Technician/Maintenance Operations/Production/
                        Instrumentation Quality Assurance with a growth-oriented organization of repute.
                    </p>
                </div>
            </motion.div>

            {/* Skills Section at the Bottom */}
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                className="mt-10"
            >
                <h3 className="text-lg font-semibold text-center mb-4">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { skill: "Linux", level: "90%" },
                        { skill: "Windows", level: "90%" },
                        { skill: "Computer Hardware", level: "90%" },
                        { skill: "HTML", level: "85%" },
                        { skill: "Photoshop", level: "70%" },
                        { skill: "Canva", level: "60%" },
                        { skill: "CSS3", level: "50%" },
                    ].map((item, index) => (
                        <div key={index} className="w-full">
                            <div className="flex justify-between">
                                <span className="font-bold">{item.skill}</span>
                                <span>{item.level}</span>
                            </div>
                            <div className="w-full h-2 bg-gray-700 rounded-full mt-1">
                                <div
                                    className="h-2 bg-blue-500 rounded-full"
                                    style={{ width: item.level }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
