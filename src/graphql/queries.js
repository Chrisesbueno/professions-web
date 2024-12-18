/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDeviceNotificationToken = /* GraphQL */ `
  query GetDeviceNotificationToken($id: ID!) {
    getDeviceNotificationToken(id: $id) {
      id
      deviceID
      notificationToken
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDeviceNotificationTokens = /* GraphQL */ `
  query ListDeviceNotificationTokens(
    $filter: ModelDeviceNotificationTokenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeviceNotificationTokens(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        deviceID
        notificationToken
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAppVersionHistory = /* GraphQL */ `
  query GetAppVersionHistory($id: ID!) {
    getAppVersionHistory(id: $id) {
      id
      platform
      latestVersion
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAppVersionHistories = /* GraphQL */ `
  query ListAppVersionHistories(
    $filter: ModelAppVersionHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppVersionHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        platform
        latestVersion
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReports = /* GraphQL */ `
  query GetReports($id: ID!) {
    getReports(id: $id) {
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
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        subject
        description
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const AppVersionByDate = /* GraphQL */ `
  query AppVersionByDate(
    $platform: AppPlatform!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAppVersionHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    AppVersionByDate(
      platform: $platform
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        platform
        latestVersion
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNotificationHistory = /* GraphQL */ `
  query GetNotificationHistory($id: ID!) {
    getNotificationHistory(id: $id) {
      id
      title
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotificationHistories = /* GraphQL */ `
  query ListNotificationHistories(
    $filter: ModelNotificationHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotificationHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        message
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getArea = /* GraphQL */ `
  query GetArea($id: ID!) {
    getArea(id: $id) {
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
export const listAreas = /* GraphQL */ `
  query ListAreas(
    $filter: ModelAreaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
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
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        areaID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const activitiesByAreaID = /* GraphQL */ `
  query ActivitiesByAreaID(
    $areaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activitiesByAreaID(
      areaID: $areaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        areaID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const userByEmail = /* GraphQL */ `
  query UserByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUserNotification = /* GraphQL */ `
  query GetUserNotification($id: ID!) {
    getUserNotification(id: $id) {
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
export const listUserNotifications = /* GraphQL */ `
  query ListUserNotifications(
    $filter: ModelUserNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const userNotificationsByUserID = /* GraphQL */ `
  query UserNotificationsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userNotificationsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
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
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listBusinessbyUserID = /* GraphQL */ `
  query ListBusinessbyUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessbyUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBusinessComment = /* GraphQL */ `
  query GetBusinessComment($id: ID!) {
    getBusinessComment(id: $id) {
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
export const listBusinessComments = /* GraphQL */ `
  query ListBusinessComments(
    $filter: ModelBusinessCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        businessID
        stars
        description
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const businessCommentsByUserID = /* GraphQL */ `
  query BusinessCommentsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    businessCommentsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        businessID
        stars
        description
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const businessCommentsByBusinessID = /* GraphQL */ `
  query BusinessCommentsByBusinessID(
    $businessID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    businessCommentsByBusinessID(
      businessID: $businessID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        businessID
        stars
        description
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBusinessPromotion = /* GraphQL */ `
  query GetBusinessPromotion($id: ID!) {
    getBusinessPromotion(id: $id) {
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
        owner
        createdAt
        updatedAt
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
export const listBusinessPromotions = /* GraphQL */ `
  query ListBusinessPromotions(
    $filter: ModelBusinessPromotionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessPromotions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        businessID
        title
        dateInitial
        dateFinal
        status
        isView
        image
        notifiedUserIDs
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const businessPromotionsByUserID = /* GraphQL */ `
  query BusinessPromotionsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessPromotionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    businessPromotionsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        businessID
        title
        dateInitial
        dateFinal
        status
        isView
        image
        notifiedUserIDs
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const businessPromotionsByBusinessID = /* GraphQL */ `
  query BusinessPromotionsByBusinessID(
    $businessID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessPromotionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    businessPromotionsByBusinessID(
      businessID: $businessID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        businessID
        title
        dateInitial
        dateFinal
        status
        isView
        image
        notifiedUserIDs
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPromotionViews = /* GraphQL */ `
  query GetPromotionViews($id: ID!) {
    getPromotionViews(id: $id) {
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
export const listPromotionViews = /* GraphQL */ `
  query ListPromotionViews(
    $filter: ModelPromotionViewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPromotionViews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        promotionID
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const promotionViewsByPromotionID = /* GraphQL */ `
  query PromotionViewsByPromotionID(
    $promotionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPromotionViewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    promotionViewsByPromotionID(
      promotionID: $promotionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        promotionID
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFavorites = /* GraphQL */ `
  query GetFavorites($id: ID!) {
    getFavorites(id: $id) {
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
        owner
        createdAt
        updatedAt
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
export const listFavorites = /* GraphQL */ `
  query ListFavorites(
    $filter: ModelFavoritesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        businessID
        userID
        position
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const favoritesByBusinessID = /* GraphQL */ `
  query FavoritesByBusinessID(
    $businessID: ID!
    $userID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFavoritesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favoritesByBusinessID(
      businessID: $businessID
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        businessID
        userID
        position
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listFavoritesbyUserID = /* GraphQL */ `
  query ListFavoritesbyUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFavoritesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavoritesbyUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        businessID
        userID
        position
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComplaints = /* GraphQL */ `
  query GetComplaints($id: ID!) {
    getComplaints(id: $id) {
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
export const listComplaints = /* GraphQL */ `
  query ListComplaints(
    $filter: ModelComplaintsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComplaints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getReasonComplaints = /* GraphQL */ `
  query GetReasonComplaints($id: ID!) {
    getReasonComplaints(id: $id) {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listReasonComplaints = /* GraphQL */ `
  query ListReasonComplaints(
    $filter: ModelReasonComplaintsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReasonComplaints(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLogs = /* GraphQL */ `
  query GetLogs($id: ID!) {
    getLogs(id: $id) {
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
export const listLogs = /* GraphQL */ `
  query ListLogs(
    $filter: ModelLogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDate = /* GraphQL */ `
  query GetDate($id: ID!) {
    getDate(id: $id) {
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
      userToken
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
        owner
        createdAt
        updatedAt
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
export const listDates = /* GraphQL */ `
  query ListDates(
    $filter: ModelDateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        userToken
        businessID
        date
        notificationMethod
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listDatesByUser = /* GraphQL */ `
  query ListDatesByUser(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDatesByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        userToken
        businessID
        date
        notificationMethod
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listDatesByBusiness = /* GraphQL */ `
  query ListDatesByBusiness(
    $businessID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDatesByBusiness(
      businessID: $businessID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        userToken
        businessID
        date
        notificationMethod
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getClaimRequest = /* GraphQL */ `
  query GetClaimRequest($id: ID!) {
    getClaimRequest(id: $id) {
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
        owner
        createdAt
        updatedAt
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
export const listClaimRequests = /* GraphQL */ `
  query ListClaimRequests(
    $filter: ModelClaimRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClaimRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        businessID
        userID
        status
        adminResponse
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listClaimsByBusiness = /* GraphQL */ `
  query ListClaimsByBusiness(
    $businessID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClaimRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClaimsByBusiness(
      businessID: $businessID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        businessID
        userID
        status
        adminResponse
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listClaimsByUser = /* GraphQL */ `
  query ListClaimsByUser(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClaimRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClaimsByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        businessID
        userID
        status
        adminResponse
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBusinessUploadHistory = /* GraphQL */ `
  query GetBusinessUploadHistory($id: ID!) {
    getBusinessUploadHistory(id: $id) {
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
export const listBusinessUploadHistories = /* GraphQL */ `
  query ListBusinessUploadHistories(
    $filter: ModelBusinessUploadHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessUploadHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
