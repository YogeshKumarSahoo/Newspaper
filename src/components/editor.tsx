interface EditorProps {
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    title: string;
    content: string;
}

export const Editor = ({content, title, setContent, setTitle }: EditorProps) => {
    return <div className="w-6/8 h-full">
        <input type="text" placeholder="Title" className="outline-none text-6xl font-bold" value={title} onChange={e=>setTitle(e.target.value)}/>
        <textarea id="message" rows={20} value={content} className="outline-none text-4xl block p-2.5 w-full text-gray-900 rounded-lg focus:ring-blue-500 focus:border-transparent" placeholder="Tell your story..."
            onChange={e => setContent(e.target.value)}
        ></textarea>
    </div>
}