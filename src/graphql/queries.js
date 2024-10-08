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
      }
      nextToken
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
      }
      nextToken
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
      }
      nextToken
    }
  }
`;
export const appVersionByDate = /* GraphQL */ `
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
      }
      nextToken
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
      }
      nextToken
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
      }
      createdAt
      updatedAt
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
      }
      nextToken
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
      }
      createdAt
      updatedAt
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
      }
      nextToken
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
      }
      nextToken
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
      }
      business {
        nextToken
      }
      comments {
        nextToken
      }
      owner
      createdAt
      updatedAt
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
      }
      nextToken
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
      }
      nextToken
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
      }
      status
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
      }
      activity
      tags
      favorites {
        nextToken
      }
      description
      prefer
      schedule
      comments {
        nextToken
      }
      catalogpdf
      createdAt
      updatedAt
      owner
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
      }
      nextToken
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
      }
      nextToken
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
      }
      businessID
      stars
      description
      createdAt
      updatedAt
      owner
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
      }
      nextToken
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
      }
      nextToken
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
      }
      nextToken
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
      }
      position
      owner
      createdAt
      updatedAt
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
      }
      nextToken
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
      }
      nextToken
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
      }
      nextToken
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
      }
      nextToken
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
      }
      nextToken
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
      }
      nextToken
    }
  }
`;
