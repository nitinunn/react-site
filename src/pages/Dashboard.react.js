import React from 'react'
import NewRepoForm from 'components/AddNewRepoForm.react'
import RepositoryList from 'components/RepositoryList.react'

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <NewRepoForm />
        <RepositoryList />
      </div>
    )
  }

}

export default Dashboard
