'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaAngleDown, FaChevronUp } from 'react-icons/fa'

const FAQ = () => {
  type Index = number | null
  const [openIndex, setOpenIndex] = useState<Index>(null)
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  const faqs = [
    {
      question: 'How does athlete stock trading work?',
      answer:
        'The purpose of this website is to provide a platform for users to buy and sell used products, as well as to connect with local sellers and buyers.',
    },
    {
      question: 'What determines the value of an athlete?',
      answer:
        'The purpose of this website is to provide a platform for users to buy and sell used products, as well as to connect with local sellers and buyers.',
    },
    {
      question: 'Can I withdraw my earnings anytime?',
      answer:
        'The purpose of this website is to provide a platform for users to buy and sell used products, as well as to connect with local sellers and buyers.',
    },
    {
      question: 'Is this platform legal and secure?',
      answer:
        'The purpose of this website is to provide a platform for users to buy and sell used products, as well as to connect with local sellers and buyers.',
    },
  ]
  return (
    <div className="mt-32 pb-32  flex flex-col items-center justify-center px-4 max-xl:pt-32">
      {' '}
      <div className="text-5xl font-bold flex  gap-2 items-center text-white mb-12">
        <div>
          <Image
            src="/design.svg"
            alt="design"
            className="mb-4"
            width={30}
            height={30}
          />
        </div>
        <div>FAQ</div>
      </div>
      <div className="space-y-5 responsive-width ">
        {faqs.map(
          (faq: { question: string; answer: string }, index: number) => (
            <div key={index} className="mb-2  p-4 rounded shadow bg-[#193050]">
              <button
                className="w-full text-left font-semibold flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex  gap-2 flex-row items-center justify-center">
                  <div>
                    <Image
                      src="/faq/faq.svg"
                      alt="faq"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div>{faq.question}</div>
                </div>
                <span>
                  {openIndex === index ? <FaChevronUp /> : <FaAngleDown />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default FAQ
