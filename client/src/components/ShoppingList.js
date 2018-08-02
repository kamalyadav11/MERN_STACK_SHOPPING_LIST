import React from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import uuid from 'uuid';


class ShoppingList extends React.Component {
  state = {
    items: [
      { id: uuid(), name: 'Eggs' },
      { id: uuid(), name: 'Milk' },
      { id: uuid(), name: 'Burger' },
      { id: uuid(), name: 'Pizza' },
    ]
  }

  addItem = () => {
    const name = prompt('Enter Item');
    if (name) {
      this.setState(prevState => ({
        items: [...prevState.items, { id: uuid(), name }]
      }));
    }
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.addItem}>
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ name, id }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(prevState => ({
                        items: prevState.items.filter(item => item.id !== id)
                      }));
                    }}
                  >
                    &times;
                </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default ShoppingList;
