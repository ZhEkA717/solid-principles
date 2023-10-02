// dependency inversion
class MusicClient {
    constructor(client) {
        this.client = client;
    }
    getTracks() {
        this.client.getTracks();
    }
    ;
}
class YandexMusicApi {
    getTracks() {
        console.log('music from yandex');
    }
    ;
}
class SpotifyMusicSpi {
    getTracks() {
        console.log('music from spotify');
    }
    ;
}
class VKMusicApi {
    getTracks() {
        console.log('music from VK');
    }
    ;
}

const musicApp = (musicAPI = new VKMusicApi()) => {
    const API = new MusicClient(musicAPI);
    API.getTracks();
};

musicApp(new SpotifyMusicSpi());
musicApp(new VKMusicApi());
musicApp(new YandexMusicApi());
