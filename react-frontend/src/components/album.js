const Link = ({ link, text, pre }) => {
    if (!link) return

    return (
        <div>
            { pre }<a href={ link } target="_blank">{ text }</a>
        </div>
    )
}

export default function Album({ album }) {
    return (
        <div>
            <div>{ album.title }</div>
            <div>{ album.info }</div>
            <img src={ album.image_url } />
             
            <div dangerouslySetInnerHTML={{ __html: album.html || null }} />

            <Link link={ album.bandcamp}  pre="By on " text="Bandcamp" />
            <Link link={ album.spotify } pre="Listen on " text="Spotify" />
        </div>
    )
}