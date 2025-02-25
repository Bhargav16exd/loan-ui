export function Footer() {

    return(
        <footer className="py-6">
            <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:justify-between">

                {/* Left Section */}
                <div className="mb-4 md:mb-0">
                <h2 className="text-lg font-semibold">Fi Finanace.org</h2>
                <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
                </div>

                {/* Center Links */}
                <div className="flex space-x-6">
                <a href="" >Privacy Policy</a>
                <a href="" >Terms of Service</a>
                <a href="" >Contact Us</a>
                </div>

            
            </div>
    </footer>
    )

}