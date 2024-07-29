const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-2 m-4">Contact Us Page</h1>
            <form>
                <input 
                type="text" placeholder="name"
                className="border-indigo-400 border-2 m-2 p-2"    
                />
                <input 
                type="text" placeholder="message"
                className="border-indigo-400 border-2 m-2 p-2"
                />
                <button className="border-indigo-400 border-2 m-2 p-2 rounded-lg bg-indigo-200 hover:cursor-pointer">Submit</button>
            </form>
        </div>
    );
}

export default Contact;