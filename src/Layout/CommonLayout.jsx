export default function CommonLayout({children}) {
    return (
        <div className="px-4 md:px-14 overflow-x-hidden">
            {children}
        </div>
    );
}
