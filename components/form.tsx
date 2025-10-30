import Button from "./button"
import { LuSend } from "react-icons/lu";

export default function Form() {
    return (
        <div className="border border-(--main-color) md:w-[480px] w-[300px] px-10 py-10">
            <p className="text-[25px] font-bold text-(--main-color)">
                Send a Message
            </p>
            {/* Form */}
            <div className="pt-5">
                <form action="">
                    <div>
                        <label htmlFor="" className="font-bold">Full Name</label>
                        <input type="text" className="mt-2 border border-[#343434] rounded-sm flex w-full px-5 py-3" placeholder="Enter your full name" />
                    </div>
                    <div className="pt-5">
                        <label htmlFor="" className="font-bold">Email</label>
                        <input type="email" className="mt-2 border border-[#343434] rounded-sm flex w-full px-5 py-3" placeholder="Enter your email address" />
                    </div>
                    <div className="pt-5">
                        <label htmlFor="" className="font-bold">Subject Interested In</label>
                        <select className="mt-2 border border-[#343434] rounded-sm flex w-full px-5 py-3">
                            <option defaultValue="Choose subject you interested in" >Choose subject you interested in</option>
                            <option value="A">A</option>
                            <option value="A">A</option>
                        </select>
                    </div>
                    <div className="pt-5">
                        <label htmlFor="" className="font-bold">Message Detail</label>
                         <textarea className="mt-2 border border-[#343434] rounded-sm flex w-full px-5 py-3" rows={8} cols={80} placeholder="Tell RIEL.studio about your idea, project, and requirements..."></textarea>
                    </div>
                    <div className="pt-15">
                        <Button label="Send The Message" icon={<LuSend />} type="submit" />
                    </div>
                </form>
            </div>
            {/* Form End */}
        </div>
    )
}