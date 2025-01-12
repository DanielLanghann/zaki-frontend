import HeaderNavigation from "./components/HeaderNavigation";
import SideNavigation from "./components/SideNavigation";

const Navigation = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <HeaderNavigation />
            <SideNavigation />
            <main className="pl-64 pt-16">
                <div className="p-6">
                    {children}
                </div>
            </main>
        </div>
    );
};
export default Navigation;