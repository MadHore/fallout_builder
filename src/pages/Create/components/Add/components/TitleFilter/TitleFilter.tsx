import { Input } from "antd";
import { observer } from "mobx-react-lite";
import { ChangeEvent } from "react";
import { CardsStore } from "../../../../store";

import style from './TitleFilter.module.css';

type Props = {
    store: CardsStore;
}

export const TitleFilter = observer<Props>(({store}) => {

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        store.changeCharacterFilter({...store.characterFilter, search: event.target.value});
    }

    return <div className={style.container}>
        <div className={style.field}>
            <div>search</div> <Input value={store.characterFilter.search} onChange={onTitleChange}/>
        </div>
    </div>
});

TitleFilter.displayName = 'TitleFilter';