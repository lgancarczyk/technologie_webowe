from pytube import YouTube


def thumbnailUrl(link):
    yt = YouTube(link)
    return yt.thumbnail_url

