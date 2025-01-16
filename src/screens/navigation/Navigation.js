import HeaderNavigation from "./components/HeaderNavigation";
import SideNavigation from "./components/SideNavigation";
import {useState} from "react";

const Navigation = ({ children }) => {

    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="bg-gray-100">
            <HeaderNavigation />
            <SideNavigation isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
            <main className={`flex-1 transition-all duration-300 mt-16 bg-green-600 ${
                isExpanded ? 'pl-64' : 'pl-16'
            }`}>
                    {children}
            </main>
        </div>
    );
};
export default Navigation;