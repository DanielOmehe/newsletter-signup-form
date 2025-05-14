import useFormStore from "./useFormStore"

const NewsletterForm = () => {
    const { subscribeToNewsletter, isError, setEmail, email } = useFormStore();

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handleSubscription = (e: React.FormEvent) => {
        e.preventDefault();
        subscribeToNewsletter();
    };
    
    return (
        <form className="w-full">
            <div className="block">
                <div className="flex items-center justify-between">
                    <label className="font-semibold">Email Address</label>
                    <p className={`${isError ? 'block text-[#ff6257] text-xs font-bold' : 'hidden'}`}>Valid Email Required</p>
                </div>
                <input value={email} onChange={handleEmailInput} className={`mt-2 mb-4 outline-none p-3 rounded-lg shadow-xs border border-[#999ca7] ${isError ? 'border-[#ff6257] text-[#ff6257]' : 'border-[#999ca7]'} block w-full`} type="email" placeholder="email@company.com" />
            </div>
            <button className="cursor-pointer hover:bg-[#ff6257] hover:shadow-2xl hover:shadow-red-200 w-full shadow-md text-center bg-[#24263c] text-[#ffffff] font-semibold text-base p-3 rounded-sm" onClick={handleSubscription}>Subscribe to monthly newsletter</button>
        </form>
    )
}

export default NewsletterForm