import './sources.css';
import { NewsSources } from '../../../types/index';

class Sources {
    public draw(data: NewsSources[]): void {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLSpanElement;
            sourceItemName.textContent = item.name;
            const sourceItem = sourceClone.querySelector('.source__item') as HTMLDivElement;
            sourceItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        const sourcesDiv = document.querySelector('.sources') as HTMLDivElement;
        sourcesDiv.append(fragment);
    }
}

export default Sources;
