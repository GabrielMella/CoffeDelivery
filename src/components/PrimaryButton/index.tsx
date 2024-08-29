import { MediumButton } from './styles';

interface ButtonProps {
    label: React.ReactNode;
}

export function PrimaryButton({label}: ButtonProps) {
    return <MediumButton>{label}</MediumButton>;
}