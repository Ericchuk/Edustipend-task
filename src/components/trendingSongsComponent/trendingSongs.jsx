import './trendingSong.css';
import Button from '../button/button';
import { AiOutlinePlus } from 'react-icons/ai'


export default function TrendingSongs(){
    const datas = [
        {
            id:0,
            title:"Unavailable by",
            artist:"Davido"
        },
        {
            id:1,
            title:"Unavailable by",
            artist:"Davido"
        },
        {
            id:2,
            title:"Unavailable by",
            artist:"Davido"
        },
        {
            id:3,
            title:"Unavailable by",
            artist:"Davido"
        },
        {
            id:4,
            title:"Unavailable by",
            artist:"Davido"
        },
    ]

    const data = datas.map((item) => {
        return(
            <section key={item.id}>
                <h4>{item.title} <i>{item.artist}</i></h4>
                {/* <img src={} alt="view more" /> */}
                <AiOutlinePlus />
            </section>
        )
    })
    return(
        <aside className="trending-songs">
            <h3>Trending songs</h3>
            {data}
            <Button msg="View more" />
        </aside>
    )
}