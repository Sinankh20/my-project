import {prdMetadata} from  "../../data/prdContent.jsx"
export default function Header(){
    return (
        <div className="pb-2.5 border-b-2">
            <h1 className="text-2xl font-bold">{prdMetadata.title}</h1>
            <p className="italic">{prdMetadata.version}</p>
            <p>{prdMetadata.status}</p>
            <p>{prdMetadata.author}</p>
            {prdMetadata.stakeholders.map((person,index)=>{
                return (
                <div key={index}>
                    <p>{person.name} - {person.role}</p>
                </div>
                    )
            })}
        </div>
    )
}