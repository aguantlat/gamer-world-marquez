import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";

import Item from '../Item/Item';

const ItemList = ({ items }) => {
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {items.map((item) =>
                    <Item key={item?.id} item={item}></Item>
                )}
            </Row>
        </Container>
    )
}

export default ItemList;