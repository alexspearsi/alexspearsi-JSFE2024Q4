import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private readonly controller: AppController;
    private readonly view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sources = document.querySelector('.sources') as HTMLDivElement;
        sources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));

        this.controller.getSources((data) => this.view.drawSources(data));

        this.initSearch();
    }

    private initSearch(): void {
        const searchInput = document.getElementById('search') as HTMLInputElement;
        if (!searchInput) return;

        searchInput.addEventListener('keyup', () => {
            const inputValue = searchInput.value.toLowerCase();
            const sourceItems = document.querySelectorAll('.source__item');

            sourceItems.forEach((source) => {
                const element = source as HTMLElement;
                if (element.textContent?.toLowerCase().includes(inputValue)) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });
        });
    }
}

export default App;
