import CardContent from './CardContent';
import CardImage from './CardImage';
import CardActions from './CardActions';
import BottomToolbar from './BottomToolbar';

interface MobileCardProps {
    userName?: string;
}

export default function MobileCard({ userName = 'precrew' }: MobileCardProps) {
    return (
        <div
            className="h-[762px] flex flex-col relative bg-cover bg-center"
            style={{
                backgroundImage: "url('../../../assets/images/Default WhatsApp background for people who lost it_ Requested by u_Marvin_der_kuhle_.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-gray-300 opacity-50 pointer-events-none " />

            <div className="flex-1 p-4 relative">
                <div className="flex justify-center items-center">
                    <div className="bg-white backdrop-blur-sm px-4 py-1 rounded-full w-[70px]">
                        <span className="text-sm text-gray-600 font-bold">Today</span>
                    </div>
                </div>
                <div className="bg-white rounded-3xl shadow-sm p-4 mt-4 w-[270px]">
                    <CardImage />
                    <CardContent userName={userName} />
                    <CardActions />
                </div>
            </div>
            <BottomToolbar />
        </div>
    );
}

