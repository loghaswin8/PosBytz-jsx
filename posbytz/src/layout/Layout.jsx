import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import ApiService from '../api/ApiService';


export default function Layout({ children }) {
    const [navbarData, setNavbarData] = useState(null);
    const [footerData, setFooterData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchNavbarData = async () => {
        try {
            const data = await ApiService.getNavbarData();
            console.log('Fetched navbar data:', data);
            setNavbarData(data);
        } catch (error) {
            console.error('Error fetching navbar data:', error);
            setError('Failed to load data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const fetchFooterData = async () => {
        try {
            const data = await ApiService.getFooterData();
            console.log('Fetched footer data:', data); 
            setFooterData(data); 
        } catch (error) {
            console.error('Error fetching footer data:', error);
            setError('Failed to load data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchNavbarData();
        fetchFooterData();
    }, []);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!navbarData) return <div>No Navbar data available</div>;
    if (!footerData) return <div>No Footer data available</div>;


    return (
        <>
            {navbarData && navbarData.length > 0 && (
                <Navbar
                    navbarItems={navbarData[0].navbarItems || []}
                    companyDropdownItems={navbarData[0].companyDropdownItems || []}
                    exploreDropdownItems={navbarData[0].exploreDropdownItems || []}
                    partnerDropdownItems={navbarData[0].partnerDropdownItems || []}
                    languageDropdownItems={navbarData[0].languageDropdownItems || []}
                />
            )}
            <main>{children}</main>
            {footerData && footerData.length > 0 && (
                <Footer footerData={footerData[0].footerItems} />
            )}

        </>
    );
}
