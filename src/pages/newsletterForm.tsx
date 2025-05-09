const NewsletterForm =()=>{
    return(
        <form className="w-full">
            <div className="block">
                <label className="font-semibold">Email Address</label>
                <input className="mt-2 mb-4 outline-none p-3 rounded-lg shadow-xs border border-[#999ca7] block w-full" type="email" placeholder="email@company.com" />
            </div>
            <button className="w-full shadow-sm text-center bg-[#24263c] text-[#ffffff] font-semibold text-base p-3 rounded-sm">Subscribe to monthly newsletter</button>
        </form>
    )
}

export default NewsletterForm