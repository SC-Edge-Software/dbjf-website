import Paragraph from "../Paragraph/Paragraph";

export default function Footer() {
    return (
        <footer className="
            flex
            justify-center
            items-center
            p-10
            bg-dbjf-dark-gray">
            <Paragraph className="
                text-center
                text-xs">
                © 2025 DB & JF Home Improvements, LLC. All Rights Reserved.
            </Paragraph>
        </footer>
    );
}
