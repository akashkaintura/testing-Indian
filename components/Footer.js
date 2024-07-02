export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Spice Paradise</h3>
                        <p>Authentic Indian Cuisine</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                        <p>123 Spice Street, Flavortown</p>
                        <p>Phone: (555) 123-4567</p>
                        <p>Email: info@spiceparadise.com</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-lg font-semibold mb-2">Hours</h4>
                        <p>Monday - Friday: 11am - 10pm</p>
                        <p>Saturday - Sunday: 12pm - 11pm</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2024 Spice Paradise. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}