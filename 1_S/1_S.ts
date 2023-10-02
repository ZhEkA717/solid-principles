// Single Responsibility Principle

class News {
    title: string;
    text: string;
    modified: boolean;

    constructor(
        title: string,
        text: string,
    ) {
        this.title = title;
        this.text = text;
        this.modified = false;
    }

    update(text: string) {
        this.text = text;
        this.modified = true;
    }
}

class NewPrinter {
    news: News;

    constructor(news: News) {
        this.news = news;
    }

    html() {
        return `
            <div class="news">
                <h1>${this.news.title}</h1>
                <p1>${this.news.text}</p1>
            </div>
        `;
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2);
    }

    xml() {
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
                <modified>${this.news.modified}</modified>
            </news>
        `;
    }
}

console.log(new NewPrinter(
    new News('learn Solid', 'basic principles')
).html());
console.log(new NewPrinter(
    new News('learn Solid', 'basic principles')
).json());
console.log(new NewPrinter(
    new News('learn Solid', 'basic principles')
).xml());