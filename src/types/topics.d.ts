export interface Topic {
    id: string
    slug: string
    title: string
    description: string
    published_at: string
    updated_at: string
    starts_at: string
    ends_at: any
    only_submissions_after: any
    visibility: string
    featured: boolean
    total_photos: number
    links: Links
    status: string
    owners: Owner[]
    current_user_contributions: any[]
    total_current_user_submissions: TotalCurrentUserSubmissions
    cover_photo: CoverPhoto
}

export interface Links {
    self: string
    html: string
    photos: string
}

export interface Owner {
    id: string
    updated_at: string
    username: string
    name: string
    first_name: string
    last_name: any
    twitter_username: string
    portfolio_url: string
    bio: string
    location: string
    links: Links2
    profile_image: ProfileImage
    instagram_username: string
    total_collections: number
    total_likes: number
    total_photos: number
    accepted_tos: boolean
}

export interface Links2 {
    self: string
    html: string
    photos: string
    likes: string
    portfolio: string
    following: string
    followers: string
}

export interface ProfileImage {
    small: string
    medium: string
    large: string
}

export interface TotalCurrentUserSubmissions {}

export interface CoverPhoto {
    id: string
    created_at: string
    updated_at: string
    promoted_at: any
    width: number
    height: number
    color: string
    blur_hash: string
    description: string
    alt_description: string
    urls: Urls
    links: Links3
    user: User
    preview_photos: PreviewPhoto[]
}

export interface Urls {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
}

export interface Links3 {
    self: string
    html: string
    download: string
    download_location: string
}

export interface User {
    id: string
    updated_at: string
    username: string
    name: string
    first_name: string
    last_name: any
    twitter_username: string
    portfolio_url: string
    bio: string
    location: string
    links: Links4
    profile_image: ProfileImage2
    instagram_username: string
    total_collections: number
    total_likes: number
    total_photos: number
    accepted_tos: boolean
}

export interface Links4 {
    self: string
    html: string
    photos: string
    likes: string
    portfolio: string
    following: string
    followers: string
}

export interface ProfileImage2 {
    small: string
    medium: string
    large: string
}

export interface PreviewPhoto {
    id: string
    created_at: string
    updated_at: string
    urls: Urls2
}

export interface Urls2 {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
}


