interface ActionButtonProps {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    className?: string;
}

export default function ActionButton({ icon, label, onClick, className = "" }: ActionButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center space-x-2 py-3 px-1 text-[#40A0FF] hover:bg-gray-50 rounded-lg transition-colors ${className}`}
        >
            {icon}
            <span className="font-medium">{label}</span>
        </button>
    );
}