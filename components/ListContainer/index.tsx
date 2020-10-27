import { Container } from './styles';

import ListItem from './../ListItem';

const ListContainer: React.FC = () => {
    return(
        <Container>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </Container>
    );
}

export default ListContainer;