import Album from "../components/album.js"

export default function Remixes() {

    const remixes = [
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
            title:        "Orkney",
            release_date: "August 5, 2022",
            info:         "by Apparitioner",
            image_url:    "https://i.scdn.co/image/ab67616d0000b2730da1da0b595e8738a19cd164",
            html:         ``,
            bandcamp:     "",
            spotify:      "https://open.spotify.com/album/2fY5Q4aZnAp7iipGgE7eTq?si=UBR1g2STTIG6QI77u5Isvg"
        },
        {
            title:        "Endless Night",
            release_date: "April 22, 2022",
            info:         "by Bedroom Wounds",
            image_url:    "https://f4.bcbits.com/img/a0164165200_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=3343782220/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://mindovermatterrecords.bandcamp.com/track/endless-night-xor-remix">Endless Night (XOR Remix) by Bedroom Wounds</a></iframe>`,
            bandcamp:     "https://mindovermatterrecords.bandcamp.com/track/endless-night-xor-remix",
            spotify:      "https://open.spotify.com/track/5TKH7khbEfOQks3MYc9Q0a?si=b8a66668cd62473e"
        },
        {
            title:        "Curses",
            release_date: "April 1, 2022",
            info:         "by Bonnie and the Mere Mortals",
            image_url:    "https://f4.bcbits.com/img/a1932449018_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=852027191/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://bonnieandthemeremortals.bandcamp.com/track/curses-xor-remix">CURSES - XOR remix by Bonnie &amp; the Mere Mortals, XOR</a></iframe>`,
            bandcamp:     "https://bonnieandthemeremortals.bandcamp.com/track/curses-xor-remix",
            spotify:      "https://open.spotify.com/track/1B2anwyz5nzRS9oEnNJguH?si=0c6db73e82504c6f"
        },
        {
            title:        "Paper Flowers",
            release_date: "October 27, 2021",
            info:         "by Cold Choir",
            image_url:    "https://f4.bcbits.com/img/a2969586294_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1525251721/size=small/bgcol=333333/linkcol=e99708/track=302830159/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/xor-cold-choir-re-mixes">xor / cold choir - re.mixes by xor</a></iframe>`,
            bandcamp:     "https://xoravl.bandcamp.com/album/xor-cold-choir-re-mixes",
            spotify:      "https://open.spotify.com/album/5Vc0n69q26nIb7VdHbVVTM?si=7CCClH3lQ-6QymBn2Uik-A"
        },
        {
            title:        "Void",
            release_date: "August 7, 2020",
            info:         "by Harsh Realm",
            image_url:    "https://f4.bcbits.com/img/a4275373755_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2516209965/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://harshrealm.bandcamp.com/album/harsh-realm-xor">Harsh Realm + XOR by Harsh Realm</a></iframe>`,
            bandcamp:     "https://harshrealm.bandcamp.com/album/harsh-realm-xor",
            spotify:      "https://open.spotify.com/track/51I15N0dWmUtW4WgeeqbSR?si=5eb00005036a45a3"
        },
        {
            title:        "Free and Young",
            release_date: "June 23, 2020",
            info:         "by The Holy Circle",
            image_url:    "https://f4.bcbits.com/img/a1831866173_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=196076977/size=small/bgcol=333333/linkcol=e99708/track=884386662/transparent=true/" seamless><a href="https://deathbombarc.bandcamp.com/album/heart-in-a-vice">Heart in a Vice by The Holy Circle</a></iframe>`,
            bandcamp:     "https://deathbombarc.bandcamp.com/album/heart-in-a-vice",
            spotify:      "https://open.spotify.com/track/1H6zbyBevqkv7bzFmY1PJk?si=733a27f95c0b4899"
        },
        {
            title:        "Calm",
            release_date: "March 27, 202",
            info:         "by Secret Shame",
            image_url:    "https://f4.bcbits.com/img/a0580034947_10.jpg",
            html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1268115942/size=small/bgcol=333333/linkcol=e99708/track=1805200233/transparent=true/" seamless><a href="https://secretshame.bandcamp.com/album/dark-synthetics-remixes">Dark Synthetics (Remixes) by Secret Shame</a></iframe>`,
            bandcamp:     "https://secretshame.bandcamp.com/album/dark-synthetics-remixes",
            spotify:      "https://open.spotify.com/album/4RVP40h90PTkDJ7cOX5d38?si=vtIUkHiiT8uJAkyC-qBh-g"
        }
    ]

    return (
        <div className="container">
            <div className="row">
                {
                    remixes.map((remix) => <Album key={remix.title} album={remix} />)
                }
            </div>
        </div>
    )
} 