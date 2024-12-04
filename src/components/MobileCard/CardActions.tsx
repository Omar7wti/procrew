import { ExternalLink, Phone, ArrowLeft } from 'lucide-react';
import ActionButton from './ActionButton';

export default function CardActions() {
    const handleDone = () => {
        console.log('Done clicked');
    };

    return (
        <div className="space-y-1 mt-4">
            <hr></hr>
            <ActionButton
                icon={<ExternalLink className="w-5 h-5" />}
                label="Visit our website"
                onClick={() => window.open('https://example.com', '_blank')}
            />
            <hr></hr>
            <ActionButton
                icon={<Phone className="w-5 h-5" />}
                label="Call us"
                onClick={() => window.location.href = 'tel:+1234567890'}
            />
            <hr></hr>
            <ActionButton
                icon={<ArrowLeft className="w-5 h-5" />}
                label="Done"
                onClick={handleDone}
            />
        </div>
    );
}