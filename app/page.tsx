import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import Logo from "@/components/icons/Logo";
import Footer from "@/components/ui/Footer";

export default async function Index() {
    const canInitSupabaseClient = () => {
        // This function is just for the interactive tutorial.
        // Feel free to remove it once you have Supabase connected.
        try {
            createClient();
            return true;
        } catch (e) {
            return false;
        }
    };

    const isSupabaseConnected = canInitSupabaseClient();

    return (
        <div className="flex flex-col items-center flex-1 w-full gap-20">
            <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
                <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
                    <div className="grow-0">
                        <div className="">
                            <a
                                className="flex items-center justify-center gap-2"
                                href=""
                            >
                                <Logo
                                    fill="white"
                                    width="35"
                                    height="35"
                                />
                                <span className="text-4xl">ℭ𝔩𝔞𝔰𝔰𝔔𝔲𝔢𝔰𝔱</span>
                            </a>
                        </div>
                    </div>
                    {isSupabaseConnected && <AuthButton />}
                </div>
            </nav>

            <div className="flex flex-col flex-1 max-w-4xl gap-20 px-3 opacity-0 animate-in">
                <Header />
                <main className="flex flex-col flex-1 gap-6"></main>
            </div>

            <Footer />
        </div>
    );
}
