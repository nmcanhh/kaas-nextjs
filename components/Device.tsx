const DeviceScreen = () => {
    return (
        <div>
            <span className="hidden sm:block md:hidden">SM</span>
            <span className="hidden md:block lg:hidden">MD</span>
            <span className="hidden lg:block xl:hidden">LG</span>
            <span className="hidden xl:block 2xl:hidden">XL</span>
            <span className="hidden 2xl:block">XXL</span>
            <span className="hidden 3xl:block">XXXL</span>
        </div>
    );
};

export default DeviceScreen;
