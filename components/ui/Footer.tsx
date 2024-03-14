export default function Footer() {
    return (
        <footer className="flex justify-center w-full p-8 text-xs text-center border-t border-t-foreground/10">
            <p>&copy; ClassQuest, Inc.</p>
            <p className="ml-4">
                Powered by{" "}
                <a
                    href="https://supabase.com"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                >
                    Supabase
                </a>
            </p>
            <p className="ml-4">
                Hosted on{" "}
                <a
                    href="https://vercel.com/"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                >
                    Vercel
                </a>
            </p>
        </footer>
    );
}
