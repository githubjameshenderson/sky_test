import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delItem } from '../../logic/actions';
import { completeItem } from '../../logic/actions';
import './styles.css';

export const ItemsList = ({ items, onDel, onComplete }) => {

  return (

    <div>
      <ul className={'itemsList-ul'}>
        {items.length < 1 && <p id={'items-missing'}>Add some tasks above.</p>}
        {items.map(item => 
          <li className={item.completed} key={item.id}>{item.content} 
            &nbsp;
            <span onClick={() => {onDel(item.id);}}>Delete</span>
            &nbsp;
            <span onClick={() => {onComplete(item.id);}}>{item.completed}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  //projects: React.PropTypes.array
};

const mapStateToProps = state => {
  return { items: state.todos.items };
};

const mapDispatchToProps = dispatch => ({
  onDel: currentItem => dispatch(delItem(currentItem)),
  onComplete: currentItem => dispatch(completeItem(currentItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
