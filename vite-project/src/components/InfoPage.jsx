import { Briefcase, Clock, Code, Contact, DollarSign, MessageCircle, MoreHorizontal, PhoneCall } from "lucide-react";

const InfoPage = () => {
    return (
        <div className="flex flex-col gap-1 px-3 h-full m-3">
            <div className="flex justify-center flex-col items-center">
                <div className="rounded-full overflow-hidden h-16 w-16 border-4 border-gray-200">
                    <img className="h-full w-auto " src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" alt="Profile" />
                </div>
                <div className="font-bold">Oguz</div>
                <div className="text-sm text-gray-400 font-semibold">11:59pm in Ankara, Turkey</div>
            </div>

            <div className="flex justify-around pt-2 text-sm font-semibold">
                <div className="flex flex-col items-center gap-1">
                    <PhoneCall />
                    <div className="text-gray-400">Call</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <MessageCircle />
                    <div className="text-gray-400">Message</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <MoreHorizontal />
                    <div className="text-gray-400">More</div>
                </div>
            </div>

            <div className="flex justify-around pt-2 text-sm font-semibold">
                <div className="p-2 border-2 border-gray-300 rounded-md flex flex-col items-center">
                    <div className="text-gray-400 flex items-start gap-1">
                        <DollarSign />
                        <div className="">Revenue</div>
                    </div>
                    <div className="text-xl">$3,452</div>
                    <div className="text-gray-400 flex items-start gap-1">
                        <div className="">3 orders</div>
                    </div>
                </div>
                <div className="p-2 border-2 border-gray-300 rounded-md flex flex-col items-center">
                    <div className="text-gray-400 flex items-center gap-2">
                        <Code />
                        <div className="">Web Vitals</div>
                    </div>
                    <div className="text-xl">4,532</div>
                    <div className="text-gray-400 flex items-start gap-1">
                        <div className="">4 views</div>
                    </div>
                </div>
            </div>

            <div className="flex mx-auto mt-2 bg-gray-200 w-full justify-around p-1.5 font-bold text-sm rounded-sm">
                <button className="px-5 py-0.5 bg-white shadow-md"><Contact /></button>
                <button className="px-5 py-0.5 text-gray-500"><Briefcase /></button>
                <button className="px-5 py-0.5 text-gray-500"><Clock /></button>
            </div>

            <div className="mt-4 p-2 border-t border-gray-300">
                <div className="font-semibold text-lg font">Information</div>
                <div className="flex flex-row gap-1 text-sm">
                    <div className="text-black font-semibold">Phone:</div>
                    <div>9939399399</div>
                </div>
                <div className="flex flex-row gap-1 text-sm">
                    <div className="text-black font-semibold">Email:</div>
                    <div>ddd@gmail.com</div>
                </div>
                <div className="flex flex-row gap-1 text-sm">
                    <div className="text-black font-semibold">Email:</div>
                    <div>ddd@gmail.com</div>
                </div>
            </div>

            <div className="mt-4 p-3 border-t border-gray-300">
                <h2 className="font-semibold text-lg">Tags</h2>
                <div className="mt-2 flex gap-2 flex-wrap text-sm text-gray-600">
                    <span className=" bg-gray-300 px-3 py-1 ">Web Development</span>
                    <span className=" bg-gray-300 px-3 py-1 ">JavaScript</span>
                    <span className=" bg-gray-300 px-3 py-1 ">React</span>
                    <span className=" bg-gray-300 px-3 py-1 ">Node.js</span>
                    <span className=" bg-gray-300 px-3 py-1 ">Machine Learning</span>
                </div>
            </div>
        </div>
    );
};

export default InfoPage;
