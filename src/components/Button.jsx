export default function Button({ children, variant = 'red' }) {
    const styles = {
        red: 'bg-brand-red text-white hover:opacity-90 active:scale-90',
        blue: 'bg-brand-blue text-white hover:opacity-90 active:scale-90',
        brown: 'bg-brand-brown text-white hover:opacity-90 active:scale-90',
        outline: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
    }

    return (
        <button className={`font-semibold px-6 py-3 rounded-4xl cursor-pointer ${styles[variant]}`}>
            {children}
        </button>
    )
}