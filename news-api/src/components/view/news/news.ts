import './news.css';
import { NewsItem } from '../../../types/index';

class News {
    public draw(data: NewsItem[]): void {
        const news: NewsItem[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
            const newsItemDiv = newsClone.querySelector('.news__item') as HTMLElement;

            if (idx % 2) {
                newsItemDiv.classList.add('alt');
            }
            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLLIElement;
            newsMetaAuthor.textContent = item.author || item.source.name;
            const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLLIElement;
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            const newsDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLHeadingElement;
            newsDescriptionTitle.textContent = item.title;
            const newsDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLHeadingElement;
            newsDescriptionSource.textContent = item.source.name;
            const newsDescriptionContent = newsClone.querySelector(
                '.news__description-content'
            ) as HTMLParagraphElement;
            newsDescriptionContent.textContent = item.description;
            const newsReadMore = newsClone.querySelector('.news__read-more a') as HTMLLinkElement;
            newsReadMore.setAttribute('href', item.url);
            fragment.append(newsClone);
        });

        const newsDiv = document.querySelector('.news') as HTMLDivElement;
        newsDiv.innerHTML = '';
        newsDiv.appendChild(fragment);
    }
}

export default News;
