import useFetch from "../hooks/useFetch"
import './styles/residentCard.css'

const ResidentCard = ({ url }) => {

    const [resident] = useFetch(url)


    return (
        <article className="resident">
            <header className="resident_header">
                <img className="resident_img" src={resident?.image} alt="" />
                <div className="resident_status">
                    <div className={`resident_status_circle ${resident?.status}`}></div>
                    <div className="resindent_status_label">{resident?.status}</div>
                </div>
            </header>
            <section className="resident_section">
                <h3 className="resident_name">{resident?.name}</h3>
                <hr className="resident_hr" />
                <ul className="resident_ul">
                    <li className="resident_li"><span className="resident_span">Specie</span><span className="resident_value">{resident?.species}</span></li>
                    <li className="resident_li"><span className="resident_span">Origin</span><span className="resident_value">{resident?.origin.name}</span></li>
                    <li className="resident_li"><span className="resident_span">Eppisodes where appear</span><span className="resident_value">{resident?.episode.length}</span></li>
                </ul>


            </section>
        </article>
    )
}

export default ResidentCard