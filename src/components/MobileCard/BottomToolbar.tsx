import { Plus, Camera, Mic, Smile, Sticker } from 'lucide-react'

export default function BottomToolbar() {
    return (
        <div className="h-[72px] bg-[#F4F4F4] border-t flex items-center pr-4 gap-2 mb-[20px] z-[1]">
            {/* Add attachment button */}
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100">
                <Plus className="h-6 w-6" />
                <span className="sr-only">Add attachment</span>
            </button>

            {/* Message input area */}
            <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-full bg-white">
                <button className="p-1 rounded-full text-gray-500 hover:text-gray-700">
                    <Smile className="h-5 w-5" />
                    <span className="sr-only">Add emoji</span>
                </button>

                <input
                    type="text"
                    placeholder="Message"
                    className="flex-1 bg-transparent border-0 focus:outline-none w-[160px]"
                />

                {/* Camera icon inside the message area */}
                <button className="p-1 rounded-full text-gray-500 hover:text-gray-700">
                    <Camera className="h-5 w-5" />
                    <span className="sr-only">Take photo</span>
                </button>
            </div>

            {/* stickerIcon  inside the mic button */}
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700">
                <Sticker className="h-5 w-5" />
                <span className="sr-only">Take photo</span>
            </button>

            {/* Mic button */}
            <button className="p-2 rounded-full text-gray-500 hover:bg-[#00A884]/90">
                <Mic className="h-5 w-5" />
                <span className="sr-only">Record voice message</span>
            </button>
        </div>
    )
}
