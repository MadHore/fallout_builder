import { observer } from 'mobx-react-lite';
import { CardsStore } from '../../../../store';
import { FactionFilter } from '../FactionFilter/FactionFilter';
import { PriceFilter } from '../PriceFilter/PriceFilter';
import { TitleFilter } from '../TitleFilter/TitleFilter';
import style from './CharacterFilter.module.css';

type Props = {
    store: CardsStore;
}

export const CharacterFilter = observer<Props>(({store}) => {
    return <div className={style.container}>
        <TitleFilter store={store} />
        <PriceFilter store={store} />
        <FactionFilter store={store} />
    </div>
});

CharacterFilter.displayName = 'CharacterFilter';