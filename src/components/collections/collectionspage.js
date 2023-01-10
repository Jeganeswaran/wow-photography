import React, { useEffect } from 'react'
import PageLayout from '../common/pagelayout'
import ProfileCard from './profilecard'
import TabHeader from '../common/tabheader'
import CollCount from './collcount'
import RouteTabs from '../routes/routetabs'
import PrivateCollection from './privatecollection'
import PublishCollection from './publishcollection'
import Contest from './contest'
import ContestVideo from './contestvideo'
import { connect } from 'react-redux'
import { loadUser } from '../../redux/actions/user'
import PublishCollectionVideo from './publishcollectionvideo'
import PrivateCollectionVideo from './privatecollectionvideo'

const CollectionsPage = ({ dispatch }) => {
  useEffect(() => {
    dispatch(loadUser())
  }, [])

  return (
    <PageLayout>
      <div className="row">
        <div className="col-md-3 mb-3">
          <ProfileCard />
          <CollCount />
        </div>
        <div className="col-md-9">
          <div className="flex-between">
            <div className="mb-1">
              <TabHeader
                className="profile-tabs"
                tablinks={[
                  {
                    to: '/my-profile',
                    exact: true,
                    children: 'Submitted Photographs',
                  },
                  {
                    to: '/my-profile/private-photographs',
                    exact: true,
                    children: 'Unsubmitted Photographs',
                  },
                  {
                    to: '/my-profile/videos',
                    exact: true,
                    children: 'Submitted Videos',
                  },
                  {
                    to: '/my-profile/private-videos',
                    exact: true,
                    children: 'Unsubmitted Videos',
                  },
                ]}
              />
            </div>
          </div>
          <RouteTabs
            title="collection-page"
            tabs={[
              {
                path: '/',
                exact: true,
                component: PublishCollection,
              },
              {
                path: '/private-photographs',
                component: PrivateCollection,
              },
              {
                path: '/videos',
                component: PublishCollectionVideo,
              },
              {
                path: '/private-videos',
                component: PrivateCollectionVideo,
              },
              // {
              //   path: '/enter-to-contest/video',
              //   component: ContestVideo,
              // },
              // {
              //   path: '/enter-to-contest',
              //   component: Contest,
              // },
            ]}
          />
        </div>
      </div>
    </PageLayout>
  )
}

export default connect(null)(CollectionsPage)
