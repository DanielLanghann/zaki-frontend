import HeaderNavigation from "./components/HeaderNavigation";
import SideNavigation from "./components/SideNavigation";
import {useState} from "react";

const Navigation = ({ children }) => {

    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="min-h-screen bg-gray-100">
            <HeaderNavigation />
            <SideNavigation isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
            <main className={`transition-all duration-300 pt-16 min-h-screen bg-gray-100 ${
                isExpanded ? 'pl-64' : 'pl-16'
            }`}>
                    {children}
            </main>
        </div>
    );
};
export default Navigation;