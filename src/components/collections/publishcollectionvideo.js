import React from 'react'
import CollectionListVideo from './collectionlistvideo'

const PublishCollectionVideo = ({ public_collection }) => {
  return (
    <div className="pt-3">
      <div className="row pb-3">
        <CollectionListVideo isSubmitted />
      </div>
    </div>
  )
}

export default PublishCollectionVideo
