import { ArrowLeft, Check, CheckCheck, ChevronDown, Filter, Plus, Search, Users } from "lucide-react"

const ChatsPage = () => {

    const chats = [
        {
            img: "",
            name: "Devansh",
            time: "5m",
            message: "This is the previous chatThis is the previous chatThis is the previous chatThis is the previous chat",
            readreceipt: true
        },
        {
            img: "",
            name: "Ishani",
            time: "8yr",
            message: "This is the previous chatThis is the previous chatThis is the previous chatThis is the previous chat",
            readreceipt: true
        },
        {
            img: "",
            name: "Ujjwal",
            time: "1h 50m",
            message: "This is the previous chatThis is the previous chatThis is the previous chatThis is the previous chat",
            readreceipt: true
        }
    ]

    const truncateMessage = (message, length = 69) => {
        if (!message) return '';
        return message.length > length ? message.substring(0, length) + "..." : message;
    };



    return (
        <div className="w-full px-4">
            <div className="flex items-center justify-between  py-3">
                <ArrowLeft />
                <div className="flex gap-2 items-center">
                    <img src="https://img.icons8.com/ios/50/228BE6/beach-ball.png" />
                    <div className="flex flex-col font-semibold">
                        <div>BlueBall</div>
                        <div className="text-sm text-gray-500">Inbox</div>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <Search className="text-gray-500 w-6" />
                    <div className="border-2 border-solid  rounded-md p-0.5"><Plus className="w-6" /></div>
                </div>
            </div>
            <div className="flex flex-col items-center py-2 ">
                <div className="flex bg-gray-200 w-fit p-0.5 font-bold text-sm rounded-sm">
                    <button className="px-10 py-0.5 bg-white shadow-md">Messages</button>
                    <button className="px-10 py-0.5 font-semibold text-gray-500">Segments</button>
                </div>
                <div className="flex flex-row py-3 w-full justify-between text-sm">
                    <div className="flex gap-1.5 items-center hover:bg-gray-200 rounded-md px-2">
                        <Users className="w-4 " />
                        <div className="font-bold">All</div>
                        <div className=" text-blue-600 font-semibold bg-cyan-100 px-1.5 rounded-full">232</div>
                        <ChevronDown className="w-4 hover:bg-gray-200 rounded-md" />
                    </div>
                    <div className="flex gap-1.5 items-center hover:bg-gray-200 rounded-md px-2">
                        <Filter className="w-4 " />
                        <div className="font-bold">Oldest</div>
                        <ChevronDown className="w-4 " />
                    </div>
                </div>
            </div>
            <div>
                {chats.map((chat, index) => {
                    const truncatedMessage = truncateMessage(chat.message);
                    return (
                        <div key={index} className="flex flex-col border-b-1 gap-1 px-1.5 rounded-lg hover:bg-gray-200 border-gray-500">
                            <div className="flex  items-center font-bold justify-between w-full py-1 ">
                                <div className="flex items-center gap-1.5">
                                    <div><img className="w-8" src="https://img.icons8.com/nolan/64/user-default.png" /></div>
                                    <div>{chat.name}</div>
                                    <div><img className="w-5" src="https://img.icons8.com/material-two-tone/50/chat.png" /></div>
                                </div>
                                <div className="text-gray-500 font-semibold text-sm">{chat.time}</div>
                            </div>
                            <div className="flex items-end">
                                <div>{truncatedMessage}</div>
                                {chat.readreceipt ? (<CheckCheck className="w-6 " />) : (<Check className="w-6" />)}
                            </div>
                            <div className="py-[0.75px] bg-gray-100 w-full "> </div>
                        </div>)
                })

                }
            </div>
        </div>
    )
}

export default ChatsPage