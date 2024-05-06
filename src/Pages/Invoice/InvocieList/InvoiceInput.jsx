import React from 'react'
import { useState } from 'react'
import { InvoiceSkeleton } from '../../../Components/skeletons/InvoiceSkeleton'
import { useSelector } from 'react-redux'

const InvoiceInput = ({invoiceLists,setFilteredData,setCurrentPage,loading}) => {
  const [invoiceNumber,setInvoiceNumber] = useState ('')
  const color = useSelector((state) => state.animateSlice);

  const changeHandler =  (value) => {
    setInvoiceNumber(value);
    setCurrentPage(0)
    const filtered = invoiceLists.filter(item => item.voucherNo.includes(value));
    setFilteredData(filtered);
    };

  const clearInput = ()=> {
    setInvoiceNumber('')
    setFilteredData(invoiceLists)
    }

  return (
    <li className='w-[30%]'>
        <div className='flex items-center max-w-lg'>
            <div className='relative w-full'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'></div>
                {loading ? (
                <InvoiceSkeleton/>
                ) : (
                    <input style={{
                      backgroundColor:color.bgColor,
                      color:color.textColor,
                      
                      
                    }}
                        type='text'
                        id='simple-search'
                        className={` border-gray-300 
                        text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block 
                        w-full ps-3 p-2.5  
                         placeholder-[${color.textColor}] placeholder:text-[${color.textColor}] placeholder-current
                         
                        dark:focus:ring-blue-500 dark:focus:border-blue-500`}

                        placeholder='Search Invoice number here'
                        required
                        value={invoiceNumber} 
                        onChange={(e)=>changeHandler(e.target.value)}
                    />
                )}
                {(invoiceNumber && !loading) && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute top-[13px] 
                right-3 cursor-pointer" 
                onClick={clearInput}
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                )}
            </div>
        </div>
    </li>
  )
}

export default InvoiceInput