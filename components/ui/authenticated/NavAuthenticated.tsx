import Logo from "@/components/icons/Logo";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";

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

export default function NavAuthenticated() {
    return (
        <nav className="flex justify-center w-full h-16 bg-accent-100">
            <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
                <div className="grow-0">
                    <div className="">
                        <a
                            className="flex items-center justify-center gap-2"
                            href=""
                        >
                            <Logo
                                fill="hsl(var(--primary-500))"
                                width="35"
                                height="35"
                            />
                            <span className="text-4xl font-extrabold text-primary-600 dark:text-primary-400">
                                ClassQuest
                            </span>
                        </a>
                    </div>
                </div>
                {isSupabaseConnected && <AuthButton />}
            </div>
        </nav>
    );
}
