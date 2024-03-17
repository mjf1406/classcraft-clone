import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Body from "@/components/Body";
import Footer from "@/components/ui/Footer";
import NavAuthenticated from "@/components/ui/authenticated/NavAuthenticated";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    return (
        <div className="flex flex-col items-center flex-1 w-full gap-20">
            <div className="w-full">
                <div className="py-6 font-bold text-center text-text-900 dark:text-text-50 bg-primary-500">
                    This is a protected page that you can only see as an
                    authenticated user
                </div>
                <NavAuthenticated />
            </div>

            <div className="flex flex-col flex-1 max-w-4xl gap-20 px-3 opacity-0 animate-in">
                <Body />
                <main className="flex flex-col flex-1 gap-6"></main>
            </div>

            <Footer />
        </div>
    );
}
