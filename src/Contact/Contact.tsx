import React, { useEffect, useRef, useState } from 'react'
import {motion, useInView} from "framer-motion"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { BsPersonFill } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";


interface ContactForm {
    name: string,
    email: string,
    message: string
}

const Contact = ({onIsInView}: {onIsInView: () => void}) => {
  const [contactForm, setContactForm] = useState<ContactForm>({name:"", email:"", message:""} as ContactForm)
  const containerRef = useRef(null)
  const containerInView = useInView(containerRef, { once: false })
  const [error, setError] = useState<string | null>(null)
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

  useEffect(() => {
      if (containerInView) { onIsInView() }
  }, [containerInView])

  const handleContactFormUpdate = (e: React.ChangeEvent) => {
    const {name, value} = e.target as HTMLInputElement

    setContactForm({...contactForm, [name]: value})
  }

  function isValidEmail(email) {
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const handleSubmit = async () => {
    setError(null)
    if (contactForm?.name.length < 1) {
        setError("Please enter your name.")
        return
    }

    if (!isValidEmail(contactForm?.email)) {
        setError("Please enter a valid email.")
        return
    } 

    if (contactForm?.message.length < 1) {
        setError("Please enter a message.")
        return
    }


    try {
        const resp = await fetch(import.meta.env.VITE_CONTACT_FORM_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": import.meta.env.VITE_PKEY_X1
            },
            body: JSON.stringify({
                data: contactForm
            })
        })

        console.log(resp.status);

        setFormSubmitted(true)
        setContactForm({name: "", email: "", message: ""})
        
    } catch (error) {
        console.log(error);
        
    }
  }


  return (
    <motion.div ref={containerRef} initial={{opacity: 0, y: 50}} animate={containerInView ? { opacity: 1, y: 0 } : {}} transition={{duration: 0.8, ease: "easeOut"}} id="Contact"  className="flex flex-col justify-start max-w-[100vw] lg:w-[75%] sm:w-[80%] mx-auto sm:gap-10 md:gap-10 gap-10 md:pt-20 md:p-0 p-5 md:h-[75vh] min-h-screen">
        <div className="flex items-start gap-10 md:flex-row flex-col">
            {!formSubmitted ? <div className="flex flex-col w-full md:w-[50%] gap-5">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-3 w-full">
                        <div className='md:border-b border-b-0 border-zinc-700 pb-1 w-full'>
                            <p className="text-3xl text-white font-semibold">Contact</p>

                        </div>
                        <div className="flex flex-col text-zinc-300 gap-5 mt-5">
                            <div className="flex flex-col">
                                <p className='text-zinc-400'>Email</p>
                                <a href='mailto:jalenarms@outlook.com' className='text-cyan-400'>jalenarms@outlook.com</a>
                            </div>
                            <div className="flex flex-col">
                                <p className='text-zinc-400'>Phone</p>
                                <a href='tel:+16145968904' className='text-cyan-400'>(614) 596-8904</a>
                            </div>
                        </div>
                        {error && <p className='text-sm text-red-400'>{error}</p>}
                    </div>
                </div>
                

            </div> : (
                <div className="flex fade-in flex-col h-full w-full md:w-[60%] gap-10 justify-center items-center">
                    <FaCircleCheck className='text-6xl text-green-400' />
                    <p className="text-green-400 text-4xl">Submitted</p>
                </div>

            )}

            <div className="md:w-[1px] md:h-full h-[0.5px] w-full bg-zinc-700"></div>

            <div className="flex flex-col w-full md:w-[50%] gap-10">
                <div className="flex items-center gap-3 w-full md:border-b border-b-0 border-zinc-700 pb-1">
                    <p className="text-3xl text-white font-semibold">References</p>
                </div>
                <div className="flex flex-col gap-10" >
                    <div className="flex items-start gap-5">
                        <BsPersonFill className='text-lg text-zinc-300' />

                        <div className="flex flex-col">
                            <p className='text-white'>Angel Rodriguez</p>
                            <p className='text-zinc-300'>Senior Software Developer at BigTime Software</p>
                            <p className='text-zinc-300 text-sm'>602-341-0796</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <BsPersonFill className='text-lg text-zinc-300' />

                        <div className="flex flex-col">
                            <p className='text-white'>Addison Albrecht</p>
                            <p className='text-zinc-300'>Front-End Web Developer at Northwestern Mutual</p>
                            <p className='text-zinc-300 text-sm'>262-308-3338</p>
                        </div>
                    </div>

                    

                </div>
            </div>

        </div>
    </motion.div>
  )
}

export default Contact
