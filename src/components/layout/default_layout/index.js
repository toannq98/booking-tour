import Header from "~/components/layout/components/header";
import Footer from "~/components/layout/components/footer";

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;