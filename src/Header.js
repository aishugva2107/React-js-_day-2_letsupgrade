import Navlink from "./Navlink";
import Service from './Service';

function Header(){

    const services=[
        {
            title:"Web Development",
            desc:"You can add webfonts, meta tags, or analytics to this file.The build step will place the bundled scripts into the <body> tag.",
            image:"https://www.whitesourcesoftware.com/wp-content/media/2021/05/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVlMjA1MWQxOWY2NTUuanBnJnZlcnNpb249MDAwMCZzaWc9NGJhMDhmZWU5ZDQ4ZGVjNjcwNzFlNmFhMDg3NzliNzA3D.jpeg"
        },
        {
            title:"App Development",
            desc:"You can add webfonts, meta tags, or analytics to this file.The build step will place the bundled scripts into the <body> tag.",
            image:"https://appinventiv.com/wp-content/uploads/sites/1/2019/10/Android-app-development-cost-1.png"
        },
        {
            title:"App Development",
            desc:"You can add webfonts, meta tags, or analytics to this file.The build step will place the bundled scripts into the <body> tag.",
            image:"https://appinventiv.com/wp-content/uploads/sites/1/2019/10/Android-app-development-cost-1.png"
        },
        {
            title:"App Development",
            desc:"You can add webfonts, meta tags, or analytics to this file.The build step will place the bundled scripts into the <body> tag.",
            image:"https://appinventiv.com/wp-content/uploads/sites/1/2019/10/Android-app-development-cost-1.png"
        }
    ]


    return (
        <div>
            <h1 style={{marginLeft:"15%"}}>All Services</h1>
            <div className="container">

                
                {
                    services.map((service,index)=>(

                        <Service key={index} title={service.title} desc={service.desc} image={service.image} />

                    ))
                }
            </div>

        </div>

        
    )

}


export default Header;