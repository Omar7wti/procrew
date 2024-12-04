import { SignalIcon, WifiIcon, BatteryIcon } from '../MobileCard/icons/StatusIcons';

export default function StatusBar() {
    return (
        <div className="flex justify-between items-center px-6 text-black text-sm font-medium h-7 relative">
            {/* Left side: Time */}
            <div className="flex items-center z-10">
                <span className="font-semibold">10:38</span>
            </div>

            {/* Center notch with camera icon aligned to the right */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[100px] h-[20px] bg-black rounded-full translate-y-[10px] flex justify-end items-center pr-2">
                <img
                    src="../../../assets/images/lens-svgrepo-com.svg"
                    alt="Camera Icon"
                    className="w-3 h-3"
                />
            </div>

            {/* Right side: Status Icons */}
            <div className="flex items-center gap-2 z-10">
                <SignalIcon />
                <WifiIcon />
                <BatteryIcon />
            </div>
        </div>
    );
}
