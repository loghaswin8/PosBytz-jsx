import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

export default function Layout({ children }) {
    const [homeData, setHomeData] = useState(null);
    const [navbarData, setNavbarData] = useState(null);
    const [footerData, setFooterData] = useState(null);

    const fetchData = async () => {
        try {
            // Fetch data from the local JSON file
            const response = await axios.get('/data/siteData.json');
            const homeInfo = response.data.home[0]; // Access the first element of the home array
            setHomeData(homeInfo);
            console.log('Fetched home data:', homeInfo); // Log fetched data

            // Fetch navbar and footer data from the same JSON file
            const navbarInfo = response.data.navbar; // Assuming the navbar data is structured similarly
            const footerInfo = response.data.footer; // Assuming the footer data is structured similarly
            setNavbarData(navbarInfo);
            setFooterData(footerInfo);
        } catch (error) {
            console.error('Error fetching home data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!homeData || !navbarData || !footerData) {
        return <div>Loading...</div>; // Show a loading state while data is being fetched
    }

    return (
        <>
            <section>
                <Navbar
                    navbarItems={navbarData.navbarItems}
                    companyDropdownItems={navbarData.companyDropdownItems}
                />
                {children}
                <Footer footerData={footerData.footerData} />
            </section>
        </>
    );
}
