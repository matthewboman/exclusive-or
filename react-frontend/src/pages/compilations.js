import Album from "../components/album.js"

export default function Compilations() {

    const compilations = [
        // {
        //     title:        "",
        //     release_date: "",
        //     info:         "",
        //     image_url:    "",
        //     html:         ``,
        //     bandcamp:     "",
        //     spotify:      ""
        // },
        {
            title:        "Long Blue Drive",
            release_date: "May 22, 2022",
            info:         "Collaboration with Nesting Doll",
            image_url:    "https://f4.bcbits.com/img/a2790042956_16.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=4189595960/size=small/bgcol=333333/linkcol=e99708/track=1231039156/transparent=true/" seamless><a href="https://brokensoundtapes.bandcamp.com/album/unearthd-volume-ii">UNEARTH&#39;D Volume II by XOR (featuring Nesting Doll)</a></iframe>`,
            bandcamp:     "https://brokensoundtapes.bandcamp.com/album/unearthd-volume-ii",
            spotify:      ""
        },
        {
            title:        "Growing",
            release_date: "February 14, 2022",
            info:         "Written for Modular on the Mall's 'Rest in Patch: A Tribute to Patch Node'",
            image_url:    "https://f4.bcbits.com/img/a2326318924_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=30436996/size=small/bgcol=333333/linkcol=e99708/track=2573146530/transparent=true/" seamless><a href="https://modularonthemall.bandcamp.com/album/rest-in-patch-a-tribute-to-patch-node">Rest in Patch: A Tribute to Patch Node by XOR (Asheville)</a></iframe>`,
            bandcamp:     "https://modularonthemall.bandcamp.com/album/rest-in-patch-a-tribute-to-patch-node",
            spotify:      ""
        },
        {
            title:        "Asheville Cares About Beer",
            release_date: "January 8, 2021",
            info:         "All-Electribe piece recorded in one take. Written for Korg Electribe Showcase by Copyright 420",
            image_url:    "https://f4.bcbits.com/img/a2774410900_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2637886911/size=small/bgcol=333333/linkcol=e99708/track=1824640851/transparent=true/" seamless><a href="https://copyright420.bandcamp.com/album/korg-electribe-showcase-disc-1">Korg Electribe Showcase Disc 1 by KORG ELECTRIBE SHOWCASE</a></iframe>`,
            bandcamp:     "https://copyright420.bandcamp.com/album/korg-electribe-showcase-disc-1",
            spotify:      ""
        }
    ] 

    return (
        <div className="container">
            <div className="row">
                {
                    compilations.map((compilation) => <Album key={compilation.title} album={compilation} />)
                }   
            </div>
        </div>
    )
} 