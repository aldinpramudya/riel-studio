import Button from "./button"
import { LuSend } from "react-icons/lu";

export default function Form() {
     return (
        <div className="border border-[#FF4F04] w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-6 sm:px-8 md:px-10 py-8 md:py-10">
            <p className="text-xl sm:text-2xl md:text-[25px] font-bold text-[#FF4F04]">
                Send a Message
            </p>
            
            {/* Form */}
            <div className="pt-5">
                <form action="">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullname" className="font-bold text-sm md:text-base">
                            Full Name
                        </label>
                        <input 
                            id="fullname"
                            type="text" 
                            className="mt-2 border border-[#343434] rounded-sm flex w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#FF4F04] focus:border-transparent transition-all" 
                            placeholder="Enter your full name" 
                        />
                    </div>
                    
                    {/* Email */}
                    <div className="pt-4 sm:pt-5">
                        <label htmlFor="email" className="font-bold text-sm md:text-base">
                            Email
                        </label>
                        <input 
                            id="email"
                            type="email" 
                            className="mt-2 border border-[#343434] rounded-sm flex w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#FF4F04] focus:border-transparent transition-all" 
                            placeholder="Enter your email address" 
                        />
                    </div>
                    
                    {/* Subject */}
                    <div className="pt-4 sm:pt-5">
                        <label htmlFor="subject" className="font-bold text-sm md:text-base">
                            Subject Interested In
                        </label>
                        <select 
                            id="subject"
                            className="mt-2 border border-[#343434] rounded-sm flex w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#FF4F04] focus:border-transparent transition-all"
                        >
                            <option value="">Choose subject you interested in</option>
                            <option value="web-development">Web Development</option>
                            <option value="ui-ux-design">UI/UX Design</option>
                            <option value="consultation">Consultation</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    {/* Message */}
                    <div className="pt-4 sm:pt-5">
                        <label htmlFor="message" className="font-bold text-sm md:text-base">
                            Message Detail
                        </label>
                        <textarea 
                            id="message"
                            className="mt-2 border border-[#343434] rounded-sm flex w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#FF4F04] focus:border-transparent transition-all resize-none" 
                            rows={6} 
                            placeholder="Tell RIEL.studio about your idea, project, and requirements..."
                        ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="pt-6 sm:pt-8">
                        <Button 
                            className="text-sm sm:text-base w-full sm:w-auto" 
                            label="Send The Message" 
                            icon={<LuSend />} 
                            type="submit" 
                        />
                    </div>
                </form>
            </div>
            {/* Form End */}
        </div>
    )
}