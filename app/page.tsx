export default function Home() {
    return (
        <main>
            {/* Temporary elements to force the page to be scrollable */}
            {[...Array(100)].map(element => {
                return (
                    <p key={element}>
                        element
                    </p>
                );
            })}
        </main>
    );
}
