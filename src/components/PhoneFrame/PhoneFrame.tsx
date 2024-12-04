import StatusBar from './StatusBar';

interface PhoneFrameProps {
    children: React.ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
    return (
        <div className="relative mx-auto my-8 w-[390px] h-[844px] bg-[#F5F1EA] rounded-[54px] shadow-2xl border-[10px] border-black">
            {/* Buttons on the sides */}
            {/* Left side buttons */}
            <div
                className="absolute top-[100px] left-[-12px] w-[10px] h-[25px] bg-black rounded-r-lg shadow-md"
                style={{ boxShadow: '3px 0 5px rgba(0, 0, 0, 0.3)' }}
            />
            <div
                className="absolute top-[150px] left-[-12px] w-[10px] h-[50px] bg-black rounded-r-lg shadow-md"
                style={{ boxShadow: '3px 0 5px rgba(0, 0, 0, 0.3)' }}
            />
            <div
                className="absolute top-[220px] left-[-12px] w-[10px] h-[50px] bg-black rounded-r-lg shadow-md"
                style={{ boxShadow: '3px 0 5px rgba(0, 0, 0, 0.3)' }}
            />

            {/* Right side button */}
            <div
                className="absolute top-[200px] right-[-12px] w-[10px] h-[100px] bg-black rounded-l-lg shadow-md"
                style={{ boxShadow: '-3px 0 5px rgba(0, 0, 0, 0.3)' }}
            />

            {/* Screen content */}
            <div className="relative h-full w-full bg-[#f4f4f4] overflow-hidden rounded-[54px]">
                <StatusBar />
                {children}
            </div>

            {/* Bottom indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black rounded-full z-[1]" />
        </div>
    );
}
