function GlowingGradientButton() {
    return (
        <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-600 group-hover:duration-400"></div>
            <div className="relative px-7 py-6 bg-red-600 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div className="space-y-2">
                    <p className="text-white">Glowing Gradient Border</p>
                </div>
            </div>
        </div>
    );
}

export default GlowingGradientButton;