import React from 'react'
import CollectionList from './collectionlist'

const PublishCollection = () => {
  return (
    <div className="pt-3">
      <div className="row pb-3">
        <CollectionList isSubmitted />
      </div>
    </div>
  )
}

export default PublishCollection
