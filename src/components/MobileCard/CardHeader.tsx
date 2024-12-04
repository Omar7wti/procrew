import { StickerIcon } from './icons/StickerIcon';

export default function CardHeader() {
    return (
        <div className="flex items-center space-x-2 px-1 pt-1 m-[10px]">
            <div className="w-8 h-8 rounded-full bg-[#FF385C] flex items-center justify-center">
                <StickerIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-black font-medium">communicate</span>
        </div>
    );
}