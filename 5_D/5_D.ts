// dependency inversion

interface IMusicApi {
    getTracks: () => void
}

class MusicClient implements IMusicApi {
    client: IMusicApi;

    constructor(client: IMusicApi) {
        this.client = client;
    }

    getTracks() {
        this.client.getTracks();
    };
}

class YandexMusicApi implements IMusicApi {
    getTracks() {
        console.log('music from yandex');
    };
}

class SpotifyMusicSpi implements IMusicApi {
    getTracks(){
        console.log('music from spotify');
    };
}

class VKMusicApi implements IMusicApi {
    getTracks() {
        console.log('music from VK');
    };
}

const musicApp = (musicAPI: IMusicApi =  new VKMusicApi()) => {
    const API = new MusicClient(musicAPI);

    API.getTracks();
}

musicApp(new SpotifyMusicSpi());
musicApp(new VKMusicApi());
musicApp(new YandexMusicApi());
