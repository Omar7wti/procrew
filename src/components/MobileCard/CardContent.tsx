
interface CardContentProps {
    userName: string;
}

export default function CardContent({ userName }: CardContentProps) {
    return (
        <div className="space-y-2 px-1">
            <p className="text-lg font-medium text-gray-900">
                Hello {`{{${userName}}}`},<br />
                how are you doing?
            </p>
            <p className="text-gray-400 text-sm">
                Thank you for your time.
            </p>
            <div className="text-xs text-gray-400 text-right mt-1">
                10:30
            </div>
        </div>
    );
}