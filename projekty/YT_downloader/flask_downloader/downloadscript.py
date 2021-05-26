from pytube import YouTube


def thumbnailUrl(link):
    yt = YouTube(link)
    return yt.thumbnail_url

def videoName(link):
    yt = YouTube(link)
    return yt.title

def videoViews(link):
    yt = YouTube(link)
    return yt.views
