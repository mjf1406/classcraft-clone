import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Body from "@/components/Body";
import Nav from "@/components/ui/Nav";
import Logo from "@/components/icons/Logo";
import Footer from "@/components/ui/Footer";

export default async function Index() {
    return (
        <div className="flex flex-col items-center flex-1 w-full gap-20">
            <Nav />

            <div className="flex flex-col flex-1 max-w-4xl gap-20 px-3 opacity-0 animate-in">
                <Body />
                <main className="flex flex-col flex-1 gap-6"></main>
            </div>

            <Footer />
        </div>
    );
}
