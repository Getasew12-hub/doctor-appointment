import React, { useEffect, useRef, useState } from 'react';
import userStore from "../../store/user";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Loader } from 'lucide-react';

function EmailVerify() {
    const navigate = useNavigate();
    const { EmailVerify, loading ,ResendEmailCode,user} = userStore();
    const [inputs, setInputs] = useState(['', '', '', '', '', '']);
    const inputRef = useRef([]);

    useEffect(() => {
        if (inputs.every((e) => e !== '')) {
            sumbitemail();
        }
    }, [inputs]);
 console.log("the current user is this ",user);
    function handleInput(index, val) {
        const newvalue = [...inputs];

        // Handle Paste logic
        if (val.length > 1) {
            const pasteval = val.slice(0, 6).split('');
            for (let i = 0; i < pasteval.length; i++) {
                newvalue[i] = pasteval[i] || '';
            }
            setInputs(newvalue);
            
            // Focus the last filled or first empty
            const nextIndex = newvalue.findIndex(e => e === '');
            const focusIndex = nextIndex === -1 ? 5 : nextIndex;
            inputRef.current[focusIndex]?.focus();
            return;
        }

        newvalue[index] = val;
        setInputs(newvalue);

        // Auto-focus next input
        if (val && index < 5) {
            inputRef.current[index + 1]?.focus();
        }
    }

    function handelKey(index, key) {
        if (key === 'Backspace') {
            if (!inputs[index] && index > 0) {
                const newval = [...inputs];
                newval[index - 1] = '';
                setInputs(newval);
                inputRef.current[index - 1]?.focus();
            }
        }
    }

    const sumbitemail = async (e) => {
     try {
      await EmailVerify(inputs.join(''));
      
     } catch (error) {
      
      setInputs(['', '', '', '', '', '']);
      
      inputRef.current[0]?.focus();
      
     }
    
        
    };

   
function handleResend() {
  ResendEmailCode();
}
    return (
      <div className='flex fixed inset-0 justify-center items-center bg-white p-5'>
        <div className="bg-main/5 p-8 rounded-xl text-center max-w-100 w-full lg:max-w-150 lg:py-20 relative mx-auto shadow-lg">

      { loading && <div className='absolute inset-0 bg-black/50 rounded-md flex justify-center items-center '><Loader className='animate-spin text-white'/></div>}
            <h2 className="text-mediumseagreen text-2xl font-bold mb-5 color-[mediumseagreen]" style={{color: 'mediumseagreen'}}>
                Verify your email
            </h2>
            <p className="text-gray-500 text-sm max-w-88 mx-auto max-sm:text-xs">
                We sent a verification code to your email address <span className='font-semibold text-gray-700'>{user?.email}</span>. Check your inbox and enter the code below.
            </p>

            <form  className="mt-6">
                <div className="flex gap-2 max-vs:gap-1 justify-between max-w-88 w-full mx-auto">
                 
                    {inputs.map((val, index) => (
                      
                        <input
                            key={index}
                            value={val}
                            ref={(e) => (inputRef.current[index] = e)}
                            onKeyDown={(e) => handelKey(index, e.key)}
                            onChange={(e) => handleInput(index, e.target.value)}
                            className="h-12 w-10 max-vs:w-7 max-vs:h-7 bg-[#1b334a] border border-white/20 text-center outline-none focus:ring-2 focus:ring-mediumseagreen rounded-md text-xl text-white font-bold transition-all "
                            style={{ focusOutlineColor: 'mediumseagreen' }}
                        />
                    ))}
                </div>

         
            </form>

         <p className="mt-8 text-sm text-gray-600 text-center max-vs:text-xs">
          Didn't receive the code?{" "}
         <span
           onClick={handleResend}
          className="text-main font-medium cursor-pointer underline"
          >
         Resend Code
       </span>
        </p>
        </div>
        </div>
    );
}

export default EmailVerify;