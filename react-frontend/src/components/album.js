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
        <div className="col col-lg-4 col-md-6">
            <div className="album pa-10 mb-30">
                <div className="album-title mb-10">{ album.title }</div>
                <img className="album-art mb-10" src={ album.image_url } />
                <div class="album-embed" dangerouslySetInnerHTML={{ __html: album.html || null }} />
                <div className="album-description mb-10">{ album.info }</div>
                <Link link={ album.bandcamp} pre="By on " text="Bandcamp" />
                <Link link={ album.spotify } pre="Listen on " text="Spotify" />
            </div>
        </div>
    )
}