import Album from "../components/album.js"

export default function Releases() {

    const albums = [
        {
            title:        "Ephemeral tracks, vol. 2",
            release_date: "June 9, 2023",
            info:         "Ambient, drone, and downtempo tracks. Written and recorded ad Bannik Knob.",
            image_url:    "https://f4.bcbits.com/img/a2256821936_16.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3922441199/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/ephemeral-tracks-vol-2">Ephemeral Tracks, vol. 2 by xor</a></iframe>`,
            bandcamp:     "https://xoravl.bandcamp.com/album/ephemeral-tracks-vol-2",
            spotify:      "https://open.spotify.com/album/3hW6Vh5f1b050IzZSkK2fy?si=h-Q1S2DzRF2OfXX3IkCLmw"
        },
        {
            title:        "beyond the tall trees somewhere",
            release_date: "April 28, 2023",
            info:         "5 song synthpop/darkwave EP. Mixed and mastered by Adam McDaniel at Drop of Sun",
            image_url:    "https://f4.bcbits.com/img/a2092478654_16.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1160131690/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/beyond-the-tall-trees-somewhere">beyond the tall trees somewhere by xor</a></iframe>`,
            bandcamp:     "https://xoravl.bandcamp.com/album/beyond-the-tall-trees-somewhere",
            spotify:      "https://open.spotify.com/album/3PBApVdacFrKqR15NjU7k9?si=8krnITUNSqONS8ebjtek0g"
        },
        {
            title:        "On the spot",
            release_date: "March 20, 2023",
            info:         "Modular piece written for Ashevile's Modular on the Spot, September 2022.",
            image_url:    "https://f4.bcbits.com/img/a2025630180_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=417905674/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/on-the-spot">on the spot by xor</a></iframe>`,
            bandcamp:     "https://xoravl.bandcamp.com/album/on-the-spot",
            spotify:      ""
        },
        {
            title:        "Ephemeral tracks, vol. 1",
            release_date: "March 18, 2022",
            info:         "3 ambient/downtempo tracks recorded as a single session. Recorded and mixed at Bannik Knob. Mastered by Kri Samadhi.",
            image_url:    "https://f4.bcbits.com/img/a0272502562_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2018047/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/ephemeral-ep-1">Ephemeral EP 1 by xor</a></iframe>`,
            bandcamp:     "https://xoravl.bandcamp.com/album/ephemeral-ep-1",
            spotify:      "https://open.spotify.com/album/0VuYI8LrtI9YR0Fqpnsshj?si=0y84LQCBRYackf75K4svKw"
        },
        {
            title:        "Long Shadows",
            release_date: "December 3, 2021",
            info:         "",
            image_url:    "https://f4.bcbits.com/img/a4098735292_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=2324987125/size=small/bgcol=333333/linkcol=0f91ff/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/track/long-shadows">Long Shadows by xor</a></iframe>`,
            bandcamp:     "https://xoravl.bandcamp.com/track/long-shadows",
            spotify:      ""
        },
        {
            title:        "XOR",
            release_date: "July 30, 2021",
            info:         "10 song darkwave/synthpop album written and recorded during quarantine. Mastered by Bryan Walthall.",
            image_url:    "https://f4.bcbits.com/img/a2868734555_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=922305637/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/xor">XOR by xor</a></iframe>`,
            bandcamp:     "https://xoravl.bandcamp.com/album/xor",
            spotify:      "https://open.spotify.com/album/0nSoeDg2hbTl4RBAxefSBz?si=v5vDapv5QB2iYIfs2CleTg"
        },
        {
            title:        "Sessions 4 & 2",
            release_date: "April 20, 2020",
            info:         "Genre-spanning electronic tracks written and recorded 2019-2020",
            image_url:    "https://f4.bcbits.com/img/a4059226071_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2085050368/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/sessions-4-2">sessions 4 &amp; 2 by xor</a></iframe>`,
            bandcamp:     "https://xoravl.bandcamp.com/album/sessions-4-2",
            spotify:      "https://open.spotify.com/album/7LUgjmjff3VljzLGIiW2Kb?si=LczD2UnYRhq0qT1iaT4I6w"
        },
        {
            title:        "Session 1",
            release_date: "April 20, 2019",
            info:         "Genre-spanning electronic music written and recorded 2018-2019",
            image_url:    "https://f4.bcbits.com/img/a3235946765_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2740945391/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/sessions-1">sessions 1 by xor</a></iframe>`,
            bandcamp:     "https://xoravl.bandcamp.com/album/sessions-1",
            spotify:      "https://open.spotify.com/album/6imTCxkweX9XnvmQMkK9De?si=WPPIb6qJTmGj1bqz81ipzQ"
        },
        {
            title:        "Fractals (2)",
            release_date: "May 1, 2016",
            info:         "Ambient and downtempo music written and recorded in 2016",
            image_url:    "https://f4.bcbits.com/img/a1357197053_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=557445508/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/fr-ct-ls-2016">FR△CT△LS (2016) by FR△CT△LS</a></iframe>`,
            bandcamp:     "https://xoravl.bandcamp.com/album/fr-ct-ls-2016",
            spotify:      ""
        },
        {
            title:        "Fractcals",
            release_date: "November 1, 2015",
            info:         "Ambient music written and recorded in 2015",
            image_url:    "https://f4.bcbits.com/img/a2937665653_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2874414542/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/fr-ct-ls-2015">FR△CT△LS (2015) by FR△CT△LS</a></iframe>`,
            bandcamp:     "https://xoravl.bandcamp.com/album/fr-ct-ls-2015",
            spotify:      ""
        },
        {
            title:        "before",
            release_date: "December 21, 2012",
            info:         "Assorted tracks written before and during 2012",
            image_url:    "https://f4.bcbits.com/img/a3784693788_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3673301834/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/before">before by xor</a></iframe>`,
            bandcamp:     "https://xoravl.bandcamp.com/album/before",
            spotify:      ""
        }
    ]

    return (
        <div className="container">
            <div className="row">
                {
                    albums.map((album) => <Album key={album.title} album={album} />)
                } 
            </div>    
        </div>
    )
} 