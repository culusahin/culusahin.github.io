// tries to execute the uri:scheme
function uriSchemeWithHyperlinkFallback(uri, href) {
    if(!window.open(uri)){
        window.location = href;
    }
}