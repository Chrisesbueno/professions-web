/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDeviceNotificationToken = /* GraphQL */ `
  subscription OnCreateDeviceNotificationToken(
    $filter: ModelSubscriptionDeviceNotificationTokenFilterInput
  ) {
    onCreateDeviceNotificationToken(filter: $filter) {
      id
      deviceID
      notificationToken
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateDeviceNotificationToken = /* GraphQL */ `
  subscription OnUpdateDeviceNotificationToken(
    $filter: ModelSubscriptionDeviceNotificationTokenFilterInput
  ) {
    onUpdateDeviceNotificationToken(filter: $filter) {
      id
      deviceID
      notificationToken
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteDeviceNotificationToken = /* GraphQL */ `
  subscription OnDeleteDeviceNotificationToken(
    $filter: ModelSubscriptionDeviceNotificationTokenFilterInput
  ) {
    onDeleteDeviceNotificationToken(filter: $filter) {
      id
      deviceID
      notificationToken
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAppVersionHistory = /* GraphQL */ `
  subscription OnCreateAppVersionHistory(
    $filter: ModelSubscriptionAppVersionHistoryFilterInput
  ) {
    onCreateAppVersionHistory(filter: $filter) {
      id
      platform
      latestVersion
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAppVersionHistory = /* GraphQL */ `
  subscription OnUpdateAppVersionHistory(
    $filter: ModelSubscriptionAppVersionHistoryFilterInput
  ) {
    onUpdateAppVersionHistory(filter: $filter) {
      id
      platform
      latestVersion
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAppVersionHistory = /* GraphQL */ `
  subscription OnDeleteAppVersionHistory(
    $filter: ModelSubscriptionAppVersionHistoryFilterInput
  ) {
    onDeleteAppVersionHistory(filter: $filter) {
      id
      platform
      latestVersion
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateReports = /* GraphQL */ `
  subscription OnCreateReports($filter: ModelSubscriptionReportsFilterInput) {
    onCreateReports(filter: $filter) {
      id
      userID
      subject
      description
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateReports = /* GraphQL */ `
  subscription OnUpdateReports($filter: ModelSubscriptionReportsFilterInput) {
    onUpdateReports(filter: $filter) {
      id
      userID
      subject
      description
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteReports = /* GraphQL */ `
  subscription OnDeleteReports($filter: ModelSubscriptionReportsFilterInput) {
    onDeleteReports(filter: $filter) {
      id
      userID
      subject
      description
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateNotificationHistory = /* GraphQL */ `
  subscription OnCreateNotificationHistory(
    $filter: ModelSubscriptionNotificationHistoryFilterInput
  ) {
    onCreateNotificationHistory(filter: $filter) {
      id
      title
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNotificationHistory = /* GraphQL */ `
  subscription OnUpdateNotificationHistory(
    $filter: ModelSubscriptionNotificationHistoryFilterInput
  ) {
    onUpdateNotificationHistory(filter: $filter) {
      id
      title
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNotificationHistory = /* GraphQL */ `
  subscription OnDeleteNotificationHistory(
    $filter: ModelSubscriptionNotificationHistoryFilterInput
  ) {
    onDeleteNotificationHistory(filter: $filter) {
      id
      title
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateArea = /* GraphQL */ `
  subscription OnCreateArea($filter: ModelSubscriptionAreaFilterInput) {
    onCreateArea(filter: $filter) {
      id
      name
      activities {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateArea = /* GraphQL */ `
  subscription OnUpdateArea($filter: ModelSubscriptionAreaFilterInput) {
    onUpdateArea(filter: $filter) {
      id
      name
      activities {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteArea = /* GraphQL */ `
  subscription OnDeleteArea($filter: ModelSubscriptionAreaFilterInput) {
    onDeleteArea(filter: $filter) {
      id
      name
      activities {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity($filter: ModelSubscriptionActivityFilterInput) {
    onCreateActivity(filter: $filter) {
      id
      name
      areaID
      area {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity($filter: ModelSubscriptionActivityFilterInput) {
    onUpdateActivity(filter: $filter) {
      id
      name
      areaID
      area {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity($filter: ModelSubscriptionActivityFilterInput) {
    onDeleteActivity(filter: $filter) {
      id
      name
      areaID
      area {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $owner: String
  ) {
    onCreateUsers(filter: $filter, owner: $owner) {
      id
      cognitoID
      name
      lastName
      email
      identityID
      gender
      notificationToken
      favorites {
        nextToken
        __typename
      }
      business {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      promotions {
        nextToken
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      lastLocation {
        lat
        lon
        __typename
      }
      dates {
        nextToken
        __typename
      }
      claimRequests {
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $owner: String
  ) {
    onUpdateUsers(filter: $filter, owner: $owner) {
      id
      cognitoID
      name
      lastName
      email
      identityID
      gender
      notificationToken
      favorites {
        nextToken
        __typename
      }
      business {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      promotions {
        nextToken
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      lastLocation {
        lat
        lon
        __typename
      }
      dates {
        nextToken
        __typename
      }
      claimRequests {
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $owner: String
  ) {
    onDeleteUsers(filter: $filter, owner: $owner) {
      id
      cognitoID
      name
      lastName
      email
      identityID
      gender
      notificationToken
      favorites {
        nextToken
        __typename
      }
      business {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      promotions {
        nextToken
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      lastLocation {
        lat
        lon
        __typename
      }
      dates {
        nextToken
        __typename
      }
      claimRequests {
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUserNotification = /* GraphQL */ `
  subscription OnCreateUserNotification(
    $filter: ModelSubscriptionUserNotificationFilterInput
    $owner: String
  ) {
    onCreateUserNotification(filter: $filter, owner: $owner) {
      id
      userID
      title
      message
      type
      data
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserNotification = /* GraphQL */ `
  subscription OnUpdateUserNotification(
    $filter: ModelSubscriptionUserNotificationFilterInput
    $owner: String
  ) {
    onUpdateUserNotification(filter: $filter, owner: $owner) {
      id
      userID
      title
      message
      type
      data
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUserNotification = /* GraphQL */ `
  subscription OnDeleteUserNotification(
    $filter: ModelSubscriptionUserNotificationFilterInput
    $owner: String
  ) {
    onDeleteUserNotification(filter: $filter, owner: $owner) {
      id
      userID
      title
      message
      type
      data
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness(
    $filter: ModelSubscriptionBusinessFilterInput
    $owner: String
  ) {
    onCreateBusiness(filter: $filter, owner: $owner) {
      id
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      status
      statusOwner
      identityID
      name
      image
      images
      thumbnail
      email
      phone
      whatsapp
      instagram
      facebook
      page
      coordinates {
        lat
        lon
        __typename
      }
      activity
      tags
      favorites {
        nextToken
        __typename
      }
      description
      prefer
      schedule
      comments {
        nextToken
        __typename
      }
      promotions {
        nextToken
        __typename
      }
      catalogpdf
      dates {
        nextToken
        __typename
      }
      claimRequests {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness(
    $filter: ModelSubscriptionBusinessFilterInput
    $owner: String
  ) {
    onUpdateBusiness(filter: $filter, owner: $owner) {
      id
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      status
      statusOwner
      identityID
      name
      image
      images
      thumbnail
      email
      phone
      whatsapp
      instagram
      facebook
      page
      coordinates {
        lat
        lon
        __typename
      }
      activity
      tags
      favorites {
        nextToken
        __typename
      }
      description
      prefer
      schedule
      comments {
        nextToken
        __typename
      }
      promotions {
        nextToken
        __typename
      }
      catalogpdf
      dates {
        nextToken
        __typename
      }
      claimRequests {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness(
    $filter: ModelSubscriptionBusinessFilterInput
    $owner: String
  ) {
    onDeleteBusiness(filter: $filter, owner: $owner) {
      id
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      status
      statusOwner
      identityID
      name
      image
      images
      thumbnail
      email
      phone
      whatsapp
      instagram
      facebook
      page
      coordinates {
        lat
        lon
        __typename
      }
      activity
      tags
      favorites {
        nextToken
        __typename
      }
      description
      prefer
      schedule
      comments {
        nextToken
        __typename
      }
      promotions {
        nextToken
        __typename
      }
      catalogpdf
      dates {
        nextToken
        __typename
      }
      claimRequests {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateBusinessComment = /* GraphQL */ `
  subscription OnCreateBusinessComment(
    $filter: ModelSubscriptionBusinessCommentFilterInput
    $owner: String
  ) {
    onCreateBusinessComment(filter: $filter, owner: $owner) {
      id
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      businessID
      stars
      description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateBusinessComment = /* GraphQL */ `
  subscription OnUpdateBusinessComment(
    $filter: ModelSubscriptionBusinessCommentFilterInput
    $owner: String
  ) {
    onUpdateBusinessComment(filter: $filter, owner: $owner) {
      id
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      businessID
      stars
      description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteBusinessComment = /* GraphQL */ `
  subscription OnDeleteBusinessComment(
    $filter: ModelSubscriptionBusinessCommentFilterInput
    $owner: String
  ) {
    onDeleteBusinessComment(filter: $filter, owner: $owner) {
      id
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      businessID
      stars
      description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateBusinessPromotion = /* GraphQL */ `
  subscription OnCreateBusinessPromotion(
    $filter: ModelSubscriptionBusinessPromotionFilterInput
    $owner: String
  ) {
    onCreateBusinessPromotion(filter: $filter, owner: $owner) {
      id
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      businessID
      business {
        id
        userID
        status
        statusOwner
        identityID
        name
        image
        images
        thumbnail
        email
        phone
        whatsapp
        instagram
        facebook
        page
        activity
        tags
        description
        prefer
        schedule
        catalogpdf
        createdAt
        updatedAt
        owner
        __typename
      }
      title
      dateInitial
      dateFinal
      status
      isView
      image
      notifiedUserIDs
      viewedUsers {
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBusinessPromotion = /* GraphQL */ `
  subscription OnUpdateBusinessPromotion(
    $filter: ModelSubscriptionBusinessPromotionFilterInput
    $owner: String
  ) {
    onUpdateBusinessPromotion(filter: $filter, owner: $owner) {
      id
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      businessID
      business {
        id
        userID
        status
        statusOwner
        identityID
        name
        image
        images
        thumbnail
        email
        phone
        whatsapp
        instagram
        facebook
        page
        activity
        tags
        description
        prefer
        schedule
        catalogpdf
        createdAt
        updatedAt
        owner
        __typename
      }
      title
      dateInitial
      dateFinal
      status
      isView
      image
      notifiedUserIDs
      viewedUsers {
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBusinessPromotion = /* GraphQL */ `
  subscription OnDeleteBusinessPromotion(
    $filter: ModelSubscriptionBusinessPromotionFilterInput
    $owner: String
  ) {
    onDeleteBusinessPromotion(filter: $filter, owner: $owner) {
      id
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      businessID
      business {
        id
        userID
        status
        statusOwner
        identityID
        name
        image
        images
        thumbnail
        email
        phone
        whatsapp
        instagram
        facebook
        page
        activity
        tags
        description
        prefer
        schedule
        catalogpdf
        createdAt
        updatedAt
        owner
        __typename
      }
      title
      dateInitial
      dateFinal
      status
      isView
      image
      notifiedUserIDs
      viewedUsers {
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePromotionViews = /* GraphQL */ `
  subscription OnCreatePromotionViews(
    $filter: ModelSubscriptionPromotionViewsFilterInput
    $owner: String
  ) {
    onCreatePromotionViews(filter: $filter, owner: $owner) {
      id
      userID
      promotionID
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePromotionViews = /* GraphQL */ `
  subscription OnUpdatePromotionViews(
    $filter: ModelSubscriptionPromotionViewsFilterInput
    $owner: String
  ) {
    onUpdatePromotionViews(filter: $filter, owner: $owner) {
      id
      userID
      promotionID
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePromotionViews = /* GraphQL */ `
  subscription OnDeletePromotionViews(
    $filter: ModelSubscriptionPromotionViewsFilterInput
    $owner: String
  ) {
    onDeletePromotionViews(filter: $filter, owner: $owner) {
      id
      userID
      promotionID
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateFavorites = /* GraphQL */ `
  subscription OnCreateFavorites(
    $filter: ModelSubscriptionFavoritesFilterInput
    $owner: String
  ) {
    onCreateFavorites(filter: $filter, owner: $owner) {
      id
      businessID
      business {
        id
        userID
        status
        statusOwner
        identityID
        name
        image
        images
        thumbnail
        email
        phone
        whatsapp
        instagram
        facebook
        page
        activity
        tags
        description
        prefer
        schedule
        catalogpdf
        createdAt
        updatedAt
        owner
        __typename
      }
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      position
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateFavorites = /* GraphQL */ `
  subscription OnUpdateFavorites(
    $filter: ModelSubscriptionFavoritesFilterInput
    $owner: String
  ) {
    onUpdateFavorites(filter: $filter, owner: $owner) {
      id
      businessID
      business {
        id
        userID
        status
        statusOwner
        identityID
        name
        image
        images
        thumbnail
        email
        phone
        whatsapp
        instagram
        facebook
        page
        activity
        tags
        description
        prefer
        schedule
        catalogpdf
        createdAt
        updatedAt
        owner
        __typename
      }
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      position
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteFavorites = /* GraphQL */ `
  subscription OnDeleteFavorites(
    $filter: ModelSubscriptionFavoritesFilterInput
    $owner: String
  ) {
    onDeleteFavorites(filter: $filter, owner: $owner) {
      id
      businessID
      business {
        id
        userID
        status
        statusOwner
        identityID
        name
        image
        images
        thumbnail
        email
        phone
        whatsapp
        instagram
        facebook
        page
        activity
        tags
        description
        prefer
        schedule
        catalogpdf
        createdAt
        updatedAt
        owner
        __typename
      }
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      position
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateComplaints = /* GraphQL */ `
  subscription OnCreateComplaints(
    $filter: ModelSubscriptionComplaintsFilterInput
    $owner: String
  ) {
    onCreateComplaints(filter: $filter, owner: $owner) {
      id
      userID
      businessID
      status
      reason
      description
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateComplaints = /* GraphQL */ `
  subscription OnUpdateComplaints(
    $filter: ModelSubscriptionComplaintsFilterInput
    $owner: String
  ) {
    onUpdateComplaints(filter: $filter, owner: $owner) {
      id
      userID
      businessID
      status
      reason
      description
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteComplaints = /* GraphQL */ `
  subscription OnDeleteComplaints(
    $filter: ModelSubscriptionComplaintsFilterInput
    $owner: String
  ) {
    onDeleteComplaints(filter: $filter, owner: $owner) {
      id
      userID
      businessID
      status
      reason
      description
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateReasonComplaints = /* GraphQL */ `
  subscription OnCreateReasonComplaints(
    $filter: ModelSubscriptionReasonComplaintsFilterInput
    $owner: String
  ) {
    onCreateReasonComplaints(filter: $filter, owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateReasonComplaints = /* GraphQL */ `
  subscription OnUpdateReasonComplaints(
    $filter: ModelSubscriptionReasonComplaintsFilterInput
    $owner: String
  ) {
    onUpdateReasonComplaints(filter: $filter, owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteReasonComplaints = /* GraphQL */ `
  subscription OnDeleteReasonComplaints(
    $filter: ModelSubscriptionReasonComplaintsFilterInput
    $owner: String
  ) {
    onDeleteReasonComplaints(filter: $filter, owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateLogs = /* GraphQL */ `
  subscription OnCreateLogs($filter: ModelSubscriptionLogsFilterInput) {
    onCreateLogs(filter: $filter) {
      id
      userID
      type
      text
      businessID
      posI
      posE
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateLogs = /* GraphQL */ `
  subscription OnUpdateLogs($filter: ModelSubscriptionLogsFilterInput) {
    onUpdateLogs(filter: $filter) {
      id
      userID
      type
      text
      businessID
      posI
      posE
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteLogs = /* GraphQL */ `
  subscription OnDeleteLogs($filter: ModelSubscriptionLogsFilterInput) {
    onDeleteLogs(filter: $filter) {
      id
      userID
      type
      text
      businessID
      posI
      posE
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateDate = /* GraphQL */ `
  subscription OnCreateDate(
    $filter: ModelSubscriptionDateFilterInput
    $owner: String
  ) {
    onCreateDate(filter: $filter, owner: $owner) {
      id
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      businessID
      business {
        id
        userID
        status
        statusOwner
        identityID
        name
        image
        images
        thumbnail
        email
        phone
        whatsapp
        instagram
        facebook
        page
        activity
        tags
        description
        prefer
        schedule
        catalogpdf
        createdAt
        updatedAt
        owner
        __typename
      }
      date
      notificationMethod
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateDate = /* GraphQL */ `
  subscription OnUpdateDate(
    $filter: ModelSubscriptionDateFilterInput
    $owner: String
  ) {
    onUpdateDate(filter: $filter, owner: $owner) {
      id
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      businessID
      business {
        id
        userID
        status
        statusOwner
        identityID
        name
        image
        images
        thumbnail
        email
        phone
        whatsapp
        instagram
        facebook
        page
        activity
        tags
        description
        prefer
        schedule
        catalogpdf
        createdAt
        updatedAt
        owner
        __typename
      }
      date
      notificationMethod
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteDate = /* GraphQL */ `
  subscription OnDeleteDate(
    $filter: ModelSubscriptionDateFilterInput
    $owner: String
  ) {
    onDeleteDate(filter: $filter, owner: $owner) {
      id
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      businessID
      business {
        id
        userID
        status
        statusOwner
        identityID
        name
        image
        images
        thumbnail
        email
        phone
        whatsapp
        instagram
        facebook
        page
        activity
        tags
        description
        prefer
        schedule
        catalogpdf
        createdAt
        updatedAt
        owner
        __typename
      }
      date
      notificationMethod
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateClaimRequest = /* GraphQL */ `
  subscription OnCreateClaimRequest(
    $filter: ModelSubscriptionClaimRequestFilterInput
    $owner: String
  ) {
    onCreateClaimRequest(filter: $filter, owner: $owner) {
      id
      businessID
      business {
        id
        userID
        status
        statusOwner
        identityID
        name
        image
        images
        thumbnail
        email
        phone
        whatsapp
        instagram
        facebook
        page
        activity
        tags
        description
        prefer
        schedule
        catalogpdf
        createdAt
        updatedAt
        owner
        __typename
      }
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      status
      adminResponse
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateClaimRequest = /* GraphQL */ `
  subscription OnUpdateClaimRequest(
    $filter: ModelSubscriptionClaimRequestFilterInput
    $owner: String
  ) {
    onUpdateClaimRequest(filter: $filter, owner: $owner) {
      id
      businessID
      business {
        id
        userID
        status
        statusOwner
        identityID
        name
        image
        images
        thumbnail
        email
        phone
        whatsapp
        instagram
        facebook
        page
        activity
        tags
        description
        prefer
        schedule
        catalogpdf
        createdAt
        updatedAt
        owner
        __typename
      }
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      status
      adminResponse
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteClaimRequest = /* GraphQL */ `
  subscription OnDeleteClaimRequest(
    $filter: ModelSubscriptionClaimRequestFilterInput
    $owner: String
  ) {
    onDeleteClaimRequest(filter: $filter, owner: $owner) {
      id
      businessID
      business {
        id
        userID
        status
        statusOwner
        identityID
        name
        image
        images
        thumbnail
        email
        phone
        whatsapp
        instagram
        facebook
        page
        activity
        tags
        description
        prefer
        schedule
        catalogpdf
        createdAt
        updatedAt
        owner
        __typename
      }
      userID
      user {
        id
        cognitoID
        name
        lastName
        email
        identityID
        gender
        notificationToken
        owner
        createdAt
        updatedAt
        __typename
      }
      status
      adminResponse
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateBusinessUploadHistory = /* GraphQL */ `
  subscription OnCreateBusinessUploadHistory(
    $filter: ModelSubscriptionBusinessUploadHistoryFilterInput
  ) {
    onCreateBusinessUploadHistory(filter: $filter) {
      id
      uploadDate
      completionDate
      validCount
      total
      invalidCount
      originalPath
      invalidPath
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBusinessUploadHistory = /* GraphQL */ `
  subscription OnUpdateBusinessUploadHistory(
    $filter: ModelSubscriptionBusinessUploadHistoryFilterInput
  ) {
    onUpdateBusinessUploadHistory(filter: $filter) {
      id
      uploadDate
      completionDate
      validCount
      total
      invalidCount
      originalPath
      invalidPath
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBusinessUploadHistory = /* GraphQL */ `
  subscription OnDeleteBusinessUploadHistory(
    $filter: ModelSubscriptionBusinessUploadHistoryFilterInput
  ) {
    onDeleteBusinessUploadHistory(filter: $filter) {
      id
      uploadDate
      completionDate
      validCount
      total
      invalidCount
      originalPath
      invalidPath
      createdAt
      updatedAt
      __typename
    }
  }
`;
