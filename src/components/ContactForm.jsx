import  { useState } from 'react'
import { motion } from "framer-motion"

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "95999b88-1de0-4098-9c60-5a55d105be02");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url(/footer-bg-color.png)] bg-center bg-no-repeat bg-[lenght:90%_auto]'>


      

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text" placeholder='Enter Your Name ' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-transparent' name='name' />

          <motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email" placeholder='Enter Your Email ' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-transparent' name='email' />
        </div>
        <motion.textarea
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows="6" placeholder="Enter Your Message" required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-transparent mb-6' name='message'></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-white/80 text-black rounded-full mx-auto  duration-500' type='submit'>Submit now </motion.button>

        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
