import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Item = ({ item }) => {
    const { imgUrl, name, price } = item;

    return (<Col>
        <Card>
            <Card.Img height={290} variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    ${price}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>)
}

export default Item;