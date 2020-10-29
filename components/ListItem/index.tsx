import Image from 'next/image';

import { Container, Title, Description } from './styles';


const ListItem: React.FC = () => {
    return(
        <Container>
            <Title>I am a list</Title>
            { /*<Image src={ img } alt="I am an alt text" height="400" width="300"/> */ }
            <Description>I am a description!</Description>
        </Container>
    );
}

export default ListItem;