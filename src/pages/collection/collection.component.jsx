import React from "react";
import "./collection.styles.scss";

// import {connect} from 'react-redux';
// import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";
import CollectionContext from "../../contexts/collections/collections.context";

const CollectionPage = ({ match }) => {
  return (
    <CollectionContext.Consumer>
      {(collections) => {
        const collection = collections[match.params.collectionId];
        const { title, items } = collection;
        return (
          <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
              {items.map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      }}
    </CollectionContext.Consumer>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state),
// });

export default CollectionPage;
