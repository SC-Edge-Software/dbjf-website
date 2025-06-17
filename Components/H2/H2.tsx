type H2Props = {
    children: React.ReactNode; 
};

export default function H2({ children }: H2Props) {
    return (
        <h2 className="text-white text-4xl font-bold text-center mb-8">
            {children}
        </h2>
    );
}
